package com.example.ivan.homework1.net.recieve_message;

public interface IMessageReciever {
    void setReceiveMessageCallback(IReceiveMessageCallback callback);
    void clean();
}
