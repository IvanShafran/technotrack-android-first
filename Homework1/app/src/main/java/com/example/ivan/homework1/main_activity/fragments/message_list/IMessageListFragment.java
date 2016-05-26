package com.example.ivan.homework1.main_activity.fragments.message_list;

import android.view.View;

public interface IMessageListFragment {
    int getItemPosition(View view);
    void showUserInfo(int itemPosition);
}
