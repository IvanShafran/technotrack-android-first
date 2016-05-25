package com.example.ivan.homework1.model;

import android.os.Parcel;
import android.os.Parcelable;

public class ChatInfo implements Parcelable {
    private String name;
    private String description;
    private int countOnline;
    private String chid;

    public ChatInfo() {
    }

    public String getChid() {
        return chid;
    }

    public void setChid(String chid) {
        this.chid = chid;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setCountOnline(int countOnline) {
        this.countOnline = countOnline;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public int getCountOnline() {
        return countOnline;
    }

    @Override
    public int describeContents() {
        return 0;
    }

    @Override
    public void writeToParcel(Parcel dest, int flags) {
        dest.writeString(name);
        dest.writeString(description);
        dest.writeInt(countOnline);
    }

    public static final Parcelable.Creator<ChatInfo> CREATOR = new Parcelable.Creator<ChatInfo>() {
        @Override
        public ChatInfo createFromParcel(Parcel source) {
            ChatInfo chatInfo = new ChatInfo();
            chatInfo.setName(source.readString());
            chatInfo.setDescription(source.readString());
            chatInfo.setCountOnline(source.readInt());
            return chatInfo;
        }

        @Override
        public ChatInfo[] newArray(int size) {
            return new ChatInfo[size];
        }
    };
}
