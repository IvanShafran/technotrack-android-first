package com.example.ivan.homework1.main_activity.fragments;


import android.os.Bundle;
import android.os.Handler;
import android.support.v4.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.EditText;
import android.widget.TextView;

import com.example.ivan.homework1.R;
import com.example.ivan.homework1.Utils;
import com.example.ivan.homework1.net.ServerProcessor;
import com.example.ivan.homework1.net.recieve_message.received_message.AuthMessage;
import com.example.ivan.homework1.net.send_message.IMessageSender;

public class LoginFragment extends Fragment {
    private TextView mErrorTextView;
    private Handler mHandler;

    public LoginFragment() {
        // Required empty public constructor
        mHandler = new Handler();
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.fragment_login, container, false);

        mErrorTextView = (TextView) view.findViewById(R.id.login_error_textView);

        final EditText loginTextView = (EditText) view.findViewById(R.id.login_login_editText);
        final EditText passTextView = (EditText) view.findViewById(R.id.login_password_editText);

        (view.findViewById(R.id.login_button)).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String[] args = new String[2];
                args[0] = loginTextView.getText().toString();
                args[1] = Utils.md5(passTextView.getText().toString());
                ServerProcessor.getInstance().sendMessage(IMessageSender.SendMessageType.AUTH,
                        args);
            }
        });

        return view;
    }

    public void onMessage(final AuthMessage msg) {
        if (msg.getStatus() == 0) {

        } else {
            mHandler.post(new Runnable() {
                @Override
                public void run() {
                    mErrorTextView.setVisibility(View.VISIBLE);
                    mErrorTextView.setText(msg.getError());
                }
            });
        }
    }

}
