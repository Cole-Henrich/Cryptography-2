package sample;

import java.util.ArrayList;

public class SubstitutionDecodeWithKnownKey {
    private String output;
    public SubstitutionDecodeWithKnownKey(String input, char[] alphabet, String[] key){
        StringBuilder out = new StringBuilder();
        for (char c: input.toCharArray()){
            for (int i = 0; i < key.length; i++) {
                if (String.valueOf(c).equals(key[i])){
                    out.append(alphabet[i]);
                }
            }
        }
    }
    public SubstitutionDecodeWithKnownKey(ArrayList<String> input, char[] alphabet, String[] key){
        System.out.println("new SubstitutionDecodeWithKnownKey");
        StringBuilder out = new StringBuilder();
        for (String s:input){
            for (int i = 0; i < key.length; i++) {
                if (s.equals(key[i])){
                    out.append(alphabet[i]);
                }
            }
        }
        output = out.toString();
    }

    public String getOutput() {
        return output;
    }
}
