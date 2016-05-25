package com.example.ivan.homework1.net.recieve_message.received_message;

import com.example.ivan.homework1.net.MessageFabric;

import org.json.JSONException;
import org.json.JSONObject;

public class WelcomeMessage extends ReceivedMessage {
    private String welcomeText;
    private String time;

    public String getWelcomeText() {
        return welcomeText;
    }

    public String getTime() {
        return time;
    }

    @Override
    public ReceivedMessage processJSON(String json) {
        try {
            JSONObject object = new JSONObject(json);
            welcomeText = object.getString(MessageFabric.MESSAGE);
            time = object.getString(MessageFabric.TIME);
        } catch (JSONException e) {
            return null;
        }

        return this;
    }
}
