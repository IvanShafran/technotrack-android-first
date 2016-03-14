package com.example.ivan.homework1;

import android.graphics.Color;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.LinearLayout;
import android.widget.TextView;

public class RecycleViewAdapter extends RecyclerView.Adapter<RecycleViewAdapter.ViewHolder> {
    private int size;

    public RecycleViewAdapter(int size) {
        this.size = size;
    }

    @Override
    public ViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext())
                .inflate(R.layout.view_holder_item, parent, false);
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

        holder.setText(DataGenerator.getNumber(position + 1));
    }

    @Override
    public int getItemCount() {
        return size;
    }

    public class ViewHolder extends RecyclerView.ViewHolder {
        private TextView mText;
        private LinearLayout mLinearLayout;

        public void setText(String text) {
            mText.setText(text);
        }

        public void setBackgroundColor(int color) {
            mLinearLayout.setBackgroundColor(color);
        }

        public ViewHolder(View item) {
            super(item);

            mText = (TextView) item.findViewById(R.id.holderText);
            mLinearLayout = (LinearLayout) item.findViewById(R.id.holderLayout);
        }
    }
}
