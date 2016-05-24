package com.example.ivan.homework1.main_activity.fragments.chat_list;

import android.view.View;

public interface IChatListFragment {
    int getItemPosition(View view);
    void showChatFragment(int itemPosition);
}
