package com.example.ivan.homework1.net.recieve_message.received_message;

import com.example.ivan.homework1.model.ChatInfoModel;
import com.example.ivan.homework1.net.MessageFabric;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;

public class ChannelListMessage extends ReceivedMessage {
    private String error;
    private int status;
    private ArrayList<ChatInfoModel> channelList;

    public String getError() {
        return error;
    }

    public int getStatus() {
        return status;
    }

    public ArrayList<ChatInfoModel> getChannelList() {
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
            if (status == 0) {
                JSONArray array = object.getJSONArray(MessageFabric.CHANNELS);
                for (int i = 0; i < array.length(); ++i) {
                    JSONObject item = array.getJSONObject(i);
                    ChatInfoModel chatInfoModel = new ChatInfoModel();
                    chatInfoModel.setCountOnline(Integer.valueOf(item.getString(MessageFabric.ONLINE)));
                    chatInfoModel.setName(item.getString(MessageFabric.NAME));
                    chatInfoModel.setDescription(item.getString(MessageFabric.DESCR));
                    chatInfoModel.setChid(item.getString(MessageFabric.CHID));
                    channelList.add(chatInfoModel);
                }
            }
        } catch (JSONException e) {
            return null;
        }

        return this;
    }
}
