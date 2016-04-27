package com.example.ivan.homework1.splash_screen;

import android.os.AsyncTask;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;

import com.example.ivan.homework1.list_screen.LoadingCallback;
import com.example.ivan.homework1.R;
import com.example.ivan.homework1.list_screen.ViewActivity;
import com.example.ivan.homework1.model.AsyncJSONLoader;


public class WelcomeActivity extends AppCompatActivity implements LoadingCallback {
    private CircleOfLifeManager circleOfLifeManager;
    private AsyncJSONLoader mAsyncJSONLoader;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_welcome);

        mAsyncJSONLoader = new AsyncJSONLoader(this, getAssets());
        mAsyncJSONLoader.executeOnExecutor(AsyncTask.THREAD_POOL_EXECUTOR);

        circleOfLifeManager = new CircleOfLifeManager();
        circleOfLifeManager.startRebirth(this, ViewActivity.class, 2000);
    }

    @Override
    public void onFinish() {
        circleOfLifeManager.onLoadingFinish();
    }

    @Override
    public void onBackPressed() {
        circleOfLifeManager.cancel();
        super.onBackPressed();
    }
}
