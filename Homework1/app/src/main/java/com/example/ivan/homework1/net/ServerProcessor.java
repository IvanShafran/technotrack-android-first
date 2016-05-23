package com.example.ivan.homework1.net;

import android.util.Log;

import java.io.IOException;
import java.net.Socket;

public class ServerProcessor {
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

    public void setConnectToServerCallback(IConnectToServerCallback connectToServerCallback) {
        mConnectToServerCallback = connectToServerCallback;
    }

    private void clean() {
        try {
            mSocket.close();
            mSocket = null;
        } catch (IOException e) {
            Log.d(TAG, "clean error");
        }
    }

    public void tryConnect() {
        if (mIsTryingToConnect) {
            return;
        }

        mIsTryingToConnect = true;
        clean();


    }

}
