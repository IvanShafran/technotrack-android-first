package com.example.ivan.homework1.net.recieve_message.received_message;

import com.example.ivan.homework1.net.MessageFabric;

import org.json.JSONException;
import org.json.JSONObject;

public class CreateChannelMessage extends ReceivedMessage {
    private String error;
    private int status;
    private String chid;

    public String getError() {
        return error;
    }

    public int getStatus() {
        return status;
    }

    public String getChid() {
        return chid;
    }

    @Override
    public ReceivedMessage processJSON(String json) {
        try {
            JSONObject object = new JSONObject(json);
            object = object.getJSONObject(MessageFabric.DATA);
            error = object.getString(MessageFabric.ERROR);
            status = Integer.valueOf(object.getString(MessageFabric.STATUS));
            if (status == 0) {
                chid = object.getString(object.getString(MessageFabric.CHID));
            }
        } catch (JSONException e) {
            return null;
        }

        return this;
    }
}
