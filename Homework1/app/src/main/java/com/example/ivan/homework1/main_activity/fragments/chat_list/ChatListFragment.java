package com.example.ivan.homework1.main_activity.fragments.chat_list;

import android.os.Bundle;
import android.os.Handler;
import android.support.v4.app.Fragment;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.Menu;
import android.view.MenuInflater;
import android.view.MenuItem;
import android.view.View;
import android.view.ViewGroup;

import com.example.ivan.homework1.R;
import com.example.ivan.homework1.main_activity.MainActivity;
import com.example.ivan.homework1.model.ChatInfoModel;
import com.example.ivan.homework1.net.ServerProcessor;
import com.example.ivan.homework1.net.recieve_message.received_message.ChannelListMessage;
import com.example.ivan.homework1.net.send_message.IMessageSender;

import java.util.ArrayList;


public class ChatListFragment extends Fragment implements IChatListFragment {
    private static final String ARG_CHAT_LIST = "ARG_CHAT_LIST";

    private RecyclerView mRecyclerView;
    private RecyclerView.Adapter mAdapter;
    private RecyclerView.LayoutManager mLayoutManager;
    private ArrayList<ChatInfoModel> mChatInfoModels;
    private Handler mHandler;

    public ChatListFragment() {
        // Required empty public constructor
        mHandler = new Handler();
    }

    public static ChatListFragment newInstance(ArrayList<ChatInfoModel> chatInfoModels) {
        ChatListFragment chatListFragment = new ChatListFragment();
        Bundle args = new Bundle();
        args.putParcelableArrayList(ARG_CHAT_LIST, chatInfoModels);
        chatListFragment.setArguments(args);
        return chatListFragment;
    }

    @Override
    public void onCreateOptionsMenu(Menu menu, MenuInflater inflater) {
        inflater.inflate(R.menu.chat_list_menu, menu);
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        switch (item.getItemId()) {
            case R.id.action_add_chat:
                // Handle fragment menu item
                return true;
            case R.id.action_refresh_chat:
                refreshChats();
                return true;
            default:
                // Not one of ours. Perform default menu processing
                return super.onOptionsItemSelected(item);
        }
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setHasOptionsMenu(true);
        if (getArguments() != null) {
            mChatInfoModels = getArguments().getParcelableArrayList(ARG_CHAT_LIST);
        }
    }

    private void refreshChats() {
        MainActivity activity = (MainActivity) getActivity();
        String[] args = new String[2];
        args[0] = activity.getUid();
        args[1] = activity.getSid();
        ServerProcessor.getInstance().sendMessage(IMessageSender.SendMessageType.GET_CHANNELS,
                args);
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {

        View view = inflater.inflate(R.layout.fragment_chat_list, container, false);
        mRecyclerView = (RecyclerView) view.findViewById(R.id.chat_list_recycler_view);
        mRecyclerView.setHasFixedSize(true);

        mLayoutManager = new LinearLayoutManager(ChatListFragment.this.getContext());
        mRecyclerView.setLayoutManager(mLayoutManager);

        mAdapter = new ChatListRecycleViewAdapter(ChatListFragment.this, mChatInfoModels);
        mRecyclerView.setAdapter(mAdapter);

        if (mChatInfoModels == null) {
            refreshChats();
        }

        return view;
    }

    @Override
    public int getItemPosition(View view) {
        return mRecyclerView.getChildLayoutPosition(view);
    }

    @Override
    public void showChatFragment(int itemPosition) {
        ((MainActivity)getActivity()).setChid(mChatInfoModels.get(itemPosition).getChid());
        ((MainActivity)getActivity()).goToMessages();
    }

    public void onMessage(final ChannelListMessage msg) {
        if (msg.getStatus() == 0) {
            mChatInfoModels = msg.getChannelList();

            mHandler.post(new Runnable() {
                @Override
                public void run() {
                    mAdapter = new ChatListRecycleViewAdapter(ChatListFragment.this, mChatInfoModels);
                    mRecyclerView.setAdapter(mAdapter);
                }
            });
        }
    }
}
