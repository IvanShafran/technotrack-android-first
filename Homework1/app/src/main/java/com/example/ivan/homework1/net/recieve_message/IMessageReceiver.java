package com.example.ivan.homework1.net.recieve_message;

public interface IMessageReceiver {
    void setReceiveMessageCallback(IReceiveMessageCallback callback);
    void clean();
}
