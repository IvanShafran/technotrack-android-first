package com.example.ivan.homework1.net.recieve_message.received_message;

import com.example.ivan.homework1.net.MessageFabric;

import org.json.JSONException;
import org.json.JSONObject;

public class LeaveMessage extends ReceivedMessage {
    private String error;
    private int status;

    public String getError() {
        return error;
    }

    public int getStatus() {
        return status;
    }

    @Override
    public ReceivedMessage processJSON(String json) {
        try {
            JSONObject object = new JSONObject(json);
            object = object.getJSONObject(MessageFabric.DATA);
            error = object.getString(MessageFabric.ERROR);
            status = Integer.valueOf(object.getString(MessageFabric.STATUS));
        } catch (JSONException e) {
            return null;
        }

        return this;
    }
}
