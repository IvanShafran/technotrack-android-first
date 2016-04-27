package com.example.ivan.homework1.list_screen;

import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.support.v4.app.FragmentManager;
import android.support.v4.app.FragmentStatePagerAdapter;
import android.support.v4.view.PagerAdapter;
import android.support.v4.view.ViewPager;
import android.support.v7.app.AppCompatActivity;

import com.example.ivan.homework1.R;
import com.example.ivan.homework1.model.TechnologyStorage;

public class ScreenSlidePagerActivity extends AppCompatActivity {

    public final static String SLIDE_NUMBER = "SLIDE_NUMBER";

    private ViewPager mPager;
    private PagerAdapter mPagerAdapter;
    private int mSlideNumber;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.fragment_view_pager);

        mSlideNumber = getIntent().getIntExtra(SLIDE_NUMBER, 0);

        mPager = (ViewPager) findViewById(R.id.pager);
        mPagerAdapter = new ScreenSlidePagerAdapter(getSupportFragmentManager());
        mPager.setAdapter(mPagerAdapter);
        mPager.setCurrentItem(mSlideNumber);
    }

    private class ScreenSlidePagerAdapter extends FragmentStatePagerAdapter {
        public ScreenSlidePagerAdapter(FragmentManager fm) {
            super(fm);
        }

        @Override
        public Fragment getItem(int position) {
            return ScreenSlidePageFragment.newInstance(position);
        }

        @Override
        public int getCount() {
            return TechnologyStorage.getInstance().getTechnologiesNumber();
        }
    }
}
