package sample;

import java.util.*;

public class VigenereDictionaryAttacker {
    private boolean isSolved;
    private String solved;
    private String keyWord;
    public VigenereDictionaryAttacker(String cipher, int likelyKeyLength) throws InterruptedException {
        isSolved = false;
        System.err.println("VigenereDictionaryAttacker: likelyKeyLength="+likelyKeyLength);
//        HashMap<Integer, ArrayList<HashMap<String, Integer>>> words = new HashMap<>();
//        ArrayList<HashMap<String, Integer>> xLongWords = words.get(likelyKeyLength);
        ArrayList<a> xLongWords = new ArrayList<>();
        if (likelyKeyLength <=9){

            if (likelyKeyLength==8){

            }
            else {
                if (likelyKeyLength==7){
                    _Array_6LetterWordsAndOccurrencesBigStore _6s = new _Array_6LetterWordsAndOccurrencesBigStore();
                    xLongWords = _6s.central();
                }
                else {
                    if (likelyKeyLength==6){
                        _Array_6LetterWordsAndOccurrencesBigStore _6s = new _Array_6LetterWordsAndOccurrencesBigStore();
                        xLongWords = _6s.central();
                    }
                    else {
                        if (likelyKeyLength==5){

                        }
                        else {
                            if (likelyKeyLength==4){

                            }
                            else {
                                if (likelyKeyLength==3){

                                }
                                else {
                                    if (likelyKeyLength==2){

                                    }
                                    else {
                                        if (likelyKeyLength==1){

                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        else {
            if (likelyKeyLength == 10){

            }
            else {
                if (likelyKeyLength == 11){

                }
                else {
                    if (likelyKeyLength == 12){

                    }
                    else {
                        if (likelyKeyLength == 13){

                        }
                        else {
                            if (likelyKeyLength == 14){

                            }
                            else {
                                if (likelyKeyLength == 15){

                                }
                                else {
                                    if (likelyKeyLength == 16){

                                    }
                                    else {
                                        if (likelyKeyLength == 17){

                                        }
                                        else {
                                            if (likelyKeyLength == 18){

                                            }
                                            else {
                                                if (likelyKeyLength == 19){

                                                }
                                                else {
                                                    if (likelyKeyLength == 20){

                                                    }
                                                    else {
                                                        xLongWords = new ArrayList<a>(Collections.singletonList(new a("supercalifragilisticexpialidocious", 1)));
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }

        }
        String[] cipherSplit = cipher.split(" ");
        StringBuilder shortCipherBuilder = new StringBuilder();
        for (int i = 0; i < 8; i++) {
            shortCipherBuilder.append(cipherSplit[i]).append("\s");
        }
        String shortCipher = shortCipherBuilder.toString();
        System.out.println("shortCipher: "+shortCipher);
        int i = 0;
        while (true) {
            a entry = xLongWords.get(i);
            String keyWordTest = entry.getWord();
//            System.out.println(keyWordTest);

            VigenereKeyPhrase vkf = new VigenereKeyPhrase(keyWordTest, shortCipher.length());
            VigenereDeciphered vdc = new VigenereDeciphered(shortCipher, vkf.get(), false);
            String test = vdc.get();
//            System.out.println(test);

            not_english not_english1 = new not_english(test, 0.4);
//            System.out.println(not_english1.not_english());
            if (!not_english1.not_english()) {
                VigenereKeyPhrase vkfFull = new VigenereKeyPhrase(keyWordTest, cipher.length());
                VigenereDeciphered vdcFull = new VigenereDeciphered(cipher, vkfFull.get(), false);
                String testFull = vdcFull.get();
                not_english not_englishFull = new not_english(testFull, 0.4);
                if (!not_englishFull.not_english()){
                    isSolved = true;
                    solved = testFull;
                    keyWord = keyWordTest;
                    System.out.println(i);
                    break;
                }
            }
            i++;
            if (i%200==0){
                System.out.println(i+" "+keyWordTest);
            }
            if (i == xLongWords.size()){
                break;
            }
        }
    }
    public boolean isSolved() {
        return isSolved;
    }
    public String getSolved() {
        return solved;
    }
    public String getKeyWord() {
        return keyWord;
    }

}
