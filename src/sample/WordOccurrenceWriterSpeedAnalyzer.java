package sample;

import java.io.*;
import java.util.Scanner;

public class WordOccurrenceWriterSpeedAnalyzer {
    private CharSet charSet = new CharSet();
    public WordOccurrenceWriterSpeedAnalyzer(int start, int step, int max) throws IOException {
        File BigWordAndOccurrenceStore = new File("sample/BigWordAndOccurrenceStore.java");
        File[] WordAndOccurrenceStores = new File[]{
                new File("sample/WordAndOccurrenceStore1.java"),
                new File("sample/WordAndOccurrenceStore2.java"),
                new File("sample/WordAndOccurrenceStore3.java"),
                new File("sample/WordAndOccurrenceStore4.java"),
                new File("sample/WordAndOccurrenceStore5.java"),
                new File("sample/WordAndOccurrenceStore6.java"),
                new File("sample/WordAndOccurrenceStore7.java")
        };
        File r = charSet.getLanguage_Manipulation_UniqueWords_TrainerReservoir();

        File res = new File("sample/mutableEnglishReservoirForSpeedAnalysis");
        StringBuilder totalTimes = new StringBuilder();
        StringBuilder countAndSortTimes = new StringBuilder();
        for (int i = start; i < max; i+=step) {
            FileWriter fileWriter = new FileWriter(res);
            Scanner scanner = new Scanner(r);
            StringBuilder sb = new StringBuilder();
            int numWords = 0;
            while (scanner.hasNext() && numWords < i){
                sb.append(scanner.next());
                numWords++;
            }
            scanner.close();
            fileWriter.write(sb.toString());
            fileWriter.close();
            WordOccurrenceWriter wow = new WordOccurrenceWriter(res, WordAndOccurrenceStores, BigWordAndOccurrenceStore);
            totalTimes.append(wow.getTotalDuration()).append("\n");
            countAndSortTimes.append(wow.getDurationOfCountAndSort()).append("\n");
            System.out.println(i);
        }
        FileWriter WOWTotalTimeWriter = new FileWriter("sample/WOWTotalTimes");
        FileWriter WOWCountAndSortTimeWriter = new FileWriter("sample/WOWCountAndSortTimes");
        WOWTotalTimeWriter.write(totalTimes.toString());
        WOWCountAndSortTimeWriter.write(countAndSortTimes.toString());
        WOWTotalTimeWriter.close();
        WOWCountAndSortTimeWriter.close();
    }
    public WordOccurrenceWriterSpeedAnalyzer() throws IOException {
        this(1, 10000, 500000);
    }

    public static void main(String[] args) throws IOException {
        Time time = new Time();
        new WordOccurrenceWriterSpeedAnalyzer();
        time.end();
        time.println();
    }
}
