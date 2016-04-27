package com.example.ivan.homework1.list_screen;

import android.view.View;

public interface IListFragment {
    int getItemPosition(View view);
    void showDetailFragment(int itemPosition);
}
