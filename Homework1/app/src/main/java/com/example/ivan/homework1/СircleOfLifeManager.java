package com.example.ivan.homework1;

import android.content.Context;
import android.content.Intent;
import android.os.AsyncTask;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;

/*
**Class name refers to "Lion King"
 */
public class СircleOfLifeManager {
    private static СircleOfLifeManager instance = new СircleOfLifeManager();
    private СircleOfLifeManager() {}

    public static СircleOfLifeManager getInstance() {
        return instance;
    }

    public static void startRebirth(AppCompatActivity dyingActivity,
                             Class nascentActivyClass,
                             int millisecondsToRebirth) {

        AsyncRebirth asyncRebirth = new AsyncRebirth();
        asyncRebirth.setDyingActivity(dyingActivity);
        asyncRebirth.setNascentActivityClass(nascentActivyClass);
        asyncRebirth.setMillisecondsToRebirth(millisecondsToRebirth);
        asyncRebirth.execute();
    }

    private static class AsyncRebirth extends AsyncTask<Void, Void, Void> {
        private final String TAG = "AsyncRebirth";
        private AppCompatActivity dyingActivity;
        private Class nascentActivityClass;
        private int millisecondsToRebirth;
        private Context appContext;

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

        @Override
        protected Void doInBackground(Void... params) {
            try {
                Thread.sleep(millisecondsToRebirth);

                if (dyingActivity != null) {
                    dyingActivity.finish();
                } else {
                    Log.w(TAG, "Dying activity has already dead");
                }

                appContext.startActivity(new Intent(appContext, nascentActivityClass));
            } catch (InterruptedException e) {
                Log.d(TAG, "Task was interrupted");
            }

            return null;
        }
    }
}
