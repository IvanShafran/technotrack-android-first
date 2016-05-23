package com.example.ivan.homework1.fragments;


import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import com.example.ivan.homework1.R;
import com.example.ivan.homework1.net.IConnectToServerCallback;

public class TryAgainFragment extends Fragment implements IConnectToServerCallback {
    private static final String ARG_ERROR_TYPE = "ERROR_TYPE";

    private String mErrorType;
    private TextView mErrorTextView;

    public TryAgainFragment() {
        // Required empty public constructor
    }

    public static TryAgainFragment newInstance(String errorType) {
        TryAgainFragment fragment = new TryAgainFragment();
        Bundle args = new Bundle();
        args.putString(ARG_ERROR_TYPE, errorType);
        fragment.setArguments(args);
        return fragment;
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        if (getArguments() != null) {
            mErrorType = getArguments().getString(ARG_ERROR_TYPE);
        }
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.fragment_try_again, container, false);
        mErrorTextView = (TextView) view.findViewById(R.id.try_again_text);
        updateErrorText();
        return view;
    }

    private void updateErrorText() {
        if (mErrorTextView == null || mErrorType == null) {
            return;
        }

        switch (mErrorType) {
            case IConnectToServerCallback.ERROR_INTERNET:
                mErrorTextView.setText(R.string.try_again_internet_error);
                break;
            case IConnectToServerCallback.ERROR_SERVER:
                mErrorTextView.setText(R.string.try_again_server_error);
                break;
        }
    }

    @Override
    public void onSuccess() {

    }

    @Override
    public void onError(String errorType) {

    }
}
