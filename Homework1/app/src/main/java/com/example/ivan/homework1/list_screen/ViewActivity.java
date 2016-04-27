package com.example.ivan.homework1.list_screen;

import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;

import com.example.ivan.homework1.R;

public class ViewActivity extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_techology_view);

        getSupportFragmentManager().beginTransaction()
                .add(R.id.fragment_place, new ListFragment())
                .commit();
    }
}
