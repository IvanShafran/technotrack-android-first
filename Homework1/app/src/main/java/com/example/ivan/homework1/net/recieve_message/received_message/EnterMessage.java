package com.example.ivan.homework1.net.recieve_message.received_message;

import com.example.ivan.homework1.model.User;
import com.example.ivan.homework1.model.UserMessage;
import com.example.ivan.homework1.net.MessageFabric;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;

public class EnterMessage extends ReceivedMessage {
    private String error;
    private int status;
    private ArrayList<User> users;
    private ArrayList<UserMessage> userMessages;

    public String getError() {
        return error;
    }

    public int getStatus() {
        return status;
    }

    public ArrayList<User> getUsers() {
        return users;
    }

    public ArrayList<UserMessage> getUserMessages() {
        return userMessages;
    }

    @Override
    public ReceivedMessage processJSON(String json) {
        users = new ArrayList<>();
        userMessages = new ArrayList<>();

        try {
            JSONObject object = new JSONObject(json);
            object = object.getJSONObject(MessageFabric.DATA);

            error = object.getString(MessageFabric.ERROR);
            status = Integer.valueOf(object.getString(MessageFabric.STATUS));

            if (status == 0) {
                JSONArray usersArray = object.getJSONArray(MessageFabric.USERS);
                for (int i = 0; i < usersArray.length(); ++i) {
                    JSONObject item = usersArray.getJSONObject(i);
                    User user = new User();
                    user.setNick(item.getString(MessageFabric.NICK));
                    user.setUid(item.getString(MessageFabric.UID));
                    users.add(user);
                }

                if (object.has(MessageFabric.LAST_MSG)) {
                    JSONArray msgArray = object.getJSONArray(MessageFabric.LAST_MSG);
                    for (int i = 0; i < msgArray.length(); ++i) {
                        JSONObject item = msgArray.getJSONObject(i);
                        UserMessage msg = new UserMessage();
                        msg.setBody(item.getString(MessageFabric.BODY));
                        msg.setFrom(item.getString(MessageFabric.FROM));
                        msg.setMid(item.getString(MessageFabric.MID));
                        msg.setNick(item.getString(MessageFabric.NICK));
                        msg.setTime(item.getString(MessageFabric.TIME));
                        userMessages.add(msg);
                    }
                }
            }
        } catch (JSONException e) {
            return null;
        }

        return this;
    }
}
