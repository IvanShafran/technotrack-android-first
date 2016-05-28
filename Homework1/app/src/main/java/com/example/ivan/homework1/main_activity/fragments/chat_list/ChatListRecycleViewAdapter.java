package com.example.ivan.homework1.main_activity.fragments.chat_list;

import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import com.example.ivan.homework1.R;
import com.example.ivan.homework1.model.ChatInfoModel;

import java.util.ArrayList;

public class ChatListRecycleViewAdapter extends RecyclerView.Adapter<ChatListRecycleViewAdapter.ViewHolder>
        implements View.OnClickListener {

    private IChatListFragment mListFragment;
    private ArrayList<ChatInfoModel> mChatInfoModels;

    public ChatListRecycleViewAdapter(IChatListFragment listFragment,
                                      ArrayList<ChatInfoModel> chatInfoModels) {
        mListFragment = listFragment;
        mChatInfoModels = chatInfoModels;
    }

    @Override
    public void onClick(View view) {
        int itemPosition = mListFragment.getItemPosition(view);
        mListFragment.showChatFragment(itemPosition);
    }

    @Override
    public ViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext())
                .inflate(R.layout.chat_view_holder, parent, false);
        view.setOnClickListener(this);

        return new ViewHolder(view);
    }

    @Override
    public void onBindViewHolder(ViewHolder holder, int position) {
        ChatInfoModel chatInfoModel = mChatInfoModels.get(position);
        holder.setName(chatInfoModel.getName());
        holder.setDescription(chatInfoModel.getDescription());
        holder.setCountOnline(chatInfoModel.getCountOnline());
    }

    @Override
    public int getItemCount() {
        if (mChatInfoModels == null) {
            return 0;
        } else {
            return mChatInfoModels.size();
        }
    }

    public class ViewHolder extends RecyclerView.ViewHolder {
        private TextView mName;
        private TextView mDescription;
        private TextView mCountOnline;

        private void setName(String name) {
            mName.setText(name);
        }

        private void setDescription(String description) {
            mDescription.setText(description);
        }

        private void setCountOnline(int countOnline) {
            mCountOnline.setText("(" + String.valueOf(countOnline) + ")");
        }

        public ViewHolder(View item) {
            super(item);

            mName = (TextView) item.findViewById(R.id.chat_name);
            mDescription = (TextView) item.findViewById(R.id.chat_description);
            mCountOnline = (TextView) item.findViewById(R.id.chat_count);
        }
    }
}
