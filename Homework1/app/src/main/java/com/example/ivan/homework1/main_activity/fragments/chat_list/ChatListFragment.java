package com.example.ivan.homework1.main_activity.fragments.chat_list;

import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import com.example.ivan.homework1.R;
import com.example.ivan.homework1.model.ChatInfo;

import java.util.ArrayList;


public class ChatListFragment extends Fragment implements IChatListFragment {
    private static final String ARG_CHAT_LIST = "ARG_CHAT_LIST";

    private RecyclerView mRecyclerView;
    private RecyclerView.Adapter mAdapter;
    private RecyclerView.LayoutManager mLayoutManager;
    private ArrayList<ChatInfo> mChatInfos;

    public ChatListFragment() {
        // Required empty public constructor
    }

    public static ChatListFragment newInstance(ArrayList<ChatInfo> chatInfos) {
        ChatListFragment chatListFragment = new ChatListFragment();
        Bundle args = new Bundle();
        args.putParcelableArrayList(ARG_CHAT_LIST, chatInfos);
        chatListFragment.setArguments(args);
        return chatListFragment;
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        if (getArguments() != null) {
            mChatInfos = getArguments().getParcelableArrayList(ARG_CHAT_LIST);
        }
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {

        View view = inflater.inflate(R.layout.fragment_chat_list, container, false);
        mRecyclerView = (RecyclerView) view.findViewById(R.id.chat_list_recycler_view);
        mRecyclerView.setHasFixedSize(true);

        mLayoutManager = new LinearLayoutManager(this.getContext());
        mRecyclerView.setLayoutManager(mLayoutManager);

        mAdapter = new ChatListRecycleViewAdapter(this, mChatInfos);
        mRecyclerView.setAdapter(mAdapter);
        return view;
    }

    @Override
    public int getItemPosition(View view) {
        return mRecyclerView.getChildLayoutPosition(view);
    }

    @Override
    public void showChatFragment(int itemPosition) {
    }
}
