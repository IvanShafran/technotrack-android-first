package com.example.ivan.homework1.net.recieve_message;

import android.util.Log;

import com.example.ivan.homework1.net.IServerProcessor;

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
        mInputStream = socket.getInputStream();
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
        while (!mMustBeStopped) {
            //TODO
        }
    }
}
