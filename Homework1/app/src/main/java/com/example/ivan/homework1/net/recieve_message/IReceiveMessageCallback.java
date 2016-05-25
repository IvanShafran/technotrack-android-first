package com.example.ivan.homework1.net.recieve_message;

import com.example.ivan.homework1.net.recieve_message.received_message.ReceivedMessage;

public interface IReceiveMessageCallback {
    enum Type {
        WELCOME, AUTH, REGISTER, CHANNEL_LIST, CREATE_CHANNEL, ENTER_CHANNEL,
        GET_USER_INFO, SET_USER_INFO, LEAVE_MESSAGE, EV_ENTER_CHANNEL, EV_LEAVE_CHANNEL,
        EV_MESSAGE
    }

    void onMessage(Type type, ReceivedMessage message);
}
