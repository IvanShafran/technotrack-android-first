package com.example.ivan.homework1.list_screen;

import android.content.Context;
import android.content.res.Configuration;
import android.graphics.Point;
import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.view.Display;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.view.WindowManager;
import android.widget.ImageView;
import android.widget.TextView;

import com.example.ivan.homework1.R;
import com.example.ivan.homework1.model.Technology;
import com.example.ivan.homework1.model.TechnologyStorage;

public class ScreenSlidePageFragment extends Fragment {

    private static String TAG = "ScreenSlidePageFragment";

    private int mScreenNumber;

    public static ScreenSlidePageFragment newInstance(int screenNumber) {
        ScreenSlidePageFragment fragment = new ScreenSlidePageFragment();

        Bundle args = new Bundle();
        args.putInt(ScreenSlidePagerActivity.SLIDE_NUMBER, screenNumber);
        fragment.setArguments(args);

        return fragment;
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        mScreenNumber = getArguments().getInt(ScreenSlidePagerActivity.SLIDE_NUMBER);
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.fragment_screen_slide_page, container, false);
        TextView title = (TextView) view.findViewById(R.id.screen_slide_title);
        TextView info = (TextView) view.findViewById(R.id.screen_slide_info);

        Technology technology = TechnologyStorage.getInstance().getTechnologyByIndex(mScreenNumber);
        title.setText(technology.getTitle());
        info.setText(technology.getText());

        ImageView imageView = (ImageView) view.findViewById(R.id.screen_slide_image);


        String mType;
        if (getContext().getResources().getConfiguration().orientation
                == Configuration.ORIENTATION_PORTRAIT) {

            mType = ImageManager.BITMAP_BIG_PORTRAIT;
        } else {
            mType = ImageManager.BITMAP_BIG_LANDSCAPE;
        }

        WindowManager wm = (WindowManager) getContext().getSystemService(Context.WINDOW_SERVICE);
        Display display = wm.getDefaultDisplay();
        Point size = new Point();
        display.getSize(size);
        int width = size.x;
        int height = size.y / 3;
        width -= Utils.getDevicePixels(getContext(), 20);//отступ от краёв по заданию

        ImageManager.getInstance().loadBitmap(getContext(), technology.getPictureUrl(),
                mType, imageView, width, height);

        return view;
    }
}
