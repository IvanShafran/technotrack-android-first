package com.example.ivan.homework1.main_activity.fragments;

import android.content.Context;
import android.graphics.Color;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;

import com.example.ivan.homework1.R;

import java.lang.ref.WeakReference;

public class RecycleViewAdapter extends RecyclerView.Adapter<RecycleViewAdapter.ViewHolder>
        implements View.OnClickListener {

    private IListFragment mListFragment;
    private WeakReference<Context> mContextWeak;

    public RecycleViewAdapter(IListFragment listFragment, Context context) {
        mListFragment = listFragment;
        mContextWeak = new WeakReference<Context>(context);
    }

    @Override
    public void onClick(View view) {
        int itemPosition = mListFragment.getItemPosition(view);
        mListFragment.showDetailFragment(itemPosition);
    }

    @Override
    public ViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext())
                .inflate(R.layout.view_holder_item, parent, false);
        view.setOnClickListener(this);
        ViewHolder viewHolder = new ViewHolder(view);
        return viewHolder;
    }

    @Override
    public void onBindViewHolder(ViewHolder holder, int position) {
        if (position % 2 == 0) {
            holder.setBackgroundColor(Color.WHITE);
        } else {
            holder.setBackgroundColor(Color.GRAY);
        }

    }

    @Override
    public int getItemCount() {
        return 0;
    }

    public class ViewHolder extends RecyclerView.ViewHolder {
        private TextView mText;
        private LinearLayout mLinearLayout;
        private ImageView mImageView;

        public void setText(String text) {
            mText.setText(text);
        }

        public void setBackgroundColor(int color) {
            mLinearLayout.setBackgroundColor(color);
        }

        public ImageView getImageView() {
            return mImageView;
        }

        public ViewHolder(View item) {
            super(item);

            mText = (TextView) item.findViewById(R.id.holderText);
            mLinearLayout = (LinearLayout) item.findViewById(R.id.holderLayout);
            mImageView = (ImageView) item.findViewById(R.id.holderIcon);
        }
    }
}
