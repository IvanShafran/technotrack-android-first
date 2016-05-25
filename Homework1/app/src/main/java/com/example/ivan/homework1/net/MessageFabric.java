package com.example.ivan.homework1.net;

import android.util.Log;

import com.example.ivan.homework1.net.recieve_message.IReceiveMessageCallback;
import com.example.ivan.homework1.net.recieve_message.received_message.AuthMessage;
import com.example.ivan.homework1.net.recieve_message.received_message.ChannelListMessage;
import com.example.ivan.homework1.net.recieve_message.received_message.CreateChannelMessage;
import com.example.ivan.homework1.net.recieve_message.received_message.EnterMessage;
import com.example.ivan.homework1.net.recieve_message.received_message.EvEnterMessage;
import com.example.ivan.homework1.net.recieve_message.received_message.EvLeaveMessage;
import com.example.ivan.homework1.net.recieve_message.received_message.EvMessage;
import com.example.ivan.homework1.net.recieve_message.received_message.LeaveMessage;
import com.example.ivan.homework1.net.recieve_message.received_message.ReceivedMessage;
import com.example.ivan.homework1.net.recieve_message.received_message.RegisterMessage;
import com.example.ivan.homework1.net.recieve_message.received_message.SetUserInfoMessage;
import com.example.ivan.homework1.net.recieve_message.received_message.UserInfoMessage;
import com.example.ivan.homework1.net.recieve_message.received_message.WelcomeMessage;
import com.example.ivan.homework1.net.send_message.IMessageSender;

import org.json.JSONException;
import org.json.JSONObject;

public class MessageFabric {
    private static final String TAG = "MessageFabric";

    private static final String ACTION = "action";
    private static final String ACTION_WELCOME = "welcome";
    private static final String ACTION_REGISTER = "register";
    private static final String ACTION_AUTH = "auth";
    private static final String ACTION_CHANNEL_LIST = "channellist";
    private static final String ACTION_CREATE_CHANNEL = "createchannel";
    private static final String ACTION_SET_USER_INFO = "setuserinfo";
    private static final String ACTION_USER_INFO = "userinfo";
    private static final String ACTION_ENTER = "enter";
    private static final String ACTION_LEAVE = "leave";
    private static final String ACTION_MESSAGE = "message";

    private static final String ACTION_EV_LEAVE = "ev_leave";
    private static final String ACTION_EV_ENTER = "ev_enter";
    private static final String ACTION_EV_MESSAGE = "ev_message";

    public static final String DATA = "data";
    public static final String LOGIN = "login";
    public static final String PASS = "pass";
    public static final String NICK = "nick";
    public static final String CID = "cid";
    public static final String SID = "sid";
    public static final String NAME = "name";
    public static final String DESCR = "descr";
    public static final String USER_STATUS = "user_status";
    public static final String USER = "user";
    public static final String CHANNEL = "channel";
    public static final String BODY = "body";
    public static final String MESSAGE = "message";
    public static final String TIME = "time";
    public static final String STATUS = "status";
    public static final String ERROR = "error";
    public static final String CHANNELS = "channels";
    public static final String ONLINE = "online";
    public static final String CHID = "chid";
    public static final String USERS = "users";
    public static final String LAST_MSG = "last_msg";
    public static final String UID = "uid";
    public static final String FROM = "from";
    public static final String MID = "mid";

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

    public static IReceiveMessageCallback.Type getReceivedMessageType(String json) {
        try {
            JSONObject jsonObject = new JSONObject(json);

            switch (jsonObject.getString(ACTION)) {
                case ACTION_AUTH:
                    return IReceiveMessageCallback.Type.AUTH;
                case ACTION_WELCOME:
                    return IReceiveMessageCallback.Type.WELCOME;
                case ACTION_REGISTER:
                    return IReceiveMessageCallback.Type.REGISTER;
                case ACTION_CHANNEL_LIST:
                    return IReceiveMessageCallback.Type.CHANNEL_LIST;
                case ACTION_CREATE_CHANNEL:
                    return IReceiveMessageCallback.Type.CREATE_CHANNEL;
                case ACTION_ENTER:
                    return IReceiveMessageCallback.Type.ENTER_CHANNEL;
                case ACTION_USER_INFO:
                    return IReceiveMessageCallback.Type.GET_USER_INFO;
                case ACTION_SET_USER_INFO:
                    return IReceiveMessageCallback.Type.SET_USER_INFO;
                case ACTION_LEAVE:
                    return IReceiveMessageCallback.Type.LEAVE_MESSAGE;
                case ACTION_EV_ENTER:
                    return IReceiveMessageCallback.Type.EV_ENTER_CHANNEL;
                case ACTION_EV_LEAVE:
                    return IReceiveMessageCallback.Type.EV_LEAVE_CHANNEL;
                case ACTION_EV_MESSAGE:
                    return IReceiveMessageCallback.Type.EV_MESSAGE;
                default:
                    return null;
            }
        } catch (JSONException e) {
            return null;
        }
    }

    public static ReceivedMessage getReceivedMessage(IReceiveMessageCallback.Type type,
                                                     String json) {
        switch (type) {
            case WELCOME:
                return (new WelcomeMessage()).processJSON(json);
            case AUTH:
                return (new AuthMessage()).processJSON(json);
            case REGISTER:
                return (new RegisterMessage()).processJSON(json);
            case CHANNEL_LIST:
                return (new ChannelListMessage()).processJSON(json);
            case CREATE_CHANNEL:
                return (new CreateChannelMessage()).processJSON(json);
            case ENTER_CHANNEL:
                return (new EnterMessage()).processJSON(json);
            case GET_USER_INFO:
                return (new UserInfoMessage()).processJSON(json);
            case SET_USER_INFO:
                return (new SetUserInfoMessage()).processJSON(json);
            case LEAVE_MESSAGE:
                return (new LeaveMessage()).processJSON(json);
            case EV_ENTER_CHANNEL:
                return (new EvEnterMessage()).processJSON(json);
            case EV_LEAVE_CHANNEL:
                return (new EvLeaveMessage()).processJSON(json);
            case EV_MESSAGE:
                return (new EvMessage()).processJSON(json);
            default:
                return null;
        }
    }
}
