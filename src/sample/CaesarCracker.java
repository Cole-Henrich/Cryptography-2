package sample;

import java.io.*;

public class CaesarCracker {
    CharSet charSet = new CharSet();
    char[] alphabet = charSet.getAlphabet();
    char[] ignorers = charSet.getIgnorers();
    private String solved = "";
    private int shift;
    private File solution;
    boolean isSolved;
    private char[] key;
    public CaesarCracker(String Cipher) throws IOException {
        shift = 1;
        String string = Cipher.strip();
        File[] files = new File[]{new File("/Users/cole.henrich/Documents/MOOD/Cryptography-2/src/sample/0.txt"), new File("/Users/cole.henrich/Documents/MOOD/Cryptography-2/src/sample/1.txt"), new File("/Users/cole.henrich/Documents/MOOD/Cryptography-2/src/sample/2.txt"), new File("/Users/cole.henrich/Documents/MOOD/Cryptography-2/src/sample/3.txt"), new File("/Users/cole.henrich/Documents/MOOD/Cryptography-2/src/sample/4.txt"), new File("/Users/cole.henrich/Documents/MOOD/Cryptography-2/src/sample/5.txt"), new File("/Users/cole.henrich/Documents/MOOD/Cryptography-2/src/sample/6.txt"), new File("/Users/cole.henrich/Documents/MOOD/Cryptography-2/src/sample/7.txt"), new File("/Users/cole.henrich/Documents/MOOD/Cryptography-2/src/sample/8.txt"), new File("/Users/cole.henrich/Documents/MOOD/Cryptography-2/src/sample/9.txt"), new File("/Users/cole.henrich/Documents/MOOD/Cryptography-2/src/sample/10.txt"), new File("/Users/cole.henrich/Documents/MOOD/Cryptography-2/src/sample/11.txt"), new File("/Users/cole.henrich/Documents/MOOD/Cryptography-2/src/sample/12.txt"), new File("/Users/cole.henrich/Documents/MOOD/Cryptography-2/src/sample/13.txt"), new File("/Users/cole.henrich/Documents/MOOD/Cryptography-2/src/sample/14.txt"), new File("/Users/cole.henrich/Documents/MOOD/Cryptography-2/src/sample/15.txt"), new File("/Users/cole.henrich/Documents/MOOD/Cryptography-2/src/sample/16.txt"), new File("/Users/cole.henrich/Documents/MOOD/Cryptography-2/src/sample/17.txt"), new File("/Users/cole.henrich/Documents/MOOD/Cryptography-2/src/sample/18.txt"), new File("/Users/cole.henrich/Documents/MOOD/Cryptography-2/src/sample/19.txt"), new File("/Users/cole.henrich/Documents/MOOD/Cryptography-2/src/sample/20.txt"), new File("/Users/cole.henrich/Documents/MOOD/Cryptography-2/src/sample/21.txt"), new File("/Users/cole.henrich/Documents/MOOD/Cryptography-2/src/sample/22.txt"), new File("/Users/cole.henrich/Documents/MOOD/Cryptography-2/src/sample/23.txt"), new File("/Users/cole.henrich/Documents/MOOD/Cryptography-2/src/sample/24.txt"), new File("/Users/cole.henrich/Documents/MOOD/Cryptography-2/src/sample/25.txt")};
        for (int i = 1; i < files.length; i++) {
            FileWriter fileWriter = new FileWriter(files[i]);
            StringBuilder attempt = new StringBuilder();
            for (int j = 0; j < string.length(); j++) {
                attempt.append(transpositionOf(string.charAt(j), i));
               if (j == string.length()-1){
                   fileWriter.write(attempt.toString());
                   fileWriter.close();
                   not_english not_english = new not_english(files[i]);
                   if (!not_english.not_english()) {
                       isSolved = true;
                       shift = i;
                       solved = attempt.toString();
                       solution = files[i];
                       this.key = new CaesarKey(shift).get();
                   }
               }
            }
        }
    }
    private String transpositionOf(char letter, int shift){
        String rtn;
        boolean isIgnorer = false;
        for (char ignorer: ignorers) {
            if (letter == ignorer) {
                isIgnorer = true;
                break;
            }
        }
        if (isIgnorer){
            rtn = String.valueOf(letter);
        }
        else {
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
        }
        return rtn;
    }
    public boolean isSolved(){return isSolved;}
    public String getSolved(){return solved;}
    public int getShift(){return shift;}
    public File getSolution(){return solution;}
    public char[] getKey(){return key;}
}
