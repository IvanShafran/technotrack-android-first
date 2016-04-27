package com.example.ivan.homework1.model;

import android.content.res.AssetManager;
import android.os.AsyncTask;

import com.example.ivan.homework1.list_screen.LoadingCallback;

import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;
import java.io.InputStream;
import java.util.Iterator;

public class AsyncJSONLoader extends AsyncTask<Void, Void, Void> {
    private LoadingCallback mLoadingCallback;
    private AssetManager mAssetManager;

    public AsyncJSONLoader(LoadingCallback loadingCallback, AssetManager assetManager) {
        mLoadingCallback = loadingCallback;
        mAssetManager = assetManager;
    }

    private void extractDataFromJSON(JSONObject json) {
        try {
            JSONObject array = json.getJSONObject("technology");
            for (Iterator<String> keys = array.keys(); keys.hasNext();) {
                JSONObject object = array.getJSONObject(keys.next());
                Technology technology = new Technology();
                technology.setTitle(object.getString("title"));
                technology.setPictureUrl(object.getString("picture"));
                if (object.has("info")) {
                    technology.setText(object.getString("info"));
                }

                TechnologyStorage.getInstance().addTechnology(technology);
            }
        } catch (JSONException e) {
            e.printStackTrace();
        }
    }

    @Override
    protected Void doInBackground(Void... params) {
        String jsonString;
        try {
            InputStream inputStream = mAssetManager.open("technology.js");
            int size = inputStream.available();
            byte[] buffer = new byte[size];
            if (size != inputStream.read(buffer)) {
                return null;
            }
            inputStream.close();
            jsonString = new String(buffer, "UTF-8");
            JSONObject jsonObject = new JSONObject(jsonString);
            extractDataFromJSON(jsonObject);
        } catch (IOException | JSONException e) {
            e.printStackTrace();
            return null;
        }

        return null;
    }

    @Override
    protected void onPostExecute(Void aVoid) {
        mLoadingCallback.onFinish();
        super.onPostExecute(aVoid);
    }
}
