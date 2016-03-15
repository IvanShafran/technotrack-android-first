package com.example.ivan.homework1;

import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;


public class WelcomeActivity extends AppCompatActivity {
    private CircleOfLifeManager circleOfLifeManager;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_welcome);

        circleOfLifeManager = new CircleOfLifeManager();
        circleOfLifeManager.startRebirth(this, RecycleViewActivity.class, 2000);
    }

    @Override
    public void onBackPressed() {
        circleOfLifeManager.cancel();
        super.onBackPressed();
    }
}
