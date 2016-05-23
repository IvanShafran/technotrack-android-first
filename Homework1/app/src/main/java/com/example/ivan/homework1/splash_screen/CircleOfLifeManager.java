package com.example.ivan.homework1.splash_screen;

import android.content.Context;
import android.content.Intent;
import android.os.AsyncTask;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;

/*
**Class name refers to "Lion King"
 */
public class CircleOfLifeManager {
    private AsyncRebirth asyncRebirth;

    public CircleOfLifeManager() {
        this.asyncRebirth = new AsyncRebirth();
    }

    public void startRebirth(AppCompatActivity dyingActivity,
                             Class nascentActivyClass,
                             int millisecondsToRebirth) {

        asyncRebirth.setDyingActivity(dyingActivity);
        asyncRebirth.setNascentActivityClass(nascentActivyClass);
        asyncRebirth.setMillisecondsToRebirth(millisecondsToRebirth);
        asyncRebirth.executeOnExecutor(AsyncTask.THREAD_POOL_EXECUTOR);
    }

    public void cancel() {
        asyncRebirth.cancel(true);
    }

    public void onConnectingFinished() {
        this.asyncRebirth.setIsConnectingFinished(true);
        if (this.asyncRebirth.isTimerFinished()) {
            this.asyncRebirth.startNextActivity();
        }
    }

    private static class AsyncRebirth extends AsyncTask<Void, Void, Void> {
        private final String TAG = "AsyncRebirth";
        private AppCompatActivity dyingActivity;
        private Class nascentActivityClass;
        private int millisecondsToRebirth;
        private Context appContext;
        private boolean mIsConnectingFinished = false;
        private boolean mIsTimerFinished = false;
        private boolean mIsNewActivityStarted = false;

        public boolean isTimerFinished() {
            return mIsTimerFinished;
        }

        public void setIsTimerFinished(boolean isTimerFinished) {
            mIsTimerFinished = isTimerFinished;
        }

        public boolean isConnectingFinished() {
            return mIsConnectingFinished;
        }

        public void setIsConnectingFinished(boolean isLoadingFinished) {
            mIsConnectingFinished = isLoadingFinished;
        }

        public void setMillisecondsToRebirth(int millisecondsToRebirth) {
            this.millisecondsToRebirth = millisecondsToRebirth;
        }

        public void setDyingActivity(AppCompatActivity dyingActivity) {
            if (dyingActivity == null) {
                Log.e(TAG, "Dying activity has already dead");
            } else {
                this.dyingActivity = dyingActivity;
                appContext = dyingActivity.getApplicationContext();
            }
        }

        public void setNascentActivityClass(Class nascentActivityClass) {
            this.nascentActivityClass = nascentActivityClass;
        }

        synchronized public void startNextActivity() {
            if (this.isCancelled() || mIsNewActivityStarted) {
                return;
            }

            if (dyingActivity != null) {
                dyingActivity.finish();
            } else {
                Log.w(TAG, "Dying activity has already dead");
            }

            Intent intent = new Intent();
            intent.setClass(appContext, nascentActivityClass);
            intent.setFlags(
                    Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_EXCLUDE_FROM_RECENTS);
            appContext.startActivity(intent);

            mIsNewActivityStarted = true;
        }

        @Override
        protected Void doInBackground(Void... params) {
            try {
                Thread.sleep(millisecondsToRebirth);

                setIsTimerFinished(true);

                if (isConnectingFinished()) {
                    startNextActivity();
                }
            } catch (InterruptedException e) {
                Log.d(TAG, "Task was interrupted");
            }

            return null;
        }
    }
}
