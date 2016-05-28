package com.example.ivan.homework1.main_activity.fragments.message_list;

import android.os.Bundle;
import android.os.Handler;
import android.support.v4.app.Fragment;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.EditText;

import com.example.ivan.homework1.R;
import com.example.ivan.homework1.main_activity.MainActivity;
import com.example.ivan.homework1.model.UserMessageModel;
import com.example.ivan.homework1.net.ServerProcessor;
import com.example.ivan.homework1.net.recieve_message.received_message.EnterMessage;
import com.example.ivan.homework1.net.recieve_message.received_message.EvMessage;
import com.example.ivan.homework1.net.send_message.IMessageSender;

import java.util.ArrayList;


public class MessageListFragment extends Fragment implements IMessageListFragment {
    private RecyclerView mRecyclerView;
    private RecyclerView.Adapter mAdapter;
    private RecyclerView.LayoutManager mLayoutManager;
    private ArrayList<UserMessageModel> mMessages;
    private Handler mHandler;

    public MessageListFragment() {
        // Required empty public constructor
        mHandler = new Handler();
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
    }

    @Override
    public View onCreateView(final LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {

        View view = inflater.inflate(R.layout.fragment_message_list, container, false);
        mRecyclerView = (RecyclerView) view.findViewById(R.id.message_list_recycler_view);
        mRecyclerView.setHasFixedSize(true);

        mLayoutManager = new LinearLayoutManager(MessageListFragment.this.getContext());
        mRecyclerView.setLayoutManager(mLayoutManager);


        mAdapter = new MessageListRecycleViewAdapter(((MainActivity)getActivity()).getUid(), MessageListFragment.this, mMessages);
        mRecyclerView.setAdapter(mAdapter);

        final EditText inputTextView = (EditText) view.findViewById(R.id.send_editText);

        (view.findViewById(R.id.send_button)).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String[] args = new String[4];
                MainActivity activity = (MainActivity) getActivity();
                args[0] = activity.getUid();
                args[1] = activity.getSid();
                args[2] = activity.getChid();
                args[3] = inputTextView.getText().toString();
                inputTextView.setText("");
                ServerProcessor.getInstance().sendMessage(
                                IMessageSender.SendMessageType.SEND_MESSAGE,
                                args);
            }
        });

        String[] args = new String[3];
        MainActivity activity = (MainActivity) getActivity();
        args[0] = activity.getUid();
        args[1] = activity.getSid();
        args[2] = activity.getChid();
        ServerProcessor.getInstance().sendMessage(IMessageSender.SendMessageType.ENTER_CHANNEL,
                args);

        return view;
    }

    @Override
    public int getItemPosition(View view) {
        return mRecyclerView.getChildLayoutPosition(view);
    }

    @Override
    public void showUserInfo(int itemPosition) {
        ((MainActivity)getActivity()).goToUserInfo(mMessages.get(itemPosition).getFrom());
    }

    public void onMessage(final EnterMessage msg) {
        if (msg.getStatus() == 0) {
            mMessages = msg.getUserMessageModels();

            final String myId = ((MainActivity) getActivity()).getUid();

            mHandler.post(new Runnable() {
                @Override
                public void run() {
                    mAdapter = new MessageListRecycleViewAdapter(myId,
                            MessageListFragment.this,
                            mMessages);
                    mRecyclerView.setAdapter(mAdapter);
                }
            });
        }
    }

    public void onNewUserMessage(final EvMessage message) {
        UserMessageModel userMessageModel = new UserMessageModel();
        userMessageModel.setBody(message.getBody());
        userMessageModel.setFrom(message.getFrom());
        mMessages.add(userMessageModel);

        mHandler.post(new Runnable() {
            @Override
            public void run() {
                final String myId = ((MainActivity) getActivity()).getUid();
                mAdapter = new MessageListRecycleViewAdapter(myId,
                        MessageListFragment.this,
                        mMessages);
                mRecyclerView.setAdapter(mAdapter);
            }
        });
    }
}
