//package sample;
//
//import java.io.File;
//import java.io.FileNotFoundException;
//import java.util.ArrayList;
//import java.util.HashMap;
//
//public class SortingAttribute {
//    private int index;
//    private int occurrences;
//    private int rank;
//    private static final CharSet charSet = new CharSet();
//    private static final char[] alphabet = {
//            'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'
//    };
//    public static ArrayList<SortingAttribute> countFrequencyIn(ArrayList<String> r, boolean useCase) {
//        ArrayList<String> reservoir = new ArrayList<>();
//        if (!useCase){for (String s:r){reservoir.add(s.toLowerCase());}}
//        else {reservoir = r;}
//        HashMap<String, Integer> wordsAndFrequencies = new HashMap<>();
//        for (int i = 0; i < reservoir.size(); i++) {
//            String s = reservoir.get(i);
//            if (!wordsAndFrequencies.containsKey(s)){
//                wordsAndFrequencies.put(s, 1);
//            }
//            else {
//                wordsAndFrequencies.put(s, wordsAndFrequencies.get(s)+1);
//            }
//        }
//    }
//    public static ArrayList<SortingAttribute> CountFrequencyIn(File document, ArrayList<String> list, boolean useCase) throws FileNotFoundException {
//        return countFrequencyIn(charSet.fileToArrayListOfStrings(document), list, useCase);
//    }
//
//    public void setRank(int Rank){
//        this.rank = Rank;
//    }
//    public int getRank(){
//        return rank;
//    }
//    public SortingAttribute(int index, int occurrences){
//        this.index = index;
//        this.occurrences = occurrences;
//    }
//    public int getIndex(){return index;}
//    public int getOccurrences(){return occurrences;}
//    public int[] getAttributes(){return new int[]{index, occurrences};}
//    public static ArrayList<SortingAttribute> LEAST_TO_MOST(ArrayList<SortingAttribute> A){
////        System.err.println("sort()");
//        ArrayList<SortingAttribute> a = A;
//        for (int i = 0; i < a.size(); i++) {
//            for (int j = 0; j < a.size(); j++) {
//                if (a.get(i).getOccurrences() < a.get(j).getOccurrences()){
//                    SortingAttribute tmp = a.get(i);
//                    a.set(i, a.get(j));
//                    a.set(j, tmp);
//                }
//            }
//        }
//        return a;
//    }
//    public static ArrayList<SortingAttribute> MOST_TO_LEAST(ArrayList<SortingAttribute> A){
//        ArrayList<SortingAttribute> a = SortingAttribute.LEAST_TO_MOST(A);
//        ArrayList<SortingAttribute> b = new ArrayList<>();
//        for (int i = a.size()-1; i >=0 ; i--) {
//            b.add(a.get(i));
//        }
//        return b;
//    }
//    public static String println_Int(ArrayList<SortingAttribute> A){
//        StringBuilder sb = new StringBuilder();
//        for (SortingAttribute B : A) {
//            sb.append(B.getIndex()).append(" ").append(B.getOccurrences()).append("\n");
//        }
//        return sb.toString();
//    }
//    public static String println(ArrayList<SortingAttribute> A, ArrayList<String> B){
//        StringBuilder sb = new StringBuilder();
//        for (SortingAttribute C : A) {
//            sb.append(B.get(C.getIndex())).append(" ").append(C.getOccurrences()).append("\n");
//        }
//        return sb.toString();
//    }
//}
