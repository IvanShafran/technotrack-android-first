package com.example.ivan.homework1.net.send_message;

import android.util.Log;

import org.json.JSONException;
import org.json.JSONObject;

public class MessageFabric {
    private static final String TAG = "MessageFabric";

    private static final String ACTION = "action";
    private static final String ACTION_REGISTER = "register";
    private static final String ACTION_AUTH = "auth";
    private static final String ACTION_CHANNEL_LIST = "channellist";
    private static final String ACTION_CREATE_CHANNEL = "createchannel";
    private static final String ACTION_SET_USER_INFO = "setuserinfo";
    private static final String ACTION_USER_INFO = "userinfo";
    private static final String ACTION_ENTER = "enter";
    private static final String ACTION_LEAVE = "leave";
    private static final String ACTION_MESSAGE = "message";

    private static final String DATA = "data";
    private static final String LOGIN = "login";
    private static final String PASS = "pass";
    private static final String NICK = "nick";
    private static final String CID = "cid";
    private static final String SID = "sid";
    private static final String NAME = "name";
    private static final String DESCR = "descr";
    private static final String USER_STATUS = "user_status";
    private static final String USER = "user";
    private static final String CHANNEL = "channel";
    private static final String BODY = "body";

    private static String getRegister(String[] args) {
        if (args.length != 3) {
            return null;
        }

        try {
            JSONObject object = new JSONObject();
            object.put(ACTION, ACTION_REGISTER);

            JSONObject data = new JSONObject();
            data.put(LOGIN, args[0]);
            data.put(PASS, args[1]);
            data.put(NICK, args[2]);
            object.put(DATA, data);

            return object.toString();
        } catch (JSONException e) {
            return null;
        }
    }

    private static String getAuth(String[] args) {
        if (args.length != 2) {
            return null;
        }

        try {
            JSONObject object = new JSONObject();
            object.put(ACTION, ACTION_AUTH);

            JSONObject data = new JSONObject();
            data.put(LOGIN, args[0]);
            data.put(PASS, args[1]);
            object.put(DATA, data);

            return object.toString();
        } catch (JSONException e) {
            return null;
        }
    }

    private static String getChannelList(String[] args) {
        if (args.length != 2) {
            return null;
        }

        try {
            JSONObject object = new JSONObject();
            object.put(ACTION, ACTION_CHANNEL_LIST);

            JSONObject data = new JSONObject();
            data.put(CID, args[0]);
            data.put(SID, args[1]);
            object.put(DATA, data);

            return object.toString();
        } catch (JSONException e) {
            return null;
        }
    }

    private static String getCreateChannel(String[] args) {
        if (args.length != 4) {
            return null;
        }

        try {
            JSONObject object = new JSONObject();
            object.put(ACTION, ACTION_CREATE_CHANNEL);

            JSONObject data = new JSONObject();
            data.put(CID, args[0]);
            data.put(SID, args[1]);
            data.put(NAME, args[2]);
            data.put(DESCR, args[3]);
            object.put(DATA, data);

            return object.toString();
        } catch (JSONException e) {
            return null;
        }
    }

    private static String getSetUserInfo(String[] args) {
        if (args.length != 3) {
            return null;
        }

        try {
            JSONObject object = new JSONObject();
            object.put(ACTION, ACTION_SET_USER_INFO);

            JSONObject data = new JSONObject();
            data.put(USER_STATUS, args[0]);
            data.put(CID, args[1]);
            data.put(SID, args[2]);
            object.put(DATA, data);

            return object.toString();
        } catch (JSONException e) {
            return null;
        }
    }

    private static String getUserInfo(String[] args) {
        if (args.length != 3) {
            return null;
        }

        try {
            JSONObject object = new JSONObject();
            object.put(ACTION, ACTION_USER_INFO);

            JSONObject data = new JSONObject();
            data.put(USER, args[0]);
            data.put(CID, args[1]);
            data.put(SID, args[2]);
            object.put(DATA, data);

            return object.toString();
        } catch (JSONException e) {
            return null;
        }
    }

    private static String getEnter(String[] args) {
        if (args.length != 3) {
            return null;
        }

        try {
            JSONObject object = new JSONObject();
            object.put(ACTION, ACTION_ENTER);

            JSONObject data = new JSONObject();
            data.put(CID, args[0]);
            data.put(SID, args[1]);
            data.put(CHANNEL, args[2]);
            object.put(DATA, data);

            return object.toString();
        } catch (JSONException e) {
            return null;
        }
    }

    private static String getLeave(String[] args) {
        if (args.length != 3) {
            return null;
        }

        try {
            JSONObject object = new JSONObject();
            object.put(ACTION, ACTION_LEAVE);

            JSONObject data = new JSONObject();
            data.put(CID, args[0]);
            data.put(SID, args[1]);
            data.put(CHANNEL, args[2]);
            object.put(DATA, data);

            return object.toString();
        } catch (JSONException e) {
            return null;
        }
    }

    private static String getMessage(String[] args) {
        if (args.length != 4) {
            return null;
        }

        try {
            JSONObject object = new JSONObject();
            object.put(ACTION, ACTION_MESSAGE);

            JSONObject data = new JSONObject();
            data.put(CID, args[0]);
            data.put(SID, args[1]);
            data.put(CHANNEL, args[2]);
            data.put(BODY, args[3]);
            object.put(DATA, data);

            return object.toString();
        } catch (JSONException e) {
            return null;
        }
    }

    public static String getSendMessage(IMessageSender.SendMessageType type, String[] args) {
        String result = null;
        switch (type) {
            case REGISTER:
                result = getRegister(args);
                break;
            case AUTH:
                result = getAuth(args);
                break;
            case GET_CHANNELS:
                result = getChannelList(args);
                break;
            case SET_USER_INFO:
                result = getSetUserInfo(args);
                break;
            case GET_USER_INFO:
                result = getUserInfo(args);
                break;
            case ENTER_CHANNEL:
                result = getEnter(args);
                break;
            case LEAVE_CHANNEL:
                result = getLeave(args);
                break;
            case SEND_MESSAGE:
                result = getMessage(args);
                break;
            case STOP_MESSAGE_SENDER_THREAD:
                Log.wtf(TAG, "STOP_MESSAGE_SENDER_THREAD");
                break;
        }

        return result;
    }
}
