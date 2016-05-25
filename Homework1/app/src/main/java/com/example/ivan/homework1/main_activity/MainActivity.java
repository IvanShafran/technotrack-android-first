package com.example.ivan.homework1.main_activity;

import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.support.v7.app.AppCompatActivity;

import com.example.ivan.homework1.R;
import com.example.ivan.homework1.main_activity.fragments.LoginFragment;
import com.example.ivan.homework1.main_activity.fragments.TryAgainFragment;
import com.example.ivan.homework1.net.IConnectToServerCallback;
import com.example.ivan.homework1.net.IServerErrorCallback;
import com.example.ivan.homework1.net.ServerProcessor;
import com.example.ivan.homework1.net.recieve_message.IReceiveMessageCallback;
import com.example.ivan.homework1.net.recieve_message.received_message.ReceivedMessage;

public class MainActivity extends AppCompatActivity implements IServerErrorCallback,
        IReceiveMessageCallback {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

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

    public void goToLogin() {
        addToStack(new LoginFragment());
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

    }

    @Override
    public void onMessage(Type type, ReceivedMessage message) {

    }

    @Override
    public void onBackPressed() {
        super.onBackPressed();
    }
}
