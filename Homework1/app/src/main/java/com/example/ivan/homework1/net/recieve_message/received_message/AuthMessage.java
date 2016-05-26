package com.example.ivan.homework1.net.recieve_message.received_message;

import com.example.ivan.homework1.net.MessageFabric;

import org.json.JSONException;
import org.json.JSONObject;

public class AuthMessage extends ReceivedMessage {
    private int status;
    private String error;
    private String sid;
    private String uid;

    public int getStatus() {
        return status;
    }

    public String getError() {
        return error;
    }

    public String getSid() {
        return sid;
    }

    public String getUid() {
        return uid;
    }

    @Override
    public AuthMessage processJSON(String json) {
        try {
            JSONObject object = new JSONObject(json);
            object = object.getJSONObject(MessageFabric.DATA);
            error = object.getString(MessageFabric.ERROR);
            status = Integer.valueOf(object.getString(MessageFabric.STATUS));
            if (status == 0) {
                sid = object.getString(MessageFabric.SID);
                uid = object.getString(MessageFabric.CID);
            }
        } catch (JSONException e) {
            return null;
        }

        return this;
    }
}
