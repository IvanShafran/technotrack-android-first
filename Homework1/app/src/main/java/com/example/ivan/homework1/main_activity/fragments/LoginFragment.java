package com.example.ivan.homework1.main_activity.fragments;


import android.os.Bundle;
import android.os.Handler;
import android.support.v4.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import com.example.ivan.homework1.R;
import com.example.ivan.homework1.Settings;
import com.example.ivan.homework1.Utils;
import com.example.ivan.homework1.main_activity.MainActivity;
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
    public void onResume() {
        super.onResume();

        //try login if has data
        Settings settings = Settings.getInstance();
        settings.load(getActivity());
        String lastLogin = settings.getLogin();
        String lastPassword = settings.getPassword();

        if (lastLogin != null && lastPassword != null
                && ServerProcessor.getInstance().isWorking()) {
            String[] args = new String[2];
            args[0] = lastLogin;
            args[1] = lastPassword;

            ServerProcessor.getInstance().sendMessage(IMessageSender.SendMessageType.AUTH,
                    args);
        }
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

                Settings settings = Settings.getInstance();
                settings.setLogin(args[0]);
                settings.setPassword(args[1]);
                settings.save(getActivity());

                ServerProcessor.getInstance().sendMessage(IMessageSender.SendMessageType.AUTH,
                        args);
            }
        });

        (view.findViewById(R.id.login_register)).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                ((MainActivity)getActivity()).goToRegister();
            }
        });

        return view;
    }

    public void onMessage(final AuthMessage msg) {
        if (msg.getStatus() == 0) {
            mHandler.post(new Runnable() {
                @Override
                public void run() {
                    MainActivity activity = (MainActivity) getActivity();
                    activity.setUid(msg.getUid());
                    activity.setSid(msg.getSid());

                    Toast.makeText(getContext(), "Auth succes", Toast.LENGTH_SHORT).show();

                    activity.popStack();
                    activity.goToChatList();
                }
            });
        } else {
            Settings settings = Settings.getInstance();
            settings.setLogin(null);
            settings.setPassword(null);
            settings.save(getActivity());

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
