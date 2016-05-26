package com.example.ivan.homework1.net.send_message;

import android.util.Log;

import com.example.ivan.homework1.net.IServerProcessor;
import com.example.ivan.homework1.net.MessageFabric;

import java.io.BufferedOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.net.Socket;
import java.nio.charset.Charset;
import java.util.concurrent.ArrayBlockingQueue;

public class MessageSender implements Runnable, IMessageSender {
    private static final String TAG = "MessageSender";
    private static final int QUEUE_CAPACITY = 32;

    private IServerProcessor mServerProcessor;
    private OutputStream mOutputStream;
    private boolean mMustBeStopped;

    private class SendMessage {
        SendMessageType type;
        String[] args;

        public SendMessage(SendMessageType type, String[] args) {
            this.type = type;
            this.args = args;
        }
    }
    private ArrayBlockingQueue<SendMessage> mSendMessages;

    public MessageSender(IServerProcessor serverProcessor, Socket socket) throws IOException {
        mServerProcessor = serverProcessor;
        mOutputStream = new BufferedOutputStream(socket.getOutputStream());
        mMustBeStopped = false;
        mSendMessages = new ArrayBlockingQueue<SendMessage>(QUEUE_CAPACITY, true);
        Log.d(TAG, "constructed");
    }

    @Override
    public void sendMessage(SendMessageType type, String[] args) {
        try {
            mSendMessages.add(new SendMessage(type, args));
        } catch (IllegalStateException e) {
            mServerProcessor.onError();
        }
    }

    @Override
    public void clean() {
        try {
            mOutputStream.close();
            mMustBeStopped = true;

            //если очередь пуста, то он будет ждать сообщения и никогда не остановится
            sendMessage(SendMessageType.STOP_MESSAGE_SENDER_THREAD, null);
        } catch (IOException e) {
            //
        }
    }

    @Override
    public void run() {
        while (!mMustBeStopped) {
            try {
                SendMessage sendMessage = mSendMessages.take();
                if (sendMessage.type == SendMessageType.STOP_MESSAGE_SENDER_THREAD) {
                    return;
                }

                String message = MessageFabric.getSendMessage(sendMessage.type, sendMessage.args);
                byte[] bytes = message.getBytes(Charset.forName("UTF-8"));
                mOutputStream.write(bytes);
                mOutputStream.flush();
                Log.d(TAG, "send new message" + sendMessage.type.toString());
            } catch (InterruptedException e) {
                mMustBeStopped = true;
                mServerProcessor.onError();
            } catch (IOException e) {
                mMustBeStopped = true;
                mServerProcessor.onError();
            }
        }
    }
}
