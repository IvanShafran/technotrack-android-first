package com.example.ivan.homework1.net.recieve_message;

public interface IReceiveMessageCallback {
    enum ReceivedMessageType {
        WELCOME, AUTH, REGISTER, CHANNEL_LIST, CREATE_CHANNEL, ENTER_CHANNEL,
        GET_USER_INFO, SET_USER_INFO, LEAVE_MESSAGE, USER_ENTER_CHANNEL, USER_LEAVE_CHANNEL,
        USER_SEND_MESSAGE
    }

    void onMessage(ReceivedMessageType type, ReceivedMessage message);
}
