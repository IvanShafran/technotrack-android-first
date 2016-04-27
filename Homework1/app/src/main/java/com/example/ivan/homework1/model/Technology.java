package com.example.ivan.homework1.model;

public class Technology {
    private static String websiteURL = "http://mobevo.ext.terrhq.ru/";

    private String pictureUrl;
    private String title;
    private String text;

    public String getPictureUrl() {
        return websiteURL + pictureUrl;
    }

    public void setPictureUrl(String pictureUrl) {
        this.pictureUrl = pictureUrl;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }
}
