package sample;

import java.io.*;

public class CaesarCracker {
    static CharSet charSet = new CharSet(false);
    static char[] alphabet = charSet.getAlphabet();
    static char[] ignorers = charSet.getIgnorers();
    private String solved = "";
    private int shift;
    private File solution;
    boolean isSolved;
    private char[] key;
    private String language;
    public CaesarCracker(String Cipher) throws IOException, InterruptedException {
        shift = 1;
//        File[] files = new File[]{new File("sample/0.txt"), new File("sample/1.txt"), new File("sample/2.txt"), new File("sample/3.txt"), new File("sample/4.txt"), new File("sample/5.txt"), new File("sample/6.txt"), new File("sample/7.txt"), new File("sample/8.txt"), new File("sample/9.txt"), new File("sample/10.txt"), new File("sample/11.txt"), new File("sample/12.txt"), new File("sample/13.txt"), new File("sample/14.txt"), new File("sample/15.txt"), new File("sample/16.txt"), new File("sample/17.txt"), new File("sample/18.txt"), new File("sample/19.txt"), new File("sample/20.txt"), new File("sample/21.txt"), new File("sample/22.txt"), new File("sample/23.txt"), new File("sample/24.txt"), new File("sample/25.txt")};
        for (int i = 1; i < 26; i++) {
//            FileWriter fileWriter = new FileWriter(files[i]);
            StringBuilder attempt = new StringBuilder();
            for (int j = 0; j < Cipher.length()/*-1*/; j++) {
                attempt.append(transpositionOf(Cipher.charAt(j), i));
            }
            String sattempt = attempt.toString();
//                fileWriter.write(attempt.toString());
//                fileWriter.close();
                not_english not_english = new not_english(sattempt);
                if (!not_english.not_english()) {
                    isSolved = true;
                    shift = i;
                    solved = sattempt;
//                    solution = files[i];
                    key = new CaesarKey(shift).get();
                    language = "English";
                }
                else {
                    not_spanish not_spanish = new not_spanish(sattempt);
                    if (!not_spanish.not_spanish()) {
                        isSolved = true;
                        shift = i;
                        solved = sattempt;
//                        solution = files[i];
                        key = new CaesarKey(shift).get();
                        language = "Spanish";
                    }
                    else {
                        not_french not_french = new not_french(sattempt);
                        if (!not_french.not_french()) {
                            isSolved = true;
                            shift = i;
                            solved = sattempt;
//                            solution = files[i];
                            key = new CaesarKey(shift).get();
                            language = "French";
                        }
                        else {
                            not_portuguese not_portuguese = new not_portuguese(sattempt);
                            if (!not_portuguese.not_portuguese()) {
                                isSolved = true;
                                shift = i;
                                solved = sattempt;
//                                solution = files[i];
                                key = new CaesarKey(shift).get();
                                language = "Portuguese";
                            }
                            else {
                                not_latin_alphabet_language not_latin_alphabet_language = new not_latin_alphabet_language(sattempt);
                                if (!not_latin_alphabet_language.not_latin_alphabet_language()) {
                                    isSolved = true;
                                    shift = i;
                                    solved = sattempt;
//                                    solution = files[i];
                                    key = new CaesarKey(shift).get();
                                    language = "*";
                                }
                            }
                        }
                    }
                }
        }
    }
    public static String transpositionOf(char letter, int shift){
        String rtn;

        String stringVal = String.valueOf(letter);
        boolean isUpperCase = !stringVal.equals(stringVal.toLowerCase());
        boolean isIgnorer = false;
        for (char ignorer: ignorers) {
            if (letter == ignorer) {
                return stringVal;
            }
        }
//green use if the letter '??', for example, has been treated like 'a' and also shifted up. This is NOT how cryptii does it, but still useful in case.
// if (charSet.isAccented(letter)){//
//            letter = charSet.unAccent(letter);
//        }
            int index = 0;
            for (int i = 0; i < alphabet.length; i++) {
                char c = alphabet[i];
                if (String.valueOf(c).equalsIgnoreCase(String.valueOf(letter))){
                    index = i;
                }
            }
            int shifted = index + shift;
            if (shifted > 25) {
                shifted -= 26;
            }
            rtn = String.valueOf(alphabet[shifted]);
            if (isUpperCase){
                rtn = rtn.toUpperCase();
            }
            if (!isUpperCase){
                rtn = rtn.toLowerCase();
            }
        return rtn;
    }
    public static String transpose(String string, int shift){
        StringBuilder sb = new StringBuilder();
        for (int j = 0; j < string.length(); j++) {
            sb.append(transpositionOf(string.charAt(j), shift));
        }
        return sb.toString();
    }
    public boolean isSolved(){return isSolved;}
    public String getSolved(){return solved;}
    public String getLanguage(){return language;}
    public int getShift(){return shift;}
    public File getSolution(){return solution;}
    public char[] getKey(){return key;}

    public static void main(String[] args) throws IOException, InterruptedException {
        CaesarCracker caesarCracker = new CaesarCracker(" Estd td esp dezcj zq Olyyj lyo zq Olyyj???d qctpyod lyo zq Olyyj???d szfdp. Te td l dezcj zq szh espdp escpp mpnlxp zyp estyr");
        System.out.println(caesarCracker.getSolved());
    }
}
