package com.example.ivan.homework1.fragments;

import android.view.View;

public interface IListFragment {
    int getItemPosition(View view);
    void showDetailFragment(int itemPosition);
}
