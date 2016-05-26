package com.example.ivan.homework1.net.send_message;

public interface IMessageSender {
    enum SendMessageType {
        REGISTER, AUTH, GET_CHANNELS, SET_USER_INFO, GET_USER_INFO, ENTER_CHANNEL,
        LEAVE_CHANNEL, SEND_MESSAGE, CREATE_CHANNEL, STOP_MESSAGE_SENDER_THREAD
    }

    void sendMessage(SendMessageType type, String[] args);
    void clean();
}
