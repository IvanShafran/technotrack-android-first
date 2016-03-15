package com.example.ivan.homework1;


import android.content.res.Resources;

public class DataGenerator {

    public static String getHundreds(int i, boolean male, Resources res) {
        StringBuilder number = new StringBuilder();
        switch ((i % 1000) / 100) {
            case 1: number.append(res.getString(R.string.number_100)); break;
            case 2: number.append(res.getString(R.string.number_200)); break;
            case 3: number.append(res.getString(R.string.number_300)); break;
            case 4: number.append(res.getString(R.string.number_400)); break;
            case 5: number.append(res.getString(R.string.number_500)); break;
            case 6: number.append(res.getString(R.string.number_600)); break;
            case 7: number.append(res.getString(R.string.number_700)); break;
            case 8: number.append(res.getString(R.string.number_800)); break;
            case 9: number.append(res.getString(R.string.number_900)); break;
        }

        if (i >= 100 && i % 100 != 0) {
            number.append(" ");
        }

        if (i % 100 >= 10 && i % 100 < 20) {
            switch (i % 100) {
                case 10: number.append(res.getString(R.string.number_10)); break;
                case 11: number.append(res.getString(R.string.number_11)); break;
                case 12: number.append(res.getString(R.string.number_12)); break;
                case 13: number.append(res.getString(R.string.number_13)); break;
                case 14: number.append(res.getString(R.string.number_14)); break;
                case 15: number.append(res.getString(R.string.number_15)); break;
                case 16: number.append(res.getString(R.string.number_16)); break;
                case 17: number.append(res.getString(R.string.number_17)); break;
                case 18: number.append(res.getString(R.string.number_18)); break;
                case 19: number.append(res.getString(R.string.number_19)); break;
            }
        } else {
            switch ((i % 100) / 10) {
                case 2: number.append(res.getString(R.string.number_20)); break;
                case 3: number.append(res.getString(R.string.number_30)); break;
                case 4: number.append(res.getString(R.string.number_40)); break;
                case 5: number.append(res.getString(R.string.number_50)); break;
                case 6: number.append(res.getString(R.string.number_60)); break;
                case 7: number.append(res.getString(R.string.number_70)); break;
                case 8: number.append(res.getString(R.string.number_80)); break;
                case 9: number.append(res.getString(R.string.number_90)); break;
            }

            if (i % 10 != 0 && i >= 10) {
                number.append(" ");
            }

            switch (i % 10) {
                case 1: if (male) number.append(res.getString(R.string.number_1_male));
                        else number.append(res.getString(R.string.number_1_female)); break;
                case 2: if (male) number.append(res.getString(R.string.number_2_male));
                        else number.append(res.getString(R.string.number_2_female)); break;
                case 3: number.append(res.getString(R.string.number_3)); break;
                case 4: number.append(res.getString(R.string.number_4)); break;
                case 5: number.append(res.getString(R.string.number_5)); break;
                case 6: number.append(res.getString(R.string.number_6)); break;
                case 7: number.append(res.getString(R.string.number_7)); break;
                case 8: number.append(res.getString(R.string.number_8)); break;
                case 9: number.append(res.getString(R.string.number_9)); break;
            }
        }

        return number.toString();
    }

    public static String getThousand(int i, Resources res) {
        StringBuilder number = new StringBuilder();

        if ((i % 1000000) >= 1000) {
            number.append(getHundreds((i % 1000000) / 1000, false, res));
            number.append(" ");

            int j = i / 1000;
            if (j % 100 >= 5 && j % 100 <= 20) {
                number.append(res.getString(R.string.number_1000_plural));
            } else if (j % 10 == 1) {
                number.append(res.getString(R.string.number_1000_single));
            } else if (j % 10 >= 2 && j % 10 <= 4) {
                number.append(res.getString(R.string.number_1000_several));
            } else {
                number.append(res.getString(R.string.number_1000_plural));
            }
        }

        return number.toString();
    }

    public static String getMillion(int i, Resources res) {
        StringBuilder number = new StringBuilder();

        if (i >= 1000000) {
            number.append(getHundreds(i / 1000000, true, res));
            number.append(" ");

            int j = i / 1000000;
            if (j % 100 >= 5 && j % 100 <= 20) {
                number.append(res.getString(R.string.number_million_plural));
            } else if (j % 10 == 1) {
                number.append(res.getString(R.string.number_million_single));
            } else if (j % 10 >= 2 && j % 10 <= 4) {
                number.append(res.getString(R.string.number_million_several));
            } else {
                number.append(res.getString(R.string.number_million_plural));
            }
        }

        return number.toString();
    }

    public static String getNumber(int i, Resources res) {
        if (i >= 1000000000) {
            return "";
        }

        StringBuilder number = new StringBuilder();

        number.append(getMillion(i, res));

        if (i >= 1000000 && i % 1000000 != 0) {
            number.append(" ");
        }

        number.append(getThousand(i, res));

        if ((i % 1000000) >= 1000 && i % 1000 != 0) {
            number.append(" ");
        }

        if (i % 1000 != 0) {
            number.append(getHundreds(i % 1000, true, res));
        }

        return number.toString();
    }
}
