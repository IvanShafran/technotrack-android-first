package com.example.ivan.homework1;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;

public class WelcomeActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_welcome);

        СircleOfLifeManager.startRebirth(this, RecycleViewActivity.class, 2000);
    }
}
