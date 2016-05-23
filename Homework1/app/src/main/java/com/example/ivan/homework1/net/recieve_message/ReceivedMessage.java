package com.example.ivan.homework1.net.recieve_message;

import org.json.JSONObject;

abstract public class ReceivedMessage {
    abstract public void processJSON(JSONObject json);
}
