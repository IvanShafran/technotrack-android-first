package com.example.ivan.homework1.list_screen;

import android.content.Intent;
import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import com.example.ivan.homework1.R;


public class ListFragment extends Fragment implements IListFragment {

    private RecyclerView mRecyclerView;
    private RecyclerView.Adapter mAdapter;
    private RecyclerView.LayoutManager mLayoutManager;

    public ListFragment() {
        // Required empty public constructor
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {

        View view = inflater.inflate(R.layout.fragment_list, container, false);
        mRecyclerView = (RecyclerView) view.findViewById(R.id.recycler_view);
        mRecyclerView.setHasFixedSize(true);

        mLayoutManager = new LinearLayoutManager(this.getContext());
        mRecyclerView.setLayoutManager(mLayoutManager);

        mAdapter = new RecycleViewAdapter(this, getContext());
        mRecyclerView.setAdapter(mAdapter);
        return view;
    }

    @Override
    public int getItemPosition(View view) {
        return mRecyclerView.getChildLayoutPosition(view);
    }

    @Override
    public void showDetailFragment(int itemPosition) {
        Intent intent = new Intent(this.getContext(), ScreenSlidePagerActivity.class);
        intent.putExtra(ScreenSlidePagerActivity.SLIDE_NUMBER, itemPosition);
        startActivity(intent);
    }
}
