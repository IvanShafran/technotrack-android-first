package com.example.ivan.homework1;

import android.content.Context;
import android.content.SharedPreferences;

public class Settings {
    private static Settings ourInstance = new Settings();

    public static Settings getInstance() {
        return ourInstance;
    }

    private Settings() {
    }

    private static final String SETTING_FILENAME = "SimpleMessenger";
    private static final String LAST_LOGIN = "LAST_LOGIN";
    private static final String LAST_PASSWORD = "LAST_PASSWORD";

    private String mLogin;
    private String mPassword;

    public String getLogin() {
        return mLogin;
    }

    public void setLogin(String login) {
        mLogin = login;
    }

    public String getPassword() {
        return mPassword;
    }

    public void setPassword(String password) {
        mPassword = password;
    }

    public void save(Context context) {
        SharedPreferences.Editor editor = context.getSharedPreferences(SETTING_FILENAME,
                Context.MODE_PRIVATE).edit();
        editor.putString(LAST_LOGIN, getLogin());
        editor.putString(LAST_PASSWORD, getPassword());
        editor.apply();
    }

    public void load(Context context) {
        SharedPreferences preferences = context.getSharedPreferences(SETTING_FILENAME,
                Context.MODE_PRIVATE);
        setLogin(preferences.getString(LAST_LOGIN, null));
        setPassword(preferences.getString(LAST_PASSWORD, null));
    }
}
