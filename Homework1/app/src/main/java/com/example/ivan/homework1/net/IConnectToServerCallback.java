package com.example.ivan.homework1.net;

public interface IConnectToServerCallback {
    String ERROR_OK = "NO_ERROR";
    String ERROR_INTERNET = "ERROR_INTERNET";
    String ERROR_SERVER = "ERROR_SERVER";

    void onFinish(String errorType);
}
