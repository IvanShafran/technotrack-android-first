package com.example.ivan.homework1.net.recieve_message;

public class MessageReceiver implements IMessageReciever {
    private static final String TAG = "MessageReceiver";

    private IReceiveMessageCallback mCallback;

    @Override
    public void setReceiveMessageCallback(IReceiveMessageCallback callback) {
        mCallback = callback;
    }

    @Override
    public void clean() {

    }
}
