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
import com.example.ivan.homework1.main_activity.MainActivity;
import com.example.ivan.homework1.net.ServerProcessor;
import com.example.ivan.homework1.net.recieve_message.received_message.RegisterMessage;
import com.example.ivan.homework1.net.send_message.IMessageSender;

public class RegisterFragment extends Fragment {
    private Handler mHandler;
    private TextView mErrorTextView;

    public RegisterFragment() {
        // Required empty public constructor
        mHandler = new Handler();
    }


    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.fragment_register, container, false);

        mErrorTextView = (TextView) view.findViewById(R.id.register_error_textView);

        final EditText login = (EditText) view.findViewById(R.id.register_login_editText);
        final EditText pass = (EditText) view.findViewById(R.id.register_password_editText);
        final EditText nick = (EditText) view.findViewById(R.id.register_nickname_editText);

        (view.findViewById(R.id.register_button)).setOnClickListener(new View.OnClickListener() {
                    @Override
                    public void onClick(View v) {
                        String[] args = new String[3];
                        args[0] = login.getText().toString();
                        args[1] = Utils.md5(pass.getText().toString());
                        args[2] = nick.getText().toString();

                        ServerProcessor.getInstance().sendMessage(
                                IMessageSender.SendMessageType.REGISTER, args);
                    }
                });

        return view;
    }

    public void onMessage(final RegisterMessage msg) {
        if (msg.getStatus() == 0) {
            ((MainActivity) getActivity()).popStack();
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
