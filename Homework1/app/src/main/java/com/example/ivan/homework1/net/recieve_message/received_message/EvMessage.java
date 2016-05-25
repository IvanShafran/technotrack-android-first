package com.example.ivan.homework1.net.recieve_message.received_message;

import com.example.ivan.homework1.net.MessageFabric;

import org.json.JSONException;
import org.json.JSONObject;

public class EvMessage extends ReceivedMessage {
    private String chid;
    private String from;
    private String nick;
    private String body;

    public String getBody() {
        return body;
    }

    public String getChid() {
        return chid;
    }

    public String getFrom() {
        return from;
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
            from = object.getString(MessageFabric.FROM);
            nick = object.getString(MessageFabric.NICK);
            body = object.getString(MessageFabric.BODY);
        } catch (JSONException e) {
            return null;
        }

        return this;
    }
}
