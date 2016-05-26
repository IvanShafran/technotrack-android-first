package com.example.ivan.homework1.net;

import android.os.AsyncTask;
import android.util.Log;

import com.example.ivan.homework1.net.recieve_message.IMessageReceiver;
import com.example.ivan.homework1.net.recieve_message.IReceiveMessageCallback;
import com.example.ivan.homework1.net.recieve_message.MessageReceiver;
import com.example.ivan.homework1.net.send_message.IMessageSender;
import com.example.ivan.homework1.net.send_message.MessageSender;

import java.io.IOException;
import java.net.Socket;
import java.net.UnknownHostException;

public class ServerProcessor implements IServerProcessor {
    private static final String TAG = "ServerProcessor";

    private static ServerProcessor ourInstance = new ServerProcessor();
    public static ServerProcessor getInstance() {
        return ourInstance;
    }
    private ServerProcessor() {
    }

    public static final String HOST = "188.166.49.215";
    public static final int PORT = 7777;

    private Socket mSocket;
    private boolean mIsTryingToConnect;
    private boolean mIsWorking;
    private IMessageSender mMessageSender;
    private IMessageReceiver mIMessageReceiver;

    private IConnectToServerCallback mConnectToServerCallback;
    private IServerErrorCallback mServerErrorCallback;

    public void setConnectToServerCallback(IConnectToServerCallback connectToServerCallback) {
        mConnectToServerCallback = connectToServerCallback;
    }

    public void setServerErrorCallback(IServerErrorCallback serverErrorCallback) {
        mServerErrorCallback = serverErrorCallback;
    }

    public void setReceiveMessageCallback(IReceiveMessageCallback callback) {
        if (mIsWorking) {
            mIMessageReceiver.setReceiveMessageCallback(callback);
        }
    }

    public void sendMessage(IMessageSender.SendMessageType type, String[] args) {
        mMessageSender.sendMessage(type, args);
    }

    public boolean isWorking() {
        return mIsWorking;
    }

    private void clean() {
        if (mSocket == null) {
            return;
        }

        try {
            mMessageSender.clean();
            mMessageSender = null;
            mIMessageReceiver.clean();
            mIMessageReceiver = null;
            mSocket.close();
            mSocket = null;

            mIsWorking = false;
        } catch (IOException e) {
            Log.d(TAG, "clean error");
        }
    }

    private class ConnectTask extends AsyncTask<Void, Void, Void> {
        @Override
        protected Void doInBackground(Void... params) {
            clean();

            boolean mIsConnected = false;
            try {
                mSocket = new Socket(HOST, PORT);

                MessageSender messageSender = new MessageSender(ServerProcessor.this, mSocket);
                mMessageSender = messageSender;
                new Thread(messageSender).start();

                MessageReceiver messageReceiver =
                        new MessageReceiver(ServerProcessor.this, mSocket);
                mIMessageReceiver = messageReceiver;
                new Thread(messageReceiver).start();

                mIsConnected = true;
                mIsWorking = true;

                Log.d(TAG, "connected");
            } catch (UnknownHostException e) {
                Log.d(TAG, "connect error");
            } catch (IOException e) {
                Log.d(TAG, "connect error");
            }

            if (mConnectToServerCallback != null) {
                if (mIsConnected) {
                    mConnectToServerCallback.onSuccess();
                } else {
                    mConnectToServerCallback.onError(IConnectToServerCallback.ERROR_SERVER);
                }
            }

            return null;
        }

        @Override
        protected void onPreExecute() {
            super.onPreExecute();
            mIsTryingToConnect = false;
        }
    }

    public void tryConnect() {
        if (mIsTryingToConnect) {
            return;
        }

        mIsTryingToConnect = true;
        mIsWorking = false;

        (new ConnectTask()).executeOnExecutor(AsyncTask.THREAD_POOL_EXECUTOR);
    }

    @Override
    public void onError() {
        if (mIsWorking && mServerErrorCallback != null) {
            mServerErrorCallback.onError();
            mIsWorking = false;
        }
    }
}
