package com.example.ivan.homework1;

import java.util.ArrayList;
import java.util.List;

public class DataGenerator {

    public static String getHundreds(int i, boolean male) {
        StringBuilder number = new StringBuilder();
        switch ((i % 1000) / 100) {
            case 1: number.append("сто"); break;
            case 2: number.append("двести"); break;
            case 3: number.append("триста"); break;
            case 4: number.append("четыреста"); break;
            case 5: number.append("пятьсот"); break;
            case 6: number.append("шестьсот"); break;
            case 7: number.append("семьсот"); break;
            case 8: number.append("восемьсот"); break;
            case 9: number.append("девятьсот"); break;
        }

        if (i >= 100 && i % 100 != 0) {
            number.append(" ");
        }

        if (i % 100 >= 10 && i % 100 < 20) {
            switch (i % 100) {
                case 10: number.append("десять"); break;
                case 11: number.append("одиннадцать"); break;
                case 12: number.append("двенадцать"); break;
                case 13: number.append("тринадцать"); break;
                case 14: number.append("четырнадцать"); break;
                case 15: number.append("пятнадцать"); break;
                case 16: number.append("шестнадцать"); break;
                case 17: number.append("семнадцать"); break;
                case 18: number.append("восемнадцать"); break;
                case 19: number.append("девятнадцать"); break;
            }
        } else {
            switch ((i % 100) / 10) {
                case 2: number.append("двадцать"); break;
                case 3: number.append("тридцать"); break;
                case 4: number.append("сорок"); break;
                case 5: number.append("пятьдесят"); break;
                case 6: number.append("шестьдесят"); break;
                case 7: number.append("семьдесят"); break;
                case 8: number.append("восемьдесят"); break;
                case 9: number.append("девяносто"); break;
            }

            if (i % 10 != 0 && i >= 10) {
                number.append(" ");
            }

            switch (i % 10) {
                case 1: if (male) number.append("один"); else number.append("одна"); break;
                case 2: if (male) number.append("два"); else number.append("две"); break;
                case 3: number.append("три"); break;
                case 4: number.append("четыре"); break;
                case 5: number.append("пять"); break;
                case 6: number.append("шесть"); break;
                case 7: number.append("семь"); break;
                case 8: number.append("восемь"); break;
                case 9: number.append("девять"); break;
            }
        }

        return number.toString();
    }

    public static String getThousand(int i) {
        StringBuilder number = new StringBuilder();

        if ((i % 1000000) >= 1000) {
            number.append(getHundreds((i % 1000000) / 1000, false));

            int j = i / 1000;
            if (j % 100 >= 5 && j % 100 <= 20) {
                number.append(" тысяч");
            } else if (j % 10 == 1) {
                number.append(" тысяча");
            } else if (j % 10 >= 2 && j % 10 <= 4) {
                number.append(" тысячи");
            } else {
                number.append(" тысяч");
            }
        }

        return number.toString();
    }

    public static String getMillion(int i) {
        StringBuilder number = new StringBuilder();

        if (i >= 1000000) {
            number.append(getHundreds(i / 1000000, true));
            int j = i / 1000000;
            if (j % 100 >= 5 && j % 100 <= 20) {
                number.append(" миллионов");
            } else if (j % 10 == 1) {
                number.append(" миллион");
            } else if (j % 10 >= 2 && j % 10 <= 4) {
                number.append(" миллиона");
            } else {
                number.append(" миллионов");
            }
        }

        return number.toString();
    }

    public static String getNumber(int i) {
        StringBuilder number = new StringBuilder();

        number.append(getMillion(i));

        if (i >= 1000000 && i % 1000000 != 0) {
            number.append(" ");
        }

        number.append(getThousand(i));

        if ((i % 1000000) >= 1000 && i % 1000 != 0) {
            number.append(" ");
        }

        if (i % 1000 != 0) {
            number.append(getHundreds(i % 1000, true));
        }

        return number.toString();
    }

    public static List<String> getNumbers(int count) {
        List<String> data = new ArrayList<>();
        for (int i = 1; i <= count; ++i) {
            data.add(getNumber(i));
        }

        return data;
    }
}
