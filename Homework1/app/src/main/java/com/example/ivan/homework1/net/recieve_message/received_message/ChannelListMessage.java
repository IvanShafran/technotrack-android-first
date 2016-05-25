package com.example.ivan.homework1.net.recieve_message.received_message;

import com.example.ivan.homework1.model.ChatInfo;
import com.example.ivan.homework1.net.MessageFabric;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;

public class ChannelListMessage extends ReceivedMessage {
    private String error;
    private int status;
    private ArrayList<ChatInfo> channelList;

    public String getError() {
        return error;
    }

    public int getStatus() {
        return status;
    }

    public ArrayList<ChatInfo> getChannelList() {
        return channelList;
    }

    @Override
    public ReceivedMessage processJSON(String json) {
        channelList = new ArrayList<>();

        try {
            JSONObject object = new JSONObject(json);
            object = object.getJSONObject(MessageFabric.DATA);
            error = object.getString(MessageFabric.ERROR);
            status = Integer.valueOf(object.getString(MessageFabric.STATUS));

            JSONArray array = object.getJSONArray(MessageFabric.CHANNELS);
            for (int i = 0; i < array.length(); ++i) {
                JSONObject item = array.getJSONObject(i);
                ChatInfo chatInfo = new ChatInfo();
                chatInfo.setCountOnline(Integer.valueOf(item.getString(MessageFabric.ONLINE)));
                chatInfo.setName(item.getString(MessageFabric.NAME));
                chatInfo.setDescription(item.getString(MessageFabric.DESCR));
                chatInfo.setChid(item.getString(MessageFabric.CHID));
                channelList.add(chatInfo);
            }
        } catch (JSONException e) {
            return null;
        }

        return this;
    }
}
