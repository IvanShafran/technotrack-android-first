package com.example.ivan.homework1.net.recieve_message;

import android.util.Log;

import com.example.ivan.homework1.net.IServerProcessor;
import com.example.ivan.homework1.net.MessageFabric;
import com.example.ivan.homework1.net.recieve_message.received_message.ReceivedMessage;

import java.io.BufferedInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.Socket;

public class MessageReceiver implements Runnable, IMessageReceiver {
    private static final String TAG = "MessageReceiver";

    private IReceiveMessageCallback mCallback;

    private IServerProcessor mServerProcessor;
    private boolean mMustBeStopped;
    private InputStream mInputStream;

    public MessageReceiver(IServerProcessor serverProcessor, Socket socket) throws IOException {
        mServerProcessor = serverProcessor;
        mInputStream = new BufferedInputStream(socket.getInputStream());
    }

    @Override
    public void setReceiveMessageCallback(IReceiveMessageCallback callback) {
        mCallback = callback;
    }

    @Override
    public void clean() {
        try {
            mInputStream.close();
            mMustBeStopped = true;
        } catch (IOException e) {
            Log.d(TAG, "clean error");
        }
    }

    @Override
    public void run() {
        boolean cleanup = false;
        byte[] data = new byte[32768];
        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
        while (!mMustBeStopped) {
            try {
                if (cleanup) {
                    outputStream.reset();
                    cleanup = false;
                }

                int readBytes = mInputStream.read(data);
                Log.d(TAG, "read " + String.valueOf(readBytes));
                if (readBytes != -1) {
                    outputStream.write(data, 0, readBytes);
                    outputStream.flush();
                    String result = outputStream.toString("utf-8");
                    if (result.endsWith("}")) {
                        IReceiveMessageCallback.Type type =
                                MessageFabric.getReceivedMessageType(result);
                        if (type != null) {
                            ReceivedMessage message =
                                    MessageFabric.getReceivedMessage(type, result);

                            cleanup = true;

                            if (mCallback != null && message != null) {
                                Log.d(TAG, "receive message");
                                mCallback.onMessage(type, message);
                            }
                        }
                    }
                }
            } catch (IOException e) {
                mMustBeStopped = true;
                mServerProcessor.onError();
            }
        }
    }
}
