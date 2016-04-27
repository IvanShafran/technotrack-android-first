package com.example.ivan.homework1.model;


import java.util.ArrayList;
import java.util.List;

public class TechnologyStorage {
    private static TechnologyStorage ourInstance = new TechnologyStorage();
    private List<Technology> mTechnologies;

    public static TechnologyStorage getInstance() {
        return ourInstance;
    }

    private TechnologyStorage() {
        mTechnologies = new ArrayList<>();
    }

    public void addTechnology(Technology technology) {
        mTechnologies.add(technology);
    }

    public int getTechnologiesNumber() {
        return mTechnologies.size();
    }

    public Technology getTechnologyByIndex(int index) {
        return mTechnologies.get(index);
    }
}
