package com.example.ivan.homework1.net.recieve_message.received_message;

import com.example.ivan.homework1.net.MessageFabric;

import org.json.JSONException;
import org.json.JSONObject;

public class EvEnterMessage extends ReceivedMessage {
    private String chid;
    private String uid;
    private String nick;

    public String getChid() {
        return chid;
    }

    public String getUid() {
        return uid;
    }

    public String getNick() {
        return nick;
    }

    @Override
    public ReceivedMessage processJSON(String json) {
        try {
            JSONObject object = new JSONObject(json);
            object = object.getJSONObject(MessageFabric.DATA);
            chid = object.getString(MessageFabric.CHID);
            uid = object.getString(MessageFabric.UID);
            nick = object.getString(MessageFabric.NICK);
        } catch (JSONException e) {
            return null;
        }

        return this;
    }
}
