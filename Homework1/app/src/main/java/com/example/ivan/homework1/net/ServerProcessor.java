package com.example.ivan.homework1.net;

import android.os.AsyncTask;
import android.util.Log;

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

    private IConnectToServerCallback mConnectToServerCallback;
    private IServerErrorCallback mServerErrorCallback;

    public void setConnectToServerCallback(IConnectToServerCallback connectToServerCallback) {
        mConnectToServerCallback = connectToServerCallback;
    }

    public void setServerErrorCallback(IServerErrorCallback serverErrorCallback) {
        mServerErrorCallback = serverErrorCallback;
    }

    private void clean() {
        try {
            mSocket.close();
            mSocket = null;
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
                mIsConnected = true;
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

        (new ConnectTask()).executeOnExecutor(AsyncTask.THREAD_POOL_EXECUTOR);
    }

    @Override
    public void onError() {
        if (mServerErrorCallback != null) {
            mServerErrorCallback.onError();
        }
    }
}
