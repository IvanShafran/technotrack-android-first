package com.example.ivan.homework1.net.recieve_message.received_message;

import com.example.ivan.homework1.net.MessageFabric;

import org.json.JSONException;
import org.json.JSONObject;

public class UserInfoMessage extends ReceivedMessage {
    private String error;
    private int status;
    private String nick;
    private String userStatus;

    public String getError() {
        return error;
    }

    public int getStatus() {
        return status;
    }

    public String getNick() {
        return nick;
    }

    public String getUserStatus() {
        return userStatus;
    }

    @Override
    public ReceivedMessage processJSON(String json) {
        try {
            JSONObject object = new JSONObject(json);
            object = object.getJSONObject(MessageFabric.DATA);
            status = Integer.valueOf(object.getString(MessageFabric.STATUS));
            if (status == 0) {
                error = object.getString(MessageFabric.ERROR);
                nick = object.getString(MessageFabric.NICK);
                userStatus = object.getString(MessageFabric.USER_STATUS);
            }
        } catch (JSONException e) {
            return null;
        }

        return this;
    }
}
