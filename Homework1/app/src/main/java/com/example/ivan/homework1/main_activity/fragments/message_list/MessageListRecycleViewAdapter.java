package com.example.ivan.homework1.main_activity.fragments.message_list;

import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import com.example.ivan.homework1.R;
import com.example.ivan.homework1.model.UserMessage;

import java.util.ArrayList;

public class MessageListRecycleViewAdapter extends RecyclerView.Adapter<MessageListRecycleViewAdapter.ViewHolder>
        implements View.OnClickListener {

    private IMessageListFragment mListFragment;
    private ArrayList<UserMessage> mMessages;
    private String mMyId;

    public MessageListRecycleViewAdapter(String myId, IMessageListFragment listFragment,
                                         ArrayList<UserMessage> messages) {
        mListFragment = listFragment;
        mMessages = messages;
        mMyId = myId;
    }

    @Override
    public void onClick(View view) {
        int itemPosition = mListFragment.getItemPosition(view);
        mListFragment.showUserInfo(itemPosition);
    }

    @Override
    public int getItemViewType(int position) {
        if (mMessages.get(position).getFrom().equals(mMyId)) {
            return 1;
        } else {
            return 0;
        }
    }

    @Override
    public ViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        View view;
        if (viewType == 1) {
            view = LayoutInflater.from(parent.getContext())
                    .inflate(R.layout.your_message_view_holder, parent, false);
        } else {
            view = LayoutInflater.from(parent.getContext())
                    .inflate(R.layout.message_view_holder, parent, false);
        }

        return new ViewHolder(view);
    }

    @Override
    public void onBindViewHolder(ViewHolder holder, int position) {
        UserMessage msg = mMessages.get(position);
        holder.setBody(msg.getBody());
    }

    @Override
    public int getItemCount() {
        if (mMessages == null) {
            return 0;
        } else {
            return mMessages.size();
        }
    }

    public class ViewHolder extends RecyclerView.ViewHolder {
        private TextView mBody;

        public void setBody(String body) {
            mBody.setText(body);
        }

        public ViewHolder(View item) {
            super(item);
            mBody = (TextView) item.findViewById(R.id.message_body);

            (item).setOnClickListener(MessageListRecycleViewAdapter.this);

        }
    }
}
