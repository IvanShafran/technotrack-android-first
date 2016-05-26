package com.example.ivan.homework1.main_activity;

import android.os.Bundle;
import android.os.Handler;
import android.support.v4.app.Fragment;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.util.Log;
import android.view.Menu;
import android.view.MenuItem;

import com.example.ivan.homework1.R;
import com.example.ivan.homework1.main_activity.fragments.LoginFragment;
import com.example.ivan.homework1.main_activity.fragments.RegisterFragment;
import com.example.ivan.homework1.main_activity.fragments.SettingsFragment;
import com.example.ivan.homework1.main_activity.fragments.TryAgainFragment;
import com.example.ivan.homework1.main_activity.fragments.chat_list.ChatListFragment;
import com.example.ivan.homework1.net.IConnectToServerCallback;
import com.example.ivan.homework1.net.IServerErrorCallback;
import com.example.ivan.homework1.net.ServerProcessor;
import com.example.ivan.homework1.net.recieve_message.IReceiveMessageCallback;
import com.example.ivan.homework1.net.recieve_message.received_message.AuthMessage;
import com.example.ivan.homework1.net.recieve_message.received_message.ChannelListMessage;
import com.example.ivan.homework1.net.recieve_message.received_message.ReceivedMessage;
import com.example.ivan.homework1.net.recieve_message.received_message.RegisterMessage;

public class MainActivity extends AppCompatActivity implements IServerErrorCallback,
        IReceiveMessageCallback {

    private static final String TAG = "MainActivity";

    private String sid;
    private String uid;
    private String nick;
    private Handler mHandler;

    public String getNick() {
        return nick;
    }

    public void setNick(String nick) {
        this.nick = nick;
    }

    public String getSid() {
        return sid;
    }

    public void setSid(String sid) {
        this.sid = sid;
    }

    public String getUid() {
        return uid;
    }

    public void setUid(String uid) {
        this.uid = uid;
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        super.onCreateOptionsMenu(menu);
        getMenuInflater().inflate(R.menu.main, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        switch (item.getItemId()) {
            case R.id.action_settings:
                goToSettings();
                return true;
            default:
                // Handle fragment menu items
                return super.onOptionsItemSelected(item);
        }
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        Toolbar myToolbar = (Toolbar) findViewById(R.id.my_toolbar);
        setSupportActionBar(myToolbar);

        mHandler = new Handler();

        if (savedInstanceState == null) {
            ServerProcessor.getInstance().setServerErrorCallback(this);
            ServerProcessor.getInstance().setReceiveMessageCallback(this);

            if (ServerProcessor.getInstance().isWorking()) {
                goToLogin();
            } else {
                goToLogin();
                goToTryAgain(IConnectToServerCallback.ERROR_INTERNET);
            }
        }
    }

    public void goToTryAgain(String errorType) {
        addToStack(TryAgainFragment.newInstance(errorType));
    }

    public void goToRegister() {
        addToStack(new RegisterFragment());
    }

    public void goToLogin() {
        addToStack(new LoginFragment());
    }

    public void goToChatList() {
        addToStack(new ChatListFragment());
    }

    public void goToSettings() {
        addToStack(new SettingsFragment());
    }

    public void addToStack(Fragment fragment) {
        fragment.setRetainInstance(true);
        getSupportFragmentManager().beginTransaction().add(R.id.content_main,
                fragment).addToBackStack(null).commit();
    }

    public void popStack() {
        getSupportFragmentManager().popBackStack();
    }

    @Override
    public void onError() {
        goToTryAgain(IConnectToServerCallback.ERROR_SERVER);
    }

    @Override
    public void onMessage(Type type, ReceivedMessage message) {
        Log.d(TAG, "receive message");

        int lastIndex = -1;
        if (getSupportFragmentManager().getFragments() != null) {
            lastIndex = getSupportFragmentManager().getFragments().size() - 1;
        }

        if (lastIndex == -1) {
            return;
        }

        Fragment fragment = getSupportFragmentManager().getFragments().get(lastIndex);
        if (fragment instanceof LoginFragment) {
            switch (type) {
                case AUTH:
                    ((LoginFragment) fragment).onMessage((AuthMessage) message);
                    break;
                default:
                    break;
            }
        }

        if (fragment instanceof RegisterFragment) {
            switch (type) {
                case REGISTER:
                    ((RegisterFragment) fragment).onMessage((RegisterMessage) message);
                    break;
                default:
                    break;
            }
        }

        if (fragment instanceof ChatListFragment) {
            switch (type) {
                case CHANNEL_LIST:
                    ((ChatListFragment)fragment).onMessage((ChannelListMessage) message);
                    break;
                default:
                    break;
            }
        }
    }

    @Override
    public void onBackPressed() {
        super.onBackPressed();
    }
}
