package com.example.ivan.homework1.main_activity.fragments;


import android.os.Bundle;
import android.os.Handler;
import android.support.v4.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import com.example.ivan.homework1.R;
import com.example.ivan.homework1.main_activity.MainActivity;
import com.example.ivan.homework1.net.ServerProcessor;
import com.example.ivan.homework1.net.recieve_message.received_message.UserInfoMessage;
import com.example.ivan.homework1.net.send_message.IMessageSender;

/**
 * A simple {@link Fragment} subclass.
 */
public class UserInfoFragment extends Fragment {
    private static final String ARG_UID = "ARG_UID";

    private Handler mHandler;
    private TextView mNick;
    private TextView mStatus;

    private String mUID;

    public UserInfoFragment() {
        // Required empty public constructor
        mHandler = new Handler();
    }

    public static UserInfoFragment newInstance(String uid) {
        UserInfoFragment fragment = new UserInfoFragment();
        Bundle args = new Bundle();
        args.putString(ARG_UID, uid);
        fragment.setArguments(args);

        return fragment;
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        mUID = getArguments().getString(ARG_UID);
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        View view = inflater.inflate(R.layout.fragment_user_info, container, false);
        mNick = (TextView) view.findViewById(R.id.info_nick);
        mStatus = (TextView) view.findViewById(R.id.info_status);

        MainActivity activity = (MainActivity) getActivity();
        String[] args = new String[3];
        args[0] = mUID;
        args[1] = activity.getUid();
        args[2] = activity.getSid();
        ServerProcessor.getInstance().sendMessage(IMessageSender.SendMessageType.GET_USER_INFO,
                args);

        return view;
    }


    public void onMessage(final UserInfoMessage message) {
        if (message.getStatus() == 0) {
            mHandler.post(new Runnable() {
                @Override
                public void run() {
                    mNick.setText(message.getNick());
                    mStatus.setText(message.getUserStatus());
                }
            });
        }
    }
}
