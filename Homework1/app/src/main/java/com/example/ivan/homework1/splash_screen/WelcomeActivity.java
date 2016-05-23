package com.example.ivan.homework1.splash_screen;

import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;

import com.example.ivan.homework1.R;
import com.example.ivan.homework1.main_activity.MainActivity;
import com.example.ivan.homework1.net.IConnectToServerCallback;
import com.example.ivan.homework1.net.ServerProcessor;


public class WelcomeActivity extends AppCompatActivity implements IConnectToServerCallback {
    private CircleOfLifeManager circleOfLifeManager;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_welcome);

        ServerProcessor.getInstance().setConnectToServerCallback(this);
        ServerProcessor.getInstance().tryConnect();

        circleOfLifeManager = new CircleOfLifeManager();
        circleOfLifeManager.startRebirth(this, MainActivity.class, 2000);
    }

    @Override
    public void onSuccess() {
        circleOfLifeManager.onConnectingFinished();
    }

    @Override
    public void onError(String errorType) {
        circleOfLifeManager.onConnectingFinished();
    }

    @Override
    public void onBackPressed() {
        circleOfLifeManager.cancel();
        super.onBackPressed();
    }
}
