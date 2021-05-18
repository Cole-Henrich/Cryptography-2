package sample;

import java.util.ArrayList;
import java.util.Random;

public class SubstitutionKey extends ArrayList<String> {
    private final CharSet charSet = new CharSet();
    private final Random random = new Random();
    public SubstitutionKey(char[] characterSet, boolean capitalize, boolean alternating, boolean Alternating_StartCapitalized) {
        super();
        char[] a = characterSet;
        char[] b = charSet.morphCaseACharArray(a, capitalize, alternating, Alternating_StartCapitalized);
        ArrayList<String> c = charSet.StringToStringArrayList(charSet.charToStringArray(b));
        this.addAll(c);
    }
    public static void main(String[] args) {

    }
}
