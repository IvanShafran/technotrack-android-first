package com.example.ivan.homework1.main_activity.fragments;

import android.view.View;

public interface IListFragment {
    int getItemPosition(View view);
    void showDetailFragment(int itemPosition);
}
