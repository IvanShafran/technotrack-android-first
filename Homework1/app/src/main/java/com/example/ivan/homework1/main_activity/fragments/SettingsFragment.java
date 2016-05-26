package com.example.ivan.homework1.main_activity.fragments;


import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import com.example.ivan.homework1.R;
import com.example.ivan.homework1.Settings;

/**
 * A simple {@link Fragment} subclass.
 */
public class SettingsFragment extends Fragment {


    public SettingsFragment() {
        // Required empty public constructor
    }


    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.fragment_settings, container, false);
        (view.findViewById(R.id.settings_delete_button)).setOnClickListener(
        new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Settings settings = Settings.getInstance();
                settings.setLogin(null);
                settings.setPassword(null);
                settings.save(getActivity());
            }
        });
        return view;
    }

}
