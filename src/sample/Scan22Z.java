package sample;

import java.util.Arrays;
import java.util.Scanner;

import static sample.SubstitutionCracker2.massCalc_notAnyOther;
import static sample.SubstitutionCracker2.notAnotherVowel;

public class Scan22Z{
    private final int _a = 0;
    private final int _b = 1;
    private final int _c = 2;
    private final int _d = 3;
    private final int _e = 4;
    private final int _f = 5;
    private final int _g = 6;
    private final int _h = 7;
    private final int _i = 8;
    private final int _j = 9;
    private final int _k = 10;
    private final int _l = 11;
    private final int _m = 12;
    private final int _n = 13;
    private final int _o = 14;
    private final int _p = 15;
    private final int _q = 16;
    private final int _r = 17;
    private final int _s = 18;
    private final int _t = 19;
    private final int _u = 20;
    private final int _v = 21;
    private final int _w = 22;
    private final int _x = 23;
    private final int _y = 24;
    private final int _z = 25;

public Scan22Z(){
System.err.println("new Scan22Z");


Scanner z_recognize = new Scanner(SubstitutionCracker2.cipher);
while(z_recognize.hasNext()){
String next = z_recognize.next();
if (next.length()==9){
String first = String.valueOf(next.charAt(0));
String second = String.valueOf(next.charAt(1));
String third = String.valueOf(next.charAt(2));
String fourth = String.valueOf(next.charAt(3));
String fifth = String.valueOf(next.charAt(4));
String sixth = String.valueOf(next.charAt(5));
String seventh = String.valueOf(next.charAt(6));
String eighth = String.valueOf(next.charAt(7));
String ninth = String.valueOf(next.charAt(8));

if(massCalc_notAnyOther(new String[]{first,second,third,fourth,fifth,sixth,seventh,ninth},
new int[]{_r,_e,_c,_o,_g,_n,_i,_e})){
SubstitutionCracker2.key[_z] = eighth.toLowerCase();
SubstitutionCracker2.hasZ=true;
System.err.println("SubstitutionCracker2.hasZ=true; via Scanner z_recognize");
System.err.println((Arrays.toString(SubstitutionCracker2.key)).replaceAll("null", "\u0000"));
System.err.println(SubstitutionCracker2.correctKey);

z_recognize.close();
break;
   }
  }
 }
if(!SubstitutionCracker2.hasZ){
z_recognize.close();
Scanner z_realized = new Scanner(SubstitutionCracker2.cipher);
while(z_realized.hasNext()){
String next = z_realized.next();
if (next.length()==8){
String first = String.valueOf(next.charAt(0));
String second = String.valueOf(next.charAt(1));
String third = String.valueOf(next.charAt(2));
String fourth = String.valueOf(next.charAt(3));
String fifth = String.valueOf(next.charAt(4));
String sixth = String.valueOf(next.charAt(5));
String seventh = String.valueOf(next.charAt(6));
String eighth = String.valueOf(next.charAt(7));

if(massCalc_notAnyOther(new String[]{first,second,third,fourth,fifth,seventh,eighth},
new int[]{_r,_e,_a,_l,_i,_e,_d})){
SubstitutionCracker2.key[_z] = sixth.toLowerCase();
SubstitutionCracker2.hasZ=true;
System.err.println("SubstitutionCracker2.hasZ=true; via Scanner z_realized");
System.err.println((Arrays.toString(SubstitutionCracker2.key)).replaceAll("null", "\u0000"));
System.err.println(SubstitutionCracker2.correctKey);

z_realized.close();
break;
   }
  }
 }
if(!SubstitutionCracker2.hasZ){
z_realized.close();
Scanner z_seized = new Scanner(SubstitutionCracker2.cipher);
while(z_seized.hasNext()){
String next = z_seized.next();
if (next.length()==6){
String first = String.valueOf(next.charAt(0));
String second = String.valueOf(next.charAt(1));
String third = String.valueOf(next.charAt(2));
String fourth = String.valueOf(next.charAt(3));
String fifth = String.valueOf(next.charAt(4));
String sixth = String.valueOf(next.charAt(5));

if(massCalc_notAnyOther(new String[]{first,second,third,fifth,sixth},
new int[]{_s,_e,_i,_e,_d})){
SubstitutionCracker2.key[_z] = fourth.toLowerCase();
SubstitutionCracker2.hasZ=true;
System.err.println("SubstitutionCracker2.hasZ=true; via Scanner z_seized");
System.err.println((Arrays.toString(SubstitutionCracker2.key)).replaceAll("null", "\u0000"));
System.err.println(SubstitutionCracker2.correctKey);

z_seized.close();
break;
   }
  }
 }
if(!SubstitutionCracker2.hasZ){
z_seized.close();
Scanner z_size = new Scanner(SubstitutionCracker2.cipher);
while(z_size.hasNext()){
String next = z_size.next();
if (next.length()==4){
String first = String.valueOf(next.charAt(0));
String second = String.valueOf(next.charAt(1));
String third = String.valueOf(next.charAt(2));
String fourth = String.valueOf(next.charAt(3));

if(massCalc_notAnyOther(new String[]{first,second,fourth},
new int[]{_s,_i,_e})){
SubstitutionCracker2.key[_z] = third.toLowerCase();
SubstitutionCracker2.hasZ=true;
System.err.println("SubstitutionCracker2.hasZ=true; via Scanner z_size");
System.err.println((Arrays.toString(SubstitutionCracker2.key)).replaceAll("null", "\u0000"));
System.err.println(SubstitutionCracker2.correctKey);

z_size.close();
break;
   }
  }
 }
if(!SubstitutionCracker2.hasZ){
z_size.close();
Scanner z_realize = new Scanner(SubstitutionCracker2.cipher);
while(z_realize.hasNext()){
String next = z_realize.next();
if (next.length()==7){
String first = String.valueOf(next.charAt(0));
String second = String.valueOf(next.charAt(1));
String third = String.valueOf(next.charAt(2));
String fourth = String.valueOf(next.charAt(3));
String fifth = String.valueOf(next.charAt(4));
String sixth = String.valueOf(next.charAt(5));
String seventh = String.valueOf(next.charAt(6));

if(massCalc_notAnyOther(new String[]{first,second,third,fourth,fifth,seventh},
new int[]{_r,_e,_a,_l,_i,_e})){
SubstitutionCracker2.key[_z] = sixth.toLowerCase();
SubstitutionCracker2.hasZ=true;
System.err.println("SubstitutionCracker2.hasZ=true; via Scanner z_realize");
System.err.println((Arrays.toString(SubstitutionCracker2.key)).replaceAll("null", "\u0000"));
System.err.println(SubstitutionCracker2.correctKey);

z_realize.close();
break;
   }
  }
 }
if(!SubstitutionCracker2.hasZ){
z_realize.close();
Scanner z_recognized = new Scanner(SubstitutionCracker2.cipher);
while(z_recognized.hasNext()){
String next = z_recognized.next();
if (next.length()==10){
String first = String.valueOf(next.charAt(0));
String second = String.valueOf(next.charAt(1));
String third = String.valueOf(next.charAt(2));
String fourth = String.valueOf(next.charAt(3));
String fifth = String.valueOf(next.charAt(4));
String sixth = String.valueOf(next.charAt(5));
String seventh = String.valueOf(next.charAt(6));
String eighth = String.valueOf(next.charAt(7));
String ninth = String.valueOf(next.charAt(8));
String tenth = String.valueOf(next.charAt(9));

if(massCalc_notAnyOther(new String[]{first,second,third,fourth,fifth,sixth,seventh,ninth,tenth},
new int[]{_r,_e,_c,_o,_g,_n,_i,_e,_d})){
SubstitutionCracker2.key[_z] = eighth.toLowerCase();
SubstitutionCracker2.hasZ=true;
System.err.println("SubstitutionCracker2.hasZ=true; via Scanner z_recognized");
System.err.println((Arrays.toString(SubstitutionCracker2.key)).replaceAll("null", "\u0000"));
System.err.println(SubstitutionCracker2.correctKey);

z_recognized.close();
break;
   }
  }
 }
if(!SubstitutionCracker2.hasZ){
z_recognized.close();
Scanner z_gazed = new Scanner(SubstitutionCracker2.cipher);
while(z_gazed.hasNext()){
String next = z_gazed.next();
if (next.length()==5){
String first = String.valueOf(next.charAt(0));
String second = String.valueOf(next.charAt(1));
String third = String.valueOf(next.charAt(2));
String fourth = String.valueOf(next.charAt(3));
String fifth = String.valueOf(next.charAt(4));

if(massCalc_notAnyOther(new String[]{first,second,fourth,fifth},
new int[]{_g,_a,_e,_d})){
SubstitutionCracker2.key[_z] = third.toLowerCase();
SubstitutionCracker2.hasZ=true;
System.err.println("SubstitutionCracker2.hasZ=true; via Scanner z_gazed");
System.err.println((Arrays.toString(SubstitutionCracker2.key)).replaceAll("null", "\u0000"));
System.err.println(SubstitutionCracker2.correctKey);

z_gazed.close();
break;
   }
  }
 }
if(!SubstitutionCracker2.hasZ){
z_gazed.close();
Scanner z_ezechias = new Scanner(SubstitutionCracker2.cipher);
while(z_ezechias.hasNext()){
String next = z_ezechias.next();
if (next.length()==8){
String first = String.valueOf(next.charAt(0));
String second = String.valueOf(next.charAt(1));
String third = String.valueOf(next.charAt(2));
String fourth = String.valueOf(next.charAt(3));
String fifth = String.valueOf(next.charAt(4));
String sixth = String.valueOf(next.charAt(5));
String seventh = String.valueOf(next.charAt(6));
String eighth = String.valueOf(next.charAt(7));

if(massCalc_notAnyOther(new String[]{first,third,fourth,fifth,sixth,seventh,eighth},
new int[]{_e,_e,_c,_h,_i,_a,_s})){
SubstitutionCracker2.key[_z] = second.toLowerCase();
SubstitutionCracker2.hasZ=true;
System.err.println("SubstitutionCracker2.hasZ=true; via Scanner z_ezechias");
System.err.println((Arrays.toString(SubstitutionCracker2.key)).replaceAll("null", "\u0000"));
System.err.println(SubstitutionCracker2.correctKey);

z_ezechias.close();
break;
   }
  }
 }
if(!SubstitutionCracker2.hasZ){
z_ezechias.close();
Scanner z_citizens = new Scanner(SubstitutionCracker2.cipher);
while(z_citizens.hasNext()){
String next = z_citizens.next();
if (next.length()==8){
String first = String.valueOf(next.charAt(0));
String second = String.valueOf(next.charAt(1));
String third = String.valueOf(next.charAt(2));
String fourth = String.valueOf(next.charAt(3));
String fifth = String.valueOf(next.charAt(4));
String sixth = String.valueOf(next.charAt(5));
String seventh = String.valueOf(next.charAt(6));
String eighth = String.valueOf(next.charAt(7));

if(massCalc_notAnyOther(new String[]{first,second,third,fourth,sixth,seventh,eighth},
new int[]{_c,_i,_t,_i,_e,_n,_s})){
SubstitutionCracker2.key[_z] = fifth.toLowerCase();
SubstitutionCracker2.hasZ=true;
System.err.println("SubstitutionCracker2.hasZ=true; via Scanner z_citizens");
System.err.println((Arrays.toString(SubstitutionCracker2.key)).replaceAll("null", "\u0000"));
System.err.println(SubstitutionCracker2.correctKey);

z_citizens.close();
break;
   }
  }
 }
if(!SubstitutionCracker2.hasZ){
z_citizens.close();
Scanner z_ezechiel = new Scanner(SubstitutionCracker2.cipher);
while(z_ezechiel.hasNext()){
String next = z_ezechiel.next();
if (next.length()==8){
String first = String.valueOf(next.charAt(0));
String second = String.valueOf(next.charAt(1));
String third = String.valueOf(next.charAt(2));
String fourth = String.valueOf(next.charAt(3));
String fifth = String.valueOf(next.charAt(4));
String sixth = String.valueOf(next.charAt(5));
String seventh = String.valueOf(next.charAt(6));
String eighth = String.valueOf(next.charAt(7));

if(massCalc_notAnyOther(new String[]{first,third,fourth,fifth,sixth,seventh,eighth},
new int[]{_e,_e,_c,_h,_i,_e,_l})){
SubstitutionCracker2.key[_z] = second.toLowerCase();
SubstitutionCracker2.hasZ=true;
System.err.println("SubstitutionCracker2.hasZ=true; via Scanner z_ezechiel");
System.err.println((Arrays.toString(SubstitutionCracker2.key)).replaceAll("null", "\u0000"));
System.err.println(SubstitutionCracker2.correctKey);

z_ezechiel.close();
break;
   }
  }
 }
if(!SubstitutionCracker2.hasZ){
z_ezechiel.close();
Scanner z_gazing = new Scanner(SubstitutionCracker2.cipher);
while(z_gazing.hasNext()){
String next = z_gazing.next();
if (next.length()==6){
String first = String.valueOf(next.charAt(0));
String second = String.valueOf(next.charAt(1));
String third = String.valueOf(next.charAt(2));
String fourth = String.valueOf(next.charAt(3));
String fifth = String.valueOf(next.charAt(4));
String sixth = String.valueOf(next.charAt(5));

if(massCalc_notAnyOther(new String[]{first,second,fourth,fifth,sixth},
new int[]{_g,_a,_i,_n,_g})){
SubstitutionCracker2.key[_z] = third.toLowerCase();
SubstitutionCracker2.hasZ=true;
System.err.println("SubstitutionCracker2.hasZ=true; via Scanner z_gazing");
System.err.println((Arrays.toString(SubstitutionCracker2.key)).replaceAll("null", "\u0000"));
System.err.println(SubstitutionCracker2.correctKey);

z_gazing.close();
break;
   }
  }
 }
if(!SubstitutionCracker2.hasZ){
z_gazing.close();
Scanner z_dozen = new Scanner(SubstitutionCracker2.cipher);
while(z_dozen.hasNext()){
String next = z_dozen.next();
if (next.length()==5){
String first = String.valueOf(next.charAt(0));
String second = String.valueOf(next.charAt(1));
String third = String.valueOf(next.charAt(2));
String fourth = String.valueOf(next.charAt(3));
String fifth = String.valueOf(next.charAt(4));

if(massCalc_notAnyOther(new String[]{first,second,fourth,fifth},
new int[]{_d,_o,_e,_n})){
SubstitutionCracker2.key[_z] = third.toLowerCase();
SubstitutionCracker2.hasZ=true;
System.err.println("SubstitutionCracker2.hasZ=true; via Scanner z_dozen");
System.err.println((Arrays.toString(SubstitutionCracker2.key)).replaceAll("null", "\u0000"));
System.err.println(SubstitutionCracker2.correctKey);

z_dozen.close();
break;
   }
  }
 }
if(!SubstitutionCracker2.hasZ){
z_dozen.close();
Scanner z_zeituni = new Scanner(SubstitutionCracker2.cipher);
while(z_zeituni.hasNext()){
String next = z_zeituni.next();
if (next.length()==7){
String first = String.valueOf(next.charAt(0));
String second = String.valueOf(next.charAt(1));
String third = String.valueOf(next.charAt(2));
String fourth = String.valueOf(next.charAt(3));
String fifth = String.valueOf(next.charAt(4));
String sixth = String.valueOf(next.charAt(5));
String seventh = String.valueOf(next.charAt(6));

if(massCalc_notAnyOther(new String[]{second,third,fourth,fifth,sixth,seventh},
new int[]{_e,_i,_t,_u,_n,_i})){
SubstitutionCracker2.key[_z] = first.toLowerCase();
SubstitutionCracker2.hasZ=true;
System.err.println("SubstitutionCracker2.hasZ=true; via Scanner z_zeituni");
System.err.println((Arrays.toString(SubstitutionCracker2.key)).replaceAll("null", "\u0000"));
System.err.println(SubstitutionCracker2.correctKey);

z_zeituni.close();
break;
   }
  }
 }
if(!SubstitutionCracker2.hasZ){
z_zeituni.close();
Scanner z_eleazar = new Scanner(SubstitutionCracker2.cipher);
while(z_eleazar.hasNext()){
String next = z_eleazar.next();
if (next.length()==7){
String first = String.valueOf(next.charAt(0));
String second = String.valueOf(next.charAt(1));
String third = String.valueOf(next.charAt(2));
String fourth = String.valueOf(next.charAt(3));
String fifth = String.valueOf(next.charAt(4));
String sixth = String.valueOf(next.charAt(5));
String seventh = String.valueOf(next.charAt(6));

if(massCalc_notAnyOther(new String[]{first,second,third,fourth,sixth,seventh},
new int[]{_e,_l,_e,_a,_a,_r})){
SubstitutionCracker2.key[_z] = fifth.toLowerCase();
SubstitutionCracker2.hasZ=true;
System.err.println("SubstitutionCracker2.hasZ=true; via Scanner z_eleazar");
System.err.println((Arrays.toString(SubstitutionCracker2.key)).replaceAll("null", "\u0000"));
System.err.println(SubstitutionCracker2.correctKey);

z_eleazar.close();
break;
   }
  }
 }
if(!SubstitutionCracker2.hasZ){
z_eleazar.close();
Scanner z_recognizing = new Scanner(SubstitutionCracker2.cipher);
while(z_recognizing.hasNext()){
String next = z_recognizing.next();
if (next.length()==11){
String first = String.valueOf(next.charAt(0));
String second = String.valueOf(next.charAt(1));
String third = String.valueOf(next.charAt(2));
String fourth = String.valueOf(next.charAt(3));
String fifth = String.valueOf(next.charAt(4));
String sixth = String.valueOf(next.charAt(5));
String seventh = String.valueOf(next.charAt(6));
String eighth = String.valueOf(next.charAt(7));
String ninth = String.valueOf(next.charAt(8));
String tenth = String.valueOf(next.charAt(9));
String eleventh = String.valueOf(next.charAt(10));

if(massCalc_notAnyOther(new String[]{first,second,third,fourth,fifth,sixth,seventh,ninth,tenth,eleventh},
new int[]{_r,_e,_c,_o,_g,_n,_i,_i,_n,_g})){
SubstitutionCracker2.key[_z] = eighth.toLowerCase();
SubstitutionCracker2.hasZ=true;
System.err.println("SubstitutionCracker2.hasZ=true; via Scanner z_recognizing");
System.err.println((Arrays.toString(SubstitutionCracker2.key)).replaceAll("null", "\u0000"));
System.err.println(SubstitutionCracker2.correctKey);

z_recognizing.close();
break;
   }
  }
 }
if(!SubstitutionCracker2.hasZ){
z_recognizing.close();
Scanner z_organized = new Scanner(SubstitutionCracker2.cipher);
while(z_organized.hasNext()){
String next = z_organized.next();
if (next.length()==9){
String first = String.valueOf(next.charAt(0));
String second = String.valueOf(next.charAt(1));
String third = String.valueOf(next.charAt(2));
String fourth = String.valueOf(next.charAt(3));
String fifth = String.valueOf(next.charAt(4));
String sixth = String.valueOf(next.charAt(5));
String seventh = String.valueOf(next.charAt(6));
String eighth = String.valueOf(next.charAt(7));
String ninth = String.valueOf(next.charAt(8));

if(massCalc_notAnyOther(new String[]{first,second,third,fourth,fifth,sixth,eighth,ninth},
new int[]{_o,_r,_g,_a,_n,_i,_e,_d})){
SubstitutionCracker2.key[_z] = seventh.toLowerCase();
SubstitutionCracker2.hasZ=true;
System.err.println("SubstitutionCracker2.hasZ=true; via Scanner z_organized");
System.err.println((Arrays.toString(SubstitutionCracker2.key)).replaceAll("null", "\u0000"));
System.err.println(SubstitutionCracker2.correctKey);

z_organized.close();
break;
   }
  }
 }
if(!SubstitutionCracker2.hasZ){
z_organized.close();
Scanner z_fertilizer = new Scanner(SubstitutionCracker2.cipher);
while(z_fertilizer.hasNext()){
String next = z_fertilizer.next();
if (next.length()==10){
String first = String.valueOf(next.charAt(0));
String second = String.valueOf(next.charAt(1));
String third = String.valueOf(next.charAt(2));
String fourth = String.valueOf(next.charAt(3));
String fifth = String.valueOf(next.charAt(4));
String sixth = String.valueOf(next.charAt(5));
String seventh = String.valueOf(next.charAt(6));
String eighth = String.valueOf(next.charAt(7));
String ninth = String.valueOf(next.charAt(8));
String tenth = String.valueOf(next.charAt(9));

if(massCalc_notAnyOther(new String[]{first,second,third,fourth,fifth,sixth,seventh,ninth,tenth},
new int[]{_f,_e,_r,_t,_i,_l,_i,_e,_r})){
SubstitutionCracker2.key[_z] = eighth.toLowerCase();
SubstitutionCracker2.hasZ=true;
System.err.println("SubstitutionCracker2.hasZ=true; via Scanner z_fertilizer");
System.err.println((Arrays.toString(SubstitutionCracker2.key)).replaceAll("null", "\u0000"));
System.err.println(SubstitutionCracker2.correctKey);

z_fertilizer.close();
break;
   }
  }
 }
if(!SubstitutionCracker2.hasZ){
z_fertilizer.close();
Scanner z_noncitizen = new Scanner(SubstitutionCracker2.cipher);
while(z_noncitizen.hasNext()){
String next = z_noncitizen.next();
if (next.length()==10){
String first = String.valueOf(next.charAt(0));
String second = String.valueOf(next.charAt(1));
String third = String.valueOf(next.charAt(2));
String fourth = String.valueOf(next.charAt(3));
String fifth = String.valueOf(next.charAt(4));
String sixth = String.valueOf(next.charAt(5));
String seventh = String.valueOf(next.charAt(6));
String eighth = String.valueOf(next.charAt(7));
String ninth = String.valueOf(next.charAt(8));
String tenth = String.valueOf(next.charAt(9));

if(massCalc_notAnyOther(new String[]{first,second,third,fourth,fifth,sixth,seventh,ninth,tenth},
new int[]{_n,_o,_n,_c,_i,_t,_i,_e,_n})){
SubstitutionCracker2.key[_z] = eighth.toLowerCase();
SubstitutionCracker2.hasZ=true;
System.err.println("SubstitutionCracker2.hasZ=true; via Scanner z_noncitizen");
System.err.println((Arrays.toString(SubstitutionCracker2.key)).replaceAll("null", "\u0000"));
System.err.println(SubstitutionCracker2.correctKey);

z_noncitizen.close();
break;
   }
  }
 }
if(!SubstitutionCracker2.hasZ){
z_noncitizen.close();
Scanner z_organization = new Scanner(SubstitutionCracker2.cipher);
while(z_organization.hasNext()){
String next = z_organization.next();
if (next.length()==12){
String first = String.valueOf(next.charAt(0));
String second = String.valueOf(next.charAt(1));
String third = String.valueOf(next.charAt(2));
String fourth = String.valueOf(next.charAt(3));
String fifth = String.valueOf(next.charAt(4));
String sixth = String.valueOf(next.charAt(5));
String seventh = String.valueOf(next.charAt(6));
String eighth = String.valueOf(next.charAt(7));
String ninth = String.valueOf(next.charAt(8));
String tenth = String.valueOf(next.charAt(9));
String eleventh = String.valueOf(next.charAt(10));
String twelfth = String.valueOf(next.charAt(11));

if(massCalc_notAnyOther(new String[]{first,second,third,fourth,fifth,sixth,eighth,ninth,tenth,eleventh,twelfth},
new int[]{_o,_r,_g,_a,_n,_i,_a,_t,_i,_o,_n})){
SubstitutionCracker2.key[_z] = seventh.toLowerCase();
SubstitutionCracker2.hasZ=true;
System.err.println("SubstitutionCracker2.hasZ=true; via Scanner z_organization");
System.err.println((Arrays.toString(SubstitutionCracker2.key)).replaceAll("null", "\u0000"));
System.err.println(SubstitutionCracker2.correctKey);

z_organization.close();
break;
   }
  }
 }
if(!SubstitutionCracker2.hasZ){
z_organization.close();
Scanner z_seize = new Scanner(SubstitutionCracker2.cipher);
while(z_seize.hasNext()){
String next = z_seize.next();
if (next.length()==5){
String first = String.valueOf(next.charAt(0));
String second = String.valueOf(next.charAt(1));
String third = String.valueOf(next.charAt(2));
String fourth = String.valueOf(next.charAt(3));
String fifth = String.valueOf(next.charAt(4));

if(massCalc_notAnyOther(new String[]{first,second,third,fifth},
new int[]{_s,_e,_i,_e})){
SubstitutionCracker2.key[_z] = fourth.toLowerCase();
SubstitutionCracker2.hasZ=true;
System.err.println("SubstitutionCracker2.hasZ=true; via Scanner z_seize");
System.err.println((Arrays.toString(SubstitutionCracker2.key)).replaceAll("null", "\u0000"));
System.err.println(SubstitutionCracker2.correctKey);

z_seize.close();
break;
   }
  }
 }
if(!SubstitutionCracker2.hasZ){
z_seize.close();
Scanner z_zeal = new Scanner(SubstitutionCracker2.cipher);
while(z_zeal.hasNext()){
String next = z_zeal.next();
if (next.length()==4){
String first = String.valueOf(next.charAt(0));
String second = String.valueOf(next.charAt(1));
String third = String.valueOf(next.charAt(2));
String fourth = String.valueOf(next.charAt(3));

if(massCalc_notAnyOther(new String[]{second,third,fourth},
new int[]{_e,_a,_l})){
SubstitutionCracker2.key[_z] = first.toLowerCase();
SubstitutionCracker2.hasZ=true;
System.err.println("SubstitutionCracker2.hasZ=true; via Scanner z_zeal");
System.err.println((Arrays.toString(SubstitutionCracker2.key)).replaceAll("null", "\u0000"));
System.err.println(SubstitutionCracker2.correctKey);

z_zeal.close();
break;
   }
  }
 }
if(!SubstitutionCracker2.hasZ){
z_zeal.close();
Scanner z_organize = new Scanner(SubstitutionCracker2.cipher);
while(z_organize.hasNext()){
String next = z_organize.next();
if (next.length()==8){
String first = String.valueOf(next.charAt(0));
String second = String.valueOf(next.charAt(1));
String third = String.valueOf(next.charAt(2));
String fourth = String.valueOf(next.charAt(3));
String fifth = String.valueOf(next.charAt(4));
String sixth = String.valueOf(next.charAt(5));
String seventh = String.valueOf(next.charAt(6));
String eighth = String.valueOf(next.charAt(7));

if(massCalc_notAnyOther(new String[]{first,second,third,fourth,fifth,sixth,eighth},
new int[]{_o,_r,_g,_a,_n,_i,_e})){
SubstitutionCracker2.key[_z] = seventh.toLowerCase();
SubstitutionCracker2.hasZ=true;
System.err.println("SubstitutionCracker2.hasZ=true; via Scanner z_organize");
System.err.println((Arrays.toString(SubstitutionCracker2.key)).replaceAll("null", "\u0000"));
System.err.println(SubstitutionCracker2.correctKey);

z_organize.close();
break;
   }
  }
 }
if(!SubstitutionCracker2.hasZ){
z_organize.close();
Scanner z_baptized = new Scanner(SubstitutionCracker2.cipher);
while(z_baptized.hasNext()){
String next = z_baptized.next();
if (next.length()==8){
String first = String.valueOf(next.charAt(0));
String second = String.valueOf(next.charAt(1));
String third = String.valueOf(next.charAt(2));
String fourth = String.valueOf(next.charAt(3));
String fifth = String.valueOf(next.charAt(4));
String sixth = String.valueOf(next.charAt(5));
String seventh = String.valueOf(next.charAt(6));
String eighth = String.valueOf(next.charAt(7));

if(massCalc_notAnyOther(new String[]{first,second,third,fourth,fifth,seventh,eighth},
new int[]{_b,_a,_p,_t,_i,_e,_d})){
SubstitutionCracker2.key[_z] = sixth.toLowerCase();
SubstitutionCracker2.hasZ=true;
System.err.println("SubstitutionCracker2.hasZ=true; via Scanner z_baptized");
System.err.println((Arrays.toString(SubstitutionCracker2.key)).replaceAll("null", "\u0000"));
System.err.println(SubstitutionCracker2.correctKey);

z_baptized.close();
break;
   }
  }
 }
if(!SubstitutionCracker2.hasZ){
z_baptized.close();
Scanner z_realizing = new Scanner(SubstitutionCracker2.cipher);
while(z_realizing.hasNext()){
String next = z_realizing.next();
if (next.length()==9){
String first = String.valueOf(next.charAt(0));
String second = String.valueOf(next.charAt(1));
String third = String.valueOf(next.charAt(2));
String fourth = String.valueOf(next.charAt(3));
String fifth = String.valueOf(next.charAt(4));
String sixth = String.valueOf(next.charAt(5));
String seventh = String.valueOf(next.charAt(6));
String eighth = String.valueOf(next.charAt(7));
String ninth = String.valueOf(next.charAt(8));

if(massCalc_notAnyOther(new String[]{first,second,third,fourth,fifth,seventh,eighth,ninth},
new int[]{_r,_e,_a,_l,_i,_i,_n,_g})){
SubstitutionCracker2.key[_z] = sixth.toLowerCase();
SubstitutionCracker2.hasZ=true;
System.err.println("SubstitutionCracker2.hasZ=true; via Scanner z_realizing");
System.err.println((Arrays.toString(SubstitutionCracker2.key)).replaceAll("null", "\u0000"));
System.err.println(SubstitutionCracker2.correctKey);

z_realizing.close();
break;
   }
  }
 }
if(!SubstitutionCracker2.hasZ){
z_realizing.close();
Scanner z_seizing = new Scanner(SubstitutionCracker2.cipher);
while(z_seizing.hasNext()){
String next = z_seizing.next();
if (next.length()==7){
String first = String.valueOf(next.charAt(0));
String second = String.valueOf(next.charAt(1));
String third = String.valueOf(next.charAt(2));
String fourth = String.valueOf(next.charAt(3));
String fifth = String.valueOf(next.charAt(4));
String sixth = String.valueOf(next.charAt(5));
String seventh = String.valueOf(next.charAt(6));

if(massCalc_notAnyOther(new String[]{first,second,third,fifth,sixth,seventh},
new int[]{_s,_e,_i,_i,_n,_g})){
SubstitutionCracker2.key[_z] = fourth.toLowerCase();
SubstitutionCracker2.hasZ=true;
System.err.println("SubstitutionCracker2.hasZ=true; via Scanner z_seizing");
System.err.println((Arrays.toString(SubstitutionCracker2.key)).replaceAll("null", "\u0000"));
System.err.println(SubstitutionCracker2.correctKey);

z_seizing.close();
break;
   }
  }
 }
if(!SubstitutionCracker2.hasZ){
z_seizing.close();
Scanner z_authorized = new Scanner(SubstitutionCracker2.cipher);
while(z_authorized.hasNext()){
String next = z_authorized.next();
if (next.length()==10){
String first = String.valueOf(next.charAt(0));
String second = String.valueOf(next.charAt(1));
String third = String.valueOf(next.charAt(2));
String fourth = String.valueOf(next.charAt(3));
String fifth = String.valueOf(next.charAt(4));
String sixth = String.valueOf(next.charAt(5));
String seventh = String.valueOf(next.charAt(6));
String eighth = String.valueOf(next.charAt(7));
String ninth = String.valueOf(next.charAt(8));
String tenth = String.valueOf(next.charAt(9));

if(massCalc_notAnyOther(new String[]{first,second,third,fourth,fifth,sixth,seventh,ninth,tenth},
new int[]{_a,_u,_t,_h,_o,_r,_i,_e,_d})){
SubstitutionCracker2.key[_z] = eighth.toLowerCase();
SubstitutionCracker2.hasZ=true;
System.err.println("SubstitutionCracker2.hasZ=true; via Scanner z_authorized");
System.err.println((Arrays.toString(SubstitutionCracker2.key)).replaceAll("null", "\u0000"));
System.err.println(SubstitutionCracker2.correctKey);

z_authorized.close();
break;
   }
  }
 }
if(!SubstitutionCracker2.hasZ){
z_authorized.close();
Scanner z_amazing = new Scanner(SubstitutionCracker2.cipher);
while(z_amazing.hasNext()){
String next = z_amazing.next();
if (next.length()==7){
String first = String.valueOf(next.charAt(0));
String second = String.valueOf(next.charAt(1));
String third = String.valueOf(next.charAt(2));
String fourth = String.valueOf(next.charAt(3));
String fifth = String.valueOf(next.charAt(4));
String sixth = String.valueOf(next.charAt(5));
String seventh = String.valueOf(next.charAt(6));

if(massCalc_notAnyOther(new String[]{first,second,third,fifth,sixth,seventh},
new int[]{_a,_m,_a,_i,_n,_g})){
SubstitutionCracker2.key[_z] = fourth.toLowerCase();
SubstitutionCracker2.hasZ=true;
System.err.println("SubstitutionCracker2.hasZ=true; via Scanner z_amazing");
System.err.println((Arrays.toString(SubstitutionCracker2.key)).replaceAll("null", "\u0000"));
System.err.println(SubstitutionCracker2.correctKey);

z_amazing.close();
break;
   }
  }
 }
if(!SubstitutionCracker2.hasZ){
z_amazing.close();
Scanner z_kudzu = new Scanner(SubstitutionCracker2.cipher);
while(z_kudzu.hasNext()){
String next = z_kudzu.next();
if (next.length()==5){
String first = String.valueOf(next.charAt(0));
String second = String.valueOf(next.charAt(1));
String third = String.valueOf(next.charAt(2));
String fourth = String.valueOf(next.charAt(3));
String fifth = String.valueOf(next.charAt(4));

if(massCalc_notAnyOther(new String[]{first,second,third,fifth},
new int[]{_k,_u,_d,_u})){
SubstitutionCracker2.key[_z] = fourth.toLowerCase();
SubstitutionCracker2.hasZ=true;
System.err.println("SubstitutionCracker2.hasZ=true; via Scanner z_kudzu");
System.err.println((Arrays.toString(SubstitutionCracker2.key)).replaceAll("null", "\u0000"));
System.err.println(SubstitutionCracker2.correctKey);

z_kudzu.close();
break;
   }
  }
 }
if(!SubstitutionCracker2.hasZ){
z_kudzu.close();
Scanner z_citizen = new Scanner(SubstitutionCracker2.cipher);
while(z_citizen.hasNext()){
String next = z_citizen.next();
if (next.length()==7){
String first = String.valueOf(next.charAt(0));
String second = String.valueOf(next.charAt(1));
String third = String.valueOf(next.charAt(2));
String fourth = String.valueOf(next.charAt(3));
String fifth = String.valueOf(next.charAt(4));
String sixth = String.valueOf(next.charAt(5));
String seventh = String.valueOf(next.charAt(6));

if(massCalc_notAnyOther(new String[]{first,second,third,fourth,sixth,seventh},
new int[]{_c,_i,_t,_i,_e,_n})){
SubstitutionCracker2.key[_z] = fifth.toLowerCase();
SubstitutionCracker2.hasZ=true;
System.err.println("SubstitutionCracker2.hasZ=true; via Scanner z_citizen");
System.err.println((Arrays.toString(SubstitutionCracker2.key)).replaceAll("null", "\u0000"));
System.err.println(SubstitutionCracker2.correctKey);

z_citizen.close();
break;
   }
  }
 }
if(!SubstitutionCracker2.hasZ){
z_citizen.close();
Scanner z_gaze = new Scanner(SubstitutionCracker2.cipher);
while(z_gaze.hasNext()){
String next = z_gaze.next();
if (next.length()==4){
String first = String.valueOf(next.charAt(0));
String second = String.valueOf(next.charAt(1));
String third = String.valueOf(next.charAt(2));
String fourth = String.valueOf(next.charAt(3));

if(massCalc_notAnyOther(new String[]{first,second,fourth},
new int[]{_g,_a,_e})){
SubstitutionCracker2.key[_z] = third.toLowerCase();
SubstitutionCracker2.hasZ=true;
System.err.println("SubstitutionCracker2.hasZ=true; via Scanner z_gaze");
System.err.println((Arrays.toString(SubstitutionCracker2.key)).replaceAll("null", "\u0000"));
System.err.println(SubstitutionCracker2.correctKey);

z_gaze.close();
break;
   }
  }
 }
if(!SubstitutionCracker2.hasZ){
z_gaze.close();
Scanner z_azarias = new Scanner(SubstitutionCracker2.cipher);
while(z_azarias.hasNext()){
String next = z_azarias.next();
if (next.length()==7){
String first = String.valueOf(next.charAt(0));
String second = String.valueOf(next.charAt(1));
String third = String.valueOf(next.charAt(2));
String fourth = String.valueOf(next.charAt(3));
String fifth = String.valueOf(next.charAt(4));
String sixth = String.valueOf(next.charAt(5));
String seventh = String.valueOf(next.charAt(6));

if(massCalc_notAnyOther(new String[]{first,third,fourth,fifth,sixth,seventh},
new int[]{_a,_a,_r,_i,_a,_s})){
SubstitutionCracker2.key[_z] = second.toLowerCase();
SubstitutionCracker2.hasZ=true;
System.err.println("SubstitutionCracker2.hasZ=true; via Scanner z_azarias");
System.err.println((Arrays.toString(SubstitutionCracker2.key)).replaceAll("null", "\u0000"));
System.err.println(SubstitutionCracker2.correctKey);

z_azarias.close();
break;
   }
  }
 }
if(!SubstitutionCracker2.hasZ){
z_azarias.close();
Scanner z_mazlan = new Scanner(SubstitutionCracker2.cipher);
while(z_mazlan.hasNext()){
String next = z_mazlan.next();
if (next.length()==6){
String first = String.valueOf(next.charAt(0));
String second = String.valueOf(next.charAt(1));
String third = String.valueOf(next.charAt(2));
String fourth = String.valueOf(next.charAt(3));
String fifth = String.valueOf(next.charAt(4));
String sixth = String.valueOf(next.charAt(5));

if(massCalc_notAnyOther(new String[]{first,second,fourth,fifth,sixth},
new int[]{_m,_a,_l,_a,_n})){
SubstitutionCracker2.key[_z] = third.toLowerCase();
SubstitutionCracker2.hasZ=true;
System.err.println("SubstitutionCracker2.hasZ=true; via Scanner z_mazlan");
System.err.println((Arrays.toString(SubstitutionCracker2.key)).replaceAll("null", "\u0000"));
System.err.println(SubstitutionCracker2.correctKey);

z_mazlan.close();
break;
   }
  }
 }
if(!SubstitutionCracker2.hasZ){
z_mazlan.close();
Scanner z_prize = new Scanner(SubstitutionCracker2.cipher);
while(z_prize.hasNext()){
String next = z_prize.next();
if (next.length()==5){
String first = String.valueOf(next.charAt(0));
String second = String.valueOf(next.charAt(1));
String third = String.valueOf(next.charAt(2));
String fourth = String.valueOf(next.charAt(3));
String fifth = String.valueOf(next.charAt(4));

if(massCalc_notAnyOther(new String[]{first,second,third,fifth},
new int[]{_p,_r,_i,_e})){
SubstitutionCracker2.key[_z] = fourth.toLowerCase();
SubstitutionCracker2.hasZ=true;
System.err.println("SubstitutionCracker2.hasZ=true; via Scanner z_prize");
System.err.println((Arrays.toString(SubstitutionCracker2.key)).replaceAll("null", "\u0000"));
System.err.println(SubstitutionCracker2.correctKey);

z_prize.close();
break;
   }
  }
 }
if(!SubstitutionCracker2.hasZ){
z_prize.close();
Scanner z_achaz = new Scanner(SubstitutionCracker2.cipher);
while(z_achaz.hasNext()){
String next = z_achaz.next();
if (next.length()==5){
String first = String.valueOf(next.charAt(0));
String second = String.valueOf(next.charAt(1));
String third = String.valueOf(next.charAt(2));
String fourth = String.valueOf(next.charAt(3));
String fifth = String.valueOf(next.charAt(4));

if(massCalc_notAnyOther(new String[]{first,second,third,fourth},
new int[]{_a,_c,_h,_a})){
SubstitutionCracker2.key[_z] = fifth.toLowerCase();
SubstitutionCracker2.hasZ=true;
System.err.println("SubstitutionCracker2.hasZ=true; via Scanner z_achaz");
System.err.println((Arrays.toString(SubstitutionCracker2.key)).replaceAll("null", "\u0000"));
System.err.println(SubstitutionCracker2.correctKey);

z_achaz.close();
break;
   }
  }
 }
if(!SubstitutionCracker2.hasZ){
z_achaz.close();
Scanner z_zealous = new Scanner(SubstitutionCracker2.cipher);
while(z_zealous.hasNext()){
String next = z_zealous.next();
if (next.length()==7){
String first = String.valueOf(next.charAt(0));
String second = String.valueOf(next.charAt(1));
String third = String.valueOf(next.charAt(2));
String fourth = String.valueOf(next.charAt(3));
String fifth = String.valueOf(next.charAt(4));
String sixth = String.valueOf(next.charAt(5));
String seventh = String.valueOf(next.charAt(6));

if(massCalc_notAnyOther(new String[]{second,third,fourth,fifth,sixth,seventh},
new int[]{_e,_a,_l,_o,_u,_s})){
SubstitutionCracker2.key[_z] = first.toLowerCase();
SubstitutionCracker2.hasZ=true;
System.err.println("SubstitutionCracker2.hasZ=true; via Scanner z_zealous");
System.err.println((Arrays.toString(SubstitutionCracker2.key)).replaceAll("null", "\u0000"));
System.err.println(SubstitutionCracker2.correctKey);

z_zealous.close();
break;
   }
  }
 }
if(!SubstitutionCracker2.hasZ){
z_zealous.close();
Scanner z_noncitizens = new Scanner(SubstitutionCracker2.cipher);
while(z_noncitizens.hasNext()){
String next = z_noncitizens.next();
if (next.length()==11){
String first = String.valueOf(next.charAt(0));
String second = String.valueOf(next.charAt(1));
String third = String.valueOf(next.charAt(2));
String fourth = String.valueOf(next.charAt(3));
String fifth = String.valueOf(next.charAt(4));
String sixth = String.valueOf(next.charAt(5));
String seventh = String.valueOf(next.charAt(6));
String eighth = String.valueOf(next.charAt(7));
String ninth = String.valueOf(next.charAt(8));
String tenth = String.valueOf(next.charAt(9));
String eleventh = String.valueOf(next.charAt(10));

if(massCalc_notAnyOther(new String[]{first,second,third,fourth,fifth,sixth,seventh,ninth,tenth,eleventh},
new int[]{_n,_o,_n,_c,_i,_t,_i,_e,_n,_s})){
SubstitutionCracker2.key[_z] = eighth.toLowerCase();
SubstitutionCracker2.hasZ=true;
System.err.println("SubstitutionCracker2.hasZ=true; via Scanner z_noncitizens");
System.err.println((Arrays.toString(SubstitutionCracker2.key)).replaceAll("null", "\u0000"));
System.err.println(SubstitutionCracker2.correctKey);

z_noncitizens.close();
break;
   }
  }
 }
if(!SubstitutionCracker2.hasZ){
z_noncitizens.close();
Scanner z_organizations = new Scanner(SubstitutionCracker2.cipher);
while(z_organizations.hasNext()){
String next = z_organizations.next();
if (next.length()==13){
String first = String.valueOf(next.charAt(0));
String second = String.valueOf(next.charAt(1));
String third = String.valueOf(next.charAt(2));
String fourth = String.valueOf(next.charAt(3));
String fifth = String.valueOf(next.charAt(4));
String sixth = String.valueOf(next.charAt(5));
String seventh = String.valueOf(next.charAt(6));
String eighth = String.valueOf(next.charAt(7));
String ninth = String.valueOf(next.charAt(8));
String tenth = String.valueOf(next.charAt(9));
String eleventh = String.valueOf(next.charAt(10));
String twelfth = String.valueOf(next.charAt(11));
String thirteenth = String.valueOf(next.charAt(12));

if(massCalc_notAnyOther(new String[]{first,second,third,fourth,fifth,sixth,eighth,ninth,tenth,eleventh,twelfth,thirteenth},
new int[]{_o,_r,_g,_a,_n,_i,_a,_t,_i,_o,_n,_s})){
SubstitutionCracker2.key[_z] = seventh.toLowerCase();
SubstitutionCracker2.hasZ=true;
System.err.println("SubstitutionCracker2.hasZ=true; via Scanner z_organizations");
System.err.println((Arrays.toString(SubstitutionCracker2.key)).replaceAll("null", "\u0000"));
System.err.println(SubstitutionCracker2.correctKey);

z_organizations.close();
break;
   }
  }
 }
if(!SubstitutionCracker2.hasZ){
z_organizations.close();
Scanner z_kezia = new Scanner(SubstitutionCracker2.cipher);
while(z_kezia.hasNext()){
String next = z_kezia.next();
if (next.length()==5){
String first = String.valueOf(next.charAt(0));
String second = String.valueOf(next.charAt(1));
String third = String.valueOf(next.charAt(2));
String fourth = String.valueOf(next.charAt(3));
String fifth = String.valueOf(next.charAt(4));

if(massCalc_notAnyOther(new String[]{first,second,fourth,fifth},
new int[]{_k,_e,_i,_a})){
SubstitutionCracker2.key[_z] = third.toLowerCase();
SubstitutionCracker2.hasZ=true;
System.err.println("SubstitutionCracker2.hasZ=true; via Scanner z_kezia");
System.err.println((Arrays.toString(SubstitutionCracker2.key)).replaceAll("null", "\u0000"));
System.err.println(SubstitutionCracker2.correctKey);

z_kezia.close();
break;
   }
  }
 }
if(!SubstitutionCracker2.hasZ){
z_kezia.close();
Scanner z_zacharias = new Scanner(SubstitutionCracker2.cipher);
while(z_zacharias.hasNext()){
String next = z_zacharias.next();
if (next.length()==9){
String first = String.valueOf(next.charAt(0));
String second = String.valueOf(next.charAt(1));
String third = String.valueOf(next.charAt(2));
String fourth = String.valueOf(next.charAt(3));
String fifth = String.valueOf(next.charAt(4));
String sixth = String.valueOf(next.charAt(5));
String seventh = String.valueOf(next.charAt(6));
String eighth = String.valueOf(next.charAt(7));
String ninth = String.valueOf(next.charAt(8));

if(massCalc_notAnyOther(new String[]{second,third,fourth,fifth,sixth,seventh,eighth,ninth},
new int[]{_a,_c,_h,_a,_r,_i,_a,_s})){
SubstitutionCracker2.key[_z] = first.toLowerCase();
SubstitutionCracker2.hasZ=true;
System.err.println("SubstitutionCracker2.hasZ=true; via Scanner z_zacharias");
System.err.println((Arrays.toString(SubstitutionCracker2.key)).replaceAll("null", "\u0000"));
System.err.println(SubstitutionCracker2.correctKey);

z_zacharias.close();
break;
   }
  }
 }
if(!SubstitutionCracker2.hasZ){
z_zacharias.close();
Scanner z_amazed = new Scanner(SubstitutionCracker2.cipher);
while(z_amazed.hasNext()){
String next = z_amazed.next();
if (next.length()==6){
String first = String.valueOf(next.charAt(0));
String second = String.valueOf(next.charAt(1));
String third = String.valueOf(next.charAt(2));
String fourth = String.valueOf(next.charAt(3));
String fifth = String.valueOf(next.charAt(4));
String sixth = String.valueOf(next.charAt(5));

if(massCalc_notAnyOther(new String[]{first,second,third,fifth,sixth},
new int[]{_a,_m,_a,_e,_d})){
SubstitutionCracker2.key[_z] = fourth.toLowerCase();
SubstitutionCracker2.hasZ=true;
System.err.println("SubstitutionCracker2.hasZ=true; via Scanner z_amazed");
System.err.println((Arrays.toString(SubstitutionCracker2.key)).replaceAll("null", "\u0000"));
System.err.println(SubstitutionCracker2.correctKey);

z_amazed.close();
break;
   }
  }
 }
if(!SubstitutionCracker2.hasZ){
z_amazed.close();
Scanner z_austerlitz = new Scanner(SubstitutionCracker2.cipher);
while(z_austerlitz.hasNext()){
String next = z_austerlitz.next();
if (next.length()==10){
String first = String.valueOf(next.charAt(0));
String second = String.valueOf(next.charAt(1));
String third = String.valueOf(next.charAt(2));
String fourth = String.valueOf(next.charAt(3));
String fifth = String.valueOf(next.charAt(4));
String sixth = String.valueOf(next.charAt(5));
String seventh = String.valueOf(next.charAt(6));
String eighth = String.valueOf(next.charAt(7));
String ninth = String.valueOf(next.charAt(8));
String tenth = String.valueOf(next.charAt(9));

if(massCalc_notAnyOther(new String[]{first,second,third,fourth,fifth,sixth,seventh,eighth,ninth},
new int[]{_a,_u,_s,_t,_e,_r,_l,_i,_t})){
SubstitutionCracker2.key[_z] = tenth.toLowerCase();
SubstitutionCracker2.hasZ=true;
System.err.println("SubstitutionCracker2.hasZ=true; via Scanner z_austerlitz");
System.err.println((Arrays.toString(SubstitutionCracker2.key)).replaceAll("null", "\u0000"));
System.err.println(SubstitutionCracker2.correctKey);

z_austerlitz.close();
break;
   }
  }
 }
if(!SubstitutionCracker2.hasZ){
z_austerlitz.close();
Scanner z_brazen = new Scanner(SubstitutionCracker2.cipher);
while(z_brazen.hasNext()){
String next = z_brazen.next();
if (next.length()==6){
String first = String.valueOf(next.charAt(0));
String second = String.valueOf(next.charAt(1));
String third = String.valueOf(next.charAt(2));
String fourth = String.valueOf(next.charAt(3));
String fifth = String.valueOf(next.charAt(4));
String sixth = String.valueOf(next.charAt(5));

if(massCalc_notAnyOther(new String[]{first,second,third,fifth,sixth},
new int[]{_b,_r,_a,_e,_n})){
SubstitutionCracker2.key[_z] = fourth.toLowerCase();
SubstitutionCracker2.hasZ=true;
System.err.println("SubstitutionCracker2.hasZ=true; via Scanner z_brazen");
System.err.println((Arrays.toString(SubstitutionCracker2.key)).replaceAll("null", "\u0000"));
System.err.println(SubstitutionCracker2.correctKey);

z_brazen.close();
break;
   }
  }
 }
if(!SubstitutionCracker2.hasZ){
z_brazen.close();
Scanner z_crazy = new Scanner(SubstitutionCracker2.cipher);
while(z_crazy.hasNext()){
String next = z_crazy.next();
if (next.length()==5){
String first = String.valueOf(next.charAt(0));
String second = String.valueOf(next.charAt(1));
String third = String.valueOf(next.charAt(2));
String fourth = String.valueOf(next.charAt(3));
String fifth = String.valueOf(next.charAt(4));

if(massCalc_notAnyOther(new String[]{first,second,third,fifth},
new int[]{_c,_r,_a,_y})){
SubstitutionCracker2.key[_z] = fourth.toLowerCase();
SubstitutionCracker2.hasZ=true;
System.err.println("SubstitutionCracker2.hasZ=true; via Scanner z_crazy");
System.err.println((Arrays.toString(SubstitutionCracker2.key)).replaceAll("null", "\u0000"));
System.err.println(SubstitutionCracker2.correctKey);

z_crazy.close();
break;
   }
  }
 }
if(!SubstitutionCracker2.hasZ){
z_crazy.close();
Scanner z_fertilization = new Scanner(SubstitutionCracker2.cipher);
while(z_fertilization.hasNext()){
String next = z_fertilization.next();
if (next.length()==13){
String first = String.valueOf(next.charAt(0));
String second = String.valueOf(next.charAt(1));
String third = String.valueOf(next.charAt(2));
String fourth = String.valueOf(next.charAt(3));
String fifth = String.valueOf(next.charAt(4));
String sixth = String.valueOf(next.charAt(5));
String seventh = String.valueOf(next.charAt(6));
String eighth = String.valueOf(next.charAt(7));
String ninth = String.valueOf(next.charAt(8));
String tenth = String.valueOf(next.charAt(9));
String eleventh = String.valueOf(next.charAt(10));
String twelfth = String.valueOf(next.charAt(11));
String thirteenth = String.valueOf(next.charAt(12));

if(massCalc_notAnyOther(new String[]{first,second,third,fourth,fifth,sixth,seventh,ninth,tenth,eleventh,twelfth,thirteenth},
new int[]{_f,_e,_r,_t,_i,_l,_i,_a,_t,_i,_o,_n})){
SubstitutionCracker2.key[_z] = eighth.toLowerCase();
SubstitutionCracker2.hasZ=true;
System.err.println("SubstitutionCracker2.hasZ=true; via Scanner z_fertilization");
System.err.println((Arrays.toString(SubstitutionCracker2.key)).replaceAll("null", "\u0000"));
System.err.println(SubstitutionCracker2.correctKey);

z_fertilization.close();
break;
   }
  }
 }
if(!SubstitutionCracker2.hasZ){
z_fertilization.close();
Scanner z_ozias = new Scanner(SubstitutionCracker2.cipher);
while(z_ozias.hasNext()){
String next = z_ozias.next();
if (next.length()==5){
String first = String.valueOf(next.charAt(0));
String second = String.valueOf(next.charAt(1));
String third = String.valueOf(next.charAt(2));
String fourth = String.valueOf(next.charAt(3));
String fifth = String.valueOf(next.charAt(4));

if(massCalc_notAnyOther(new String[]{first,third,fourth,fifth},
new int[]{_o,_i,_a,_s})){
SubstitutionCracker2.key[_z] = second.toLowerCase();
SubstitutionCracker2.hasZ=true;
System.err.println("SubstitutionCracker2.hasZ=true; via Scanner z_ozias");
System.err.println((Arrays.toString(SubstitutionCracker2.key)).replaceAll("null", "\u0000"));
System.err.println(SubstitutionCracker2.correctKey);

z_ozias.close();
break;
   }
  }
 }
if(!SubstitutionCracker2.hasZ){
z_ozias.close();
Scanner z_organizing = new Scanner(SubstitutionCracker2.cipher);
while(z_organizing.hasNext()){
String next = z_organizing.next();
if (next.length()==10){
String first = String.valueOf(next.charAt(0));
String second = String.valueOf(next.charAt(1));
String third = String.valueOf(next.charAt(2));
String fourth = String.valueOf(next.charAt(3));
String fifth = String.valueOf(next.charAt(4));
String sixth = String.valueOf(next.charAt(5));
String seventh = String.valueOf(next.charAt(6));
String eighth = String.valueOf(next.charAt(7));
String ninth = String.valueOf(next.charAt(8));
String tenth = String.valueOf(next.charAt(9));

if(massCalc_notAnyOther(new String[]{first,second,third,fourth,fifth,sixth,eighth,ninth,tenth},
new int[]{_o,_r,_g,_a,_n,_i,_i,_n,_g})){
SubstitutionCracker2.key[_z] = seventh.toLowerCase();
SubstitutionCracker2.hasZ=true;
System.err.println("SubstitutionCracker2.hasZ=true; via Scanner z_organizing");
System.err.println((Arrays.toString(SubstitutionCracker2.key)).replaceAll("null", "\u0000"));
System.err.println(SubstitutionCracker2.correctKey);

z_organizing.close();
break;
   }
  }
 }
if(!SubstitutionCracker2.hasZ){
z_organizing.close();
Scanner z_globalization = new Scanner(SubstitutionCracker2.cipher);
while(z_globalization.hasNext()){
String next = z_globalization.next();
if (next.length()==13){
String first = String.valueOf(next.charAt(0));
String second = String.valueOf(next.charAt(1));
String third = String.valueOf(next.charAt(2));
String fourth = String.valueOf(next.charAt(3));
String fifth = String.valueOf(next.charAt(4));
String sixth = String.valueOf(next.charAt(5));
String seventh = String.valueOf(next.charAt(6));
String eighth = String.valueOf(next.charAt(7));
String ninth = String.valueOf(next.charAt(8));
String tenth = String.valueOf(next.charAt(9));
String eleventh = String.valueOf(next.charAt(10));
String twelfth = String.valueOf(next.charAt(11));
String thirteenth = String.valueOf(next.charAt(12));

if(massCalc_notAnyOther(new String[]{first,second,third,fourth,fifth,sixth,seventh,ninth,tenth,eleventh,twelfth,thirteenth},
new int[]{_g,_l,_o,_b,_a,_l,_i,_a,_t,_i,_o,_n})){
SubstitutionCracker2.key[_z] = eighth.toLowerCase();
SubstitutionCracker2.hasZ=true;
System.err.println("SubstitutionCracker2.hasZ=true; via Scanner z_globalization");
System.err.println((Arrays.toString(SubstitutionCracker2.key)).replaceAll("null", "\u0000"));
System.err.println(SubstitutionCracker2.correctKey);

z_globalization.close();
break;
   }
  }
 }
if(!SubstitutionCracker2.hasZ){
z_globalization.close();
Scanner z_borzois = new Scanner(SubstitutionCracker2.cipher);
while(z_borzois.hasNext()){
String next = z_borzois.next();
if (next.length()==7){
String first = String.valueOf(next.charAt(0));
String second = String.valueOf(next.charAt(1));
String third = String.valueOf(next.charAt(2));
String fourth = String.valueOf(next.charAt(3));
String fifth = String.valueOf(next.charAt(4));
String sixth = String.valueOf(next.charAt(5));
String seventh = String.valueOf(next.charAt(6));

if(massCalc_notAnyOther(new String[]{first,second,third,fifth,sixth,seventh},
new int[]{_b,_o,_r,_o,_i,_s})){
SubstitutionCracker2.key[_z] = fourth.toLowerCase();
SubstitutionCracker2.hasZ=true;
System.err.println("SubstitutionCracker2.hasZ=true; via Scanner z_borzois");
System.err.println((Arrays.toString(SubstitutionCracker2.key)).replaceAll("null", "\u0000"));
System.err.println(SubstitutionCracker2.correctKey);

z_borzois.close();
break;
   }
  }
 }
if(!SubstitutionCracker2.hasZ){
z_borzois.close();
Scanner z_organizer = new Scanner(SubstitutionCracker2.cipher);
while(z_organizer.hasNext()){
String next = z_organizer.next();
if (next.length()==9){
String first = String.valueOf(next.charAt(0));
String second = String.valueOf(next.charAt(1));
String third = String.valueOf(next.charAt(2));
String fourth = String.valueOf(next.charAt(3));
String fifth = String.valueOf(next.charAt(4));
String sixth = String.valueOf(next.charAt(5));
String seventh = String.valueOf(next.charAt(6));
String eighth = String.valueOf(next.charAt(7));
String ninth = String.valueOf(next.charAt(8));

if(massCalc_notAnyOther(new String[]{first,second,third,fourth,fifth,sixth,eighth,ninth},
new int[]{_o,_r,_g,_a,_n,_i,_e,_r})){
SubstitutionCracker2.key[_z] = seventh.toLowerCase();
SubstitutionCracker2.hasZ=true;
System.err.println("SubstitutionCracker2.hasZ=true; via Scanner z_organizer");
System.err.println((Arrays.toString(SubstitutionCracker2.key)).replaceAll("null", "\u0000"));
System.err.println(SubstitutionCracker2.correctKey);

z_organizer.close();
break;
   }
  }
 }
if(!SubstitutionCracker2.hasZ){
z_organizer.close();
Scanner z_frozen = new Scanner(SubstitutionCracker2.cipher);
while(z_frozen.hasNext()){
String next = z_frozen.next();
if (next.length()==6){
String first = String.valueOf(next.charAt(0));
String second = String.valueOf(next.charAt(1));
String third = String.valueOf(next.charAt(2));
String fourth = String.valueOf(next.charAt(3));
String fifth = String.valueOf(next.charAt(4));
String sixth = String.valueOf(next.charAt(5));

if(massCalc_notAnyOther(new String[]{first,second,third,fifth,sixth},
new int[]{_f,_r,_o,_e,_n})){
SubstitutionCracker2.key[_z] = fourth.toLowerCase();
SubstitutionCracker2.hasZ=true;
System.err.println("SubstitutionCracker2.hasZ=true; via Scanner z_frozen");
System.err.println((Arrays.toString(SubstitutionCracker2.key)).replaceAll("null", "\u0000"));
System.err.println(SubstitutionCracker2.correctKey);

z_frozen.close();
break;
   }
  }
 }
if(!SubstitutionCracker2.hasZ){
z_frozen.close();
Scanner z_sterilize = new Scanner(SubstitutionCracker2.cipher);
while(z_sterilize.hasNext()){
String next = z_sterilize.next();
if (next.length()==9){
String first = String.valueOf(next.charAt(0));
String second = String.valueOf(next.charAt(1));
String third = String.valueOf(next.charAt(2));
String fourth = String.valueOf(next.charAt(3));
String fifth = String.valueOf(next.charAt(4));
String sixth = String.valueOf(next.charAt(5));
String seventh = String.valueOf(next.charAt(6));
String eighth = String.valueOf(next.charAt(7));
String ninth = String.valueOf(next.charAt(8));

if(massCalc_notAnyOther(new String[]{first,second,third,fourth,fifth,sixth,seventh,ninth},
new int[]{_s,_t,_e,_r,_i,_l,_i,_e})){
SubstitutionCracker2.key[_z] = eighth.toLowerCase();
SubstitutionCracker2.hasZ=true;
System.err.println("SubstitutionCracker2.hasZ=true; via Scanner z_sterilize");
System.err.println((Arrays.toString(SubstitutionCracker2.key)).replaceAll("null", "\u0000"));
System.err.println(SubstitutionCracker2.correctKey);

z_sterilize.close();
break;
   }
  }
 }
if(!SubstitutionCracker2.hasZ){
z_sterilize.close();
Scanner z_vitazyme = new Scanner(SubstitutionCracker2.cipher);
while(z_vitazyme.hasNext()){
String next = z_vitazyme.next();
if (next.length()==8){
String first = String.valueOf(next.charAt(0));
String second = String.valueOf(next.charAt(1));
String third = String.valueOf(next.charAt(2));
String fourth = String.valueOf(next.charAt(3));
String fifth = String.valueOf(next.charAt(4));
String sixth = String.valueOf(next.charAt(5));
String seventh = String.valueOf(next.charAt(6));
String eighth = String.valueOf(next.charAt(7));

if(massCalc_notAnyOther(new String[]{first,second,third,fourth,sixth,seventh,eighth},
new int[]{_v,_i,_t,_a,_y,_m,_e})){
SubstitutionCracker2.key[_z] = fifth.toLowerCase();
SubstitutionCracker2.hasZ=true;
System.err.println("SubstitutionCracker2.hasZ=true; via Scanner z_vitazyme");
System.err.println((Arrays.toString(SubstitutionCracker2.key)).replaceAll("null", "\u0000"));
System.err.println(SubstitutionCracker2.correctKey);

z_vitazyme.close();
break;
   }
  }
 }
if(!SubstitutionCracker2.hasZ){
z_vitazyme.close();
Scanner z_sterilized = new Scanner(SubstitutionCracker2.cipher);
while(z_sterilized.hasNext()){
String next = z_sterilized.next();
if (next.length()==10){
String first = String.valueOf(next.charAt(0));
String second = String.valueOf(next.charAt(1));
String third = String.valueOf(next.charAt(2));
String fourth = String.valueOf(next.charAt(3));
String fifth = String.valueOf(next.charAt(4));
String sixth = String.valueOf(next.charAt(5));
String seventh = String.valueOf(next.charAt(6));
String eighth = String.valueOf(next.charAt(7));
String ninth = String.valueOf(next.charAt(8));
String tenth = String.valueOf(next.charAt(9));

if(massCalc_notAnyOther(new String[]{first,second,third,fourth,fifth,sixth,seventh,ninth,tenth},
new int[]{_s,_t,_e,_r,_i,_l,_i,_e,_d})){
SubstitutionCracker2.key[_z] = eighth.toLowerCase();
SubstitutionCracker2.hasZ=true;
System.err.println("SubstitutionCracker2.hasZ=true; via Scanner z_sterilized");
System.err.println((Arrays.toString(SubstitutionCracker2.key)).replaceAll("null", "\u0000"));
System.err.println(SubstitutionCracker2.correctKey);

z_sterilized.close();
break;
   }
  }
 }
if(!SubstitutionCracker2.hasZ){
z_sterilized.close();
Scanner z_puzzled = new Scanner(SubstitutionCracker2.cipher);
while(z_puzzled.hasNext()){
String next = z_puzzled.next();
if (next.length()==7){
String first = String.valueOf(next.charAt(0));
String second = String.valueOf(next.charAt(1));
String third = String.valueOf(next.charAt(2));
String fourth = String.valueOf(next.charAt(3));
String fifth = String.valueOf(next.charAt(4));
String sixth = String.valueOf(next.charAt(5));
String seventh = String.valueOf(next.charAt(6));

if(third.equalsIgnoreCase(fourth)){
if(massCalc_notAnyOther(new String[]{first,second,fifth,sixth,seventh},
new int[]{_p,_u,_l,_e,_d})){
SubstitutionCracker2.key[_z] = third.toLowerCase();
SubstitutionCracker2.hasZ=true;
System.err.println("SubstitutionCracker2.hasZ=true; via Scanner z_puzzled");
System.err.println((Arrays.toString(SubstitutionCracker2.key)).replaceAll("null", "\u0000"));
System.err.println(SubstitutionCracker2.correctKey);

z_puzzled.close();
break;
    }
   }
  }
 }
if(!SubstitutionCracker2.hasZ){
z_puzzled.close();
Scanner z_horizon = new Scanner(SubstitutionCracker2.cipher);
while(z_horizon.hasNext()){
String next = z_horizon.next();
if (next.length()==7){
String first = String.valueOf(next.charAt(0));
String second = String.valueOf(next.charAt(1));
String third = String.valueOf(next.charAt(2));
String fourth = String.valueOf(next.charAt(3));
String fifth = String.valueOf(next.charAt(4));
String sixth = String.valueOf(next.charAt(5));
String seventh = String.valueOf(next.charAt(6));

if(massCalc_notAnyOther(new String[]{first,second,third,fourth,sixth,seventh},
new int[]{_h,_o,_r,_i,_o,_n})){
SubstitutionCracker2.key[_z] = fifth.toLowerCase();
SubstitutionCracker2.hasZ=true;
System.err.println("SubstitutionCracker2.hasZ=true; via Scanner z_horizon");
System.err.println((Arrays.toString(SubstitutionCracker2.key)).replaceAll("null", "\u0000"));
System.err.println(SubstitutionCracker2.correctKey);

z_horizon.close();
break;
   }
  }
 }
if(!SubstitutionCracker2.hasZ){
z_horizon.close();
Scanner z_zabulon = new Scanner(SubstitutionCracker2.cipher);
while(z_zabulon.hasNext()){
String next = z_zabulon.next();
if (next.length()==7){
String first = String.valueOf(next.charAt(0));
String second = String.valueOf(next.charAt(1));
String third = String.valueOf(next.charAt(2));
String fourth = String.valueOf(next.charAt(3));
String fifth = String.valueOf(next.charAt(4));
String sixth = String.valueOf(next.charAt(5));
String seventh = String.valueOf(next.charAt(6));

if(massCalc_notAnyOther(new String[]{second,third,fourth,fifth,sixth,seventh},
new int[]{_a,_b,_u,_l,_o,_n})){
SubstitutionCracker2.key[_z] = first.toLowerCase();
SubstitutionCracker2.hasZ=true;
System.err.println("SubstitutionCracker2.hasZ=true; via Scanner z_zabulon");
System.err.println((Arrays.toString(SubstitutionCracker2.key)).replaceAll("null", "\u0000"));
System.err.println(SubstitutionCracker2.correctKey);

z_zabulon.close();
break;
   }
  }
 }
if(!SubstitutionCracker2.hasZ){
z_zabulon.close();
Scanner z_citizenship = new Scanner(SubstitutionCracker2.cipher);
while(z_citizenship.hasNext()){
String next = z_citizenship.next();
if (next.length()==11){
String first = String.valueOf(next.charAt(0));
String second = String.valueOf(next.charAt(1));
String third = String.valueOf(next.charAt(2));
String fourth = String.valueOf(next.charAt(3));
String fifth = String.valueOf(next.charAt(4));
String sixth = String.valueOf(next.charAt(5));
String seventh = String.valueOf(next.charAt(6));
String eighth = String.valueOf(next.charAt(7));
String ninth = String.valueOf(next.charAt(8));
String tenth = String.valueOf(next.charAt(9));
String eleventh = String.valueOf(next.charAt(10));

if(massCalc_notAnyOther(new String[]{first,second,third,fourth,sixth,seventh,eighth,ninth,tenth,eleventh},
new int[]{_c,_i,_t,_i,_e,_n,_s,_h,_i,_p})){
SubstitutionCracker2.key[_z] = fifth.toLowerCase();
SubstitutionCracker2.hasZ=true;
System.err.println("SubstitutionCracker2.hasZ=true; via Scanner z_citizenship");
System.err.println((Arrays.toString(SubstitutionCracker2.key)).replaceAll("null", "\u0000"));
System.err.println(SubstitutionCracker2.correctKey);

z_citizenship.close();
break;
   }
  }
 }
if(!SubstitutionCracker2.hasZ){
z_citizenship.close();
Scanner z_realization = new Scanner(SubstitutionCracker2.cipher);
while(z_realization.hasNext()){
String next = z_realization.next();
if (next.length()==11){
String first = String.valueOf(next.charAt(0));
String second = String.valueOf(next.charAt(1));
String third = String.valueOf(next.charAt(2));
String fourth = String.valueOf(next.charAt(3));
String fifth = String.valueOf(next.charAt(4));
String sixth = String.valueOf(next.charAt(5));
String seventh = String.valueOf(next.charAt(6));
String eighth = String.valueOf(next.charAt(7));
String ninth = String.valueOf(next.charAt(8));
String tenth = String.valueOf(next.charAt(9));
String eleventh = String.valueOf(next.charAt(10));

if(massCalc_notAnyOther(new String[]{first,second,third,fourth,fifth,seventh,eighth,ninth,tenth,eleventh},
new int[]{_r,_e,_a,_l,_i,_a,_t,_i,_o,_n})){
SubstitutionCracker2.key[_z] = sixth.toLowerCase();
SubstitutionCracker2.hasZ=true;
System.err.println("SubstitutionCracker2.hasZ=true; via Scanner z_realization");
System.err.println((Arrays.toString(SubstitutionCracker2.key)).replaceAll("null", "\u0000"));
System.err.println(SubstitutionCracker2.correctKey);

z_realization.close();
break;
   }
  }
 }
if(!SubstitutionCracker2.hasZ){
z_realization.close();
Scanner z_elizabeth = new Scanner(SubstitutionCracker2.cipher);
while(z_elizabeth.hasNext()){
String next = z_elizabeth.next();
if (next.length()==9){
String first = String.valueOf(next.charAt(0));
String second = String.valueOf(next.charAt(1));
String third = String.valueOf(next.charAt(2));
String fourth = String.valueOf(next.charAt(3));
String fifth = String.valueOf(next.charAt(4));
String sixth = String.valueOf(next.charAt(5));
String seventh = String.valueOf(next.charAt(6));
String eighth = String.valueOf(next.charAt(7));
String ninth = String.valueOf(next.charAt(8));

if(massCalc_notAnyOther(new String[]{first,second,third,fifth,sixth,seventh,eighth,ninth},
new int[]{_e,_l,_i,_a,_b,_e,_t,_h})){
SubstitutionCracker2.key[_z] = fourth.toLowerCase();
SubstitutionCracker2.hasZ=true;
System.err.println("SubstitutionCracker2.hasZ=true; via Scanner z_elizabeth");
System.err.println((Arrays.toString(SubstitutionCracker2.key)).replaceAll("null", "\u0000"));
System.err.println(SubstitutionCracker2.correctKey);

z_elizabeth.close();
break;
   }
  }
 }
if(!SubstitutionCracker2.hasZ){
z_elizabeth.close();
Scanner z_scandalize = new Scanner(SubstitutionCracker2.cipher);
while(z_scandalize.hasNext()){
String next = z_scandalize.next();
if (next.length()==10){
String first = String.valueOf(next.charAt(0));
String second = String.valueOf(next.charAt(1));
String third = String.valueOf(next.charAt(2));
String fourth = String.valueOf(next.charAt(3));
String fifth = String.valueOf(next.charAt(4));
String sixth = String.valueOf(next.charAt(5));
String seventh = String.valueOf(next.charAt(6));
String eighth = String.valueOf(next.charAt(7));
String ninth = String.valueOf(next.charAt(8));
String tenth = String.valueOf(next.charAt(9));

if(massCalc_notAnyOther(new String[]{first,second,third,fourth,fifth,sixth,seventh,eighth,tenth},
new int[]{_s,_c,_a,_n,_d,_a,_l,_i,_e})){
SubstitutionCracker2.key[_z] = ninth.toLowerCase();
SubstitutionCracker2.hasZ=true;
System.err.println("SubstitutionCracker2.hasZ=true; via Scanner z_scandalize");
System.err.println((Arrays.toString(SubstitutionCracker2.key)).replaceAll("null", "\u0000"));
System.err.println(SubstitutionCracker2.correctKey);

z_scandalize.close();
break;
   }
  }
 }
if(!SubstitutionCracker2.hasZ){
z_scandalize.close();
Scanner z_civilization = new Scanner(SubstitutionCracker2.cipher);
while(z_civilization.hasNext()){
String next = z_civilization.next();
if (next.length()==12){
String first = String.valueOf(next.charAt(0));
String second = String.valueOf(next.charAt(1));
String third = String.valueOf(next.charAt(2));
String fourth = String.valueOf(next.charAt(3));
String fifth = String.valueOf(next.charAt(4));
String sixth = String.valueOf(next.charAt(5));
String seventh = String.valueOf(next.charAt(6));
String eighth = String.valueOf(next.charAt(7));
String ninth = String.valueOf(next.charAt(8));
String tenth = String.valueOf(next.charAt(9));
String eleventh = String.valueOf(next.charAt(10));
String twelfth = String.valueOf(next.charAt(11));

if(massCalc_notAnyOther(new String[]{first,second,third,fourth,fifth,sixth,eighth,ninth,tenth,eleventh,twelfth},
new int[]{_c,_i,_v,_i,_l,_i,_a,_t,_i,_o,_n})){
SubstitutionCracker2.key[_z] = seventh.toLowerCase();
SubstitutionCracker2.hasZ=true;
System.err.println("SubstitutionCracker2.hasZ=true; via Scanner z_civilization");
System.err.println((Arrays.toString(SubstitutionCracker2.key)).replaceAll("null", "\u0000"));
System.err.println(SubstitutionCracker2.correctKey);

z_civilization.close();
break;
   }
  }
 }
if(!SubstitutionCracker2.hasZ){
z_civilization.close();
Scanner z_recognizes = new Scanner(SubstitutionCracker2.cipher);
while(z_recognizes.hasNext()){
String next = z_recognizes.next();
if (next.length()==10){
String first = String.valueOf(next.charAt(0));
String second = String.valueOf(next.charAt(1));
String third = String.valueOf(next.charAt(2));
String fourth = String.valueOf(next.charAt(3));
String fifth = String.valueOf(next.charAt(4));
String sixth = String.valueOf(next.charAt(5));
String seventh = String.valueOf(next.charAt(6));
String eighth = String.valueOf(next.charAt(7));
String ninth = String.valueOf(next.charAt(8));
String tenth = String.valueOf(next.charAt(9));

if(massCalc_notAnyOther(new String[]{first,second,third,fourth,fifth,sixth,seventh,ninth,tenth},
new int[]{_r,_e,_c,_o,_g,_n,_i,_e,_s})){
SubstitutionCracker2.key[_z] = eighth.toLowerCase();
SubstitutionCracker2.hasZ=true;
System.err.println("SubstitutionCracker2.hasZ=true; via Scanner z_recognizes");
System.err.println((Arrays.toString(SubstitutionCracker2.key)).replaceAll("null", "\u0000"));
System.err.println(SubstitutionCracker2.correctKey);

z_recognizes.close();
break;
   }
  }
 }
if(!SubstitutionCracker2.hasZ){
z_recognizes.close();
Scanner z_blazing = new Scanner(SubstitutionCracker2.cipher);
while(z_blazing.hasNext()){
String next = z_blazing.next();
if (next.length()==7){
String first = String.valueOf(next.charAt(0));
String second = String.valueOf(next.charAt(1));
String third = String.valueOf(next.charAt(2));
String fourth = String.valueOf(next.charAt(3));
String fifth = String.valueOf(next.charAt(4));
String sixth = String.valueOf(next.charAt(5));
String seventh = String.valueOf(next.charAt(6));

if(massCalc_notAnyOther(new String[]{first,second,third,fifth,sixth,seventh},
new int[]{_b,_l,_a,_i,_n,_g})){
SubstitutionCracker2.key[_z] = fourth.toLowerCase();
SubstitutionCracker2.hasZ=true;
System.err.println("SubstitutionCracker2.hasZ=true; via Scanner z_blazing");
System.err.println((Arrays.toString(SubstitutionCracker2.key)).replaceAll("null", "\u0000"));
System.err.println(SubstitutionCracker2.correctKey);

z_blazing.close();
break;
   }
  }
 }
if(!SubstitutionCracker2.hasZ){
z_blazing.close();
Scanner z_pfizer = new Scanner(SubstitutionCracker2.cipher);
while(z_pfizer.hasNext()){
String next = z_pfizer.next();
if (next.length()==6){
String first = String.valueOf(next.charAt(0));
String second = String.valueOf(next.charAt(1));
String third = String.valueOf(next.charAt(2));
String fourth = String.valueOf(next.charAt(3));
String fifth = String.valueOf(next.charAt(4));
String sixth = String.valueOf(next.charAt(5));

if(massCalc_notAnyOther(new String[]{first,second,third,fifth,sixth},
new int[]{_p,_f,_i,_e,_r})){
SubstitutionCracker2.key[_z] = fourth.toLowerCase();
SubstitutionCracker2.hasZ=true;
System.err.println("SubstitutionCracker2.hasZ=true; via Scanner z_pfizer");
System.err.println((Arrays.toString(SubstitutionCracker2.key)).replaceAll("null", "\u0000"));
System.err.println(SubstitutionCracker2.correctKey);

z_pfizer.close();
break;
   }
  }
 }
if(!SubstitutionCracker2.hasZ){
z_pfizer.close();
Scanner z_characterized = new Scanner(SubstitutionCracker2.cipher);
while(z_characterized.hasNext()){
String next = z_characterized.next();
if (next.length()==13){
String first = String.valueOf(next.charAt(0));
String second = String.valueOf(next.charAt(1));
String third = String.valueOf(next.charAt(2));
String fourth = String.valueOf(next.charAt(3));
String fifth = String.valueOf(next.charAt(4));
String sixth = String.valueOf(next.charAt(5));
String seventh = String.valueOf(next.charAt(6));
String eighth = String.valueOf(next.charAt(7));
String ninth = String.valueOf(next.charAt(8));
String tenth = String.valueOf(next.charAt(9));
String eleventh = String.valueOf(next.charAt(10));
String twelfth = String.valueOf(next.charAt(11));
String thirteenth = String.valueOf(next.charAt(12));

if(massCalc_notAnyOther(new String[]{first,second,third,fourth,fifth,sixth,seventh,eighth,ninth,tenth,twelfth,thirteenth},
new int[]{_c,_h,_a,_r,_a,_c,_t,_e,_r,_i,_e,_d})){
SubstitutionCracker2.key[_z] = eleventh.toLowerCase();
SubstitutionCracker2.hasZ=true;
System.err.println("SubstitutionCracker2.hasZ=true; via Scanner z_characterized");
System.err.println((Arrays.toString(SubstitutionCracker2.key)).replaceAll("null", "\u0000"));
System.err.println(SubstitutionCracker2.correctKey);

z_characterized.close();
break;
   }
  }
 }
if(!SubstitutionCracker2.hasZ){
z_characterized.close();
Scanner z_booz = new Scanner(SubstitutionCracker2.cipher);
while(z_booz.hasNext()){
String next = z_booz.next();
if (next.length()==4){
String first = String.valueOf(next.charAt(0));
String second = String.valueOf(next.charAt(1));
String third = String.valueOf(next.charAt(2));
String fourth = String.valueOf(next.charAt(3));

if(massCalc_notAnyOther(new String[]{first,second,third},
new int[]{_b,_o,_o})){
SubstitutionCracker2.key[_z] = fourth.toLowerCase();
SubstitutionCracker2.hasZ=true;
System.err.println("SubstitutionCracker2.hasZ=true; via Scanner z_booz");
System.err.println((Arrays.toString(SubstitutionCracker2.key)).replaceAll("null", "\u0000"));
System.err.println(SubstitutionCracker2.correctKey);

z_booz.close();
break;
   }
  }
 }
if(!SubstitutionCracker2.hasZ){
z_booz.close();
Scanner z_kranitz = new Scanner(SubstitutionCracker2.cipher);
while(z_kranitz.hasNext()){
String next = z_kranitz.next();
if (next.length()==7){
String first = String.valueOf(next.charAt(0));
String second = String.valueOf(next.charAt(1));
String third = String.valueOf(next.charAt(2));
String fourth = String.valueOf(next.charAt(3));
String fifth = String.valueOf(next.charAt(4));
String sixth = String.valueOf(next.charAt(5));
String seventh = String.valueOf(next.charAt(6));

if(massCalc_notAnyOther(new String[]{first,second,third,fourth,fifth,sixth},
new int[]{_k,_r,_a,_n,_i,_t})){
SubstitutionCracker2.key[_z] = seventh.toLowerCase();
SubstitutionCracker2.hasZ=true;
System.err.println("SubstitutionCracker2.hasZ=true; via Scanner z_kranitz");
System.err.println((Arrays.toString(SubstitutionCracker2.key)).replaceAll("null", "\u0000"));
System.err.println(SubstitutionCracker2.correctKey);

z_kranitz.close();
break;
   }
  }
 }
if(!SubstitutionCracker2.hasZ){
z_kranitz.close();
Scanner z_dozed = new Scanner(SubstitutionCracker2.cipher);
while(z_dozed.hasNext()){
String next = z_dozed.next();
if (next.length()==5){
String first = String.valueOf(next.charAt(0));
String second = String.valueOf(next.charAt(1));
String third = String.valueOf(next.charAt(2));
String fourth = String.valueOf(next.charAt(3));
String fifth = String.valueOf(next.charAt(4));

if(massCalc_notAnyOther(new String[]{first,second,fourth,fifth},
new int[]{_d,_o,_e,_d})){
SubstitutionCracker2.key[_z] = third.toLowerCase();
SubstitutionCracker2.hasZ=true;
System.err.println("SubstitutionCracker2.hasZ=true; via Scanner z_dozed");
System.err.println((Arrays.toString(SubstitutionCracker2.key)).replaceAll("null", "\u0000"));
System.err.println(SubstitutionCracker2.correctKey);

z_dozed.close();
break;
   }
  }
 }
if(!SubstitutionCracker2.hasZ){
z_dozed.close();
Scanner z_analyzed = new Scanner(SubstitutionCracker2.cipher);
while(z_analyzed.hasNext()){
String next = z_analyzed.next();
if (next.length()==8){
String first = String.valueOf(next.charAt(0));
String second = String.valueOf(next.charAt(1));
String third = String.valueOf(next.charAt(2));
String fourth = String.valueOf(next.charAt(3));
String fifth = String.valueOf(next.charAt(4));
String sixth = String.valueOf(next.charAt(5));
String seventh = String.valueOf(next.charAt(6));
String eighth = String.valueOf(next.charAt(7));

if(massCalc_notAnyOther(new String[]{first,second,third,fourth,fifth,seventh,eighth},
new int[]{_a,_n,_a,_l,_y,_e,_d})){
SubstitutionCracker2.key[_z] = sixth.toLowerCase();
SubstitutionCracker2.hasZ=true;
System.err.println("SubstitutionCracker2.hasZ=true; via Scanner z_analyzed");
System.err.println((Arrays.toString(SubstitutionCracker2.key)).replaceAll("null", "\u0000"));
System.err.println(SubstitutionCracker2.correctKey);

z_analyzed.close();
break;
   }
  }
 }
if(!SubstitutionCracker2.hasZ){
z_analyzed.close();
Scanner z_zorobabel = new Scanner(SubstitutionCracker2.cipher);
while(z_zorobabel.hasNext()){
String next = z_zorobabel.next();
if (next.length()==9){
String first = String.valueOf(next.charAt(0));
String second = String.valueOf(next.charAt(1));
String third = String.valueOf(next.charAt(2));
String fourth = String.valueOf(next.charAt(3));
String fifth = String.valueOf(next.charAt(4));
String sixth = String.valueOf(next.charAt(5));
String seventh = String.valueOf(next.charAt(6));
String eighth = String.valueOf(next.charAt(7));
String ninth = String.valueOf(next.charAt(8));

if(massCalc_notAnyOther(new String[]{second,third,fourth,fifth,sixth,seventh,eighth,ninth},
new int[]{_o,_r,_o,_b,_a,_b,_e,_l})){
SubstitutionCracker2.key[_z] = first.toLowerCase();
SubstitutionCracker2.hasZ=true;
System.err.println("SubstitutionCracker2.hasZ=true; via Scanner z_zorobabel");
System.err.println((Arrays.toString(SubstitutionCracker2.key)).replaceAll("null", "\u0000"));
System.err.println(SubstitutionCracker2.correctKey);

z_zorobabel.close();
break;
   }
  }
 }
if(!SubstitutionCracker2.hasZ){
z_zorobabel.close();
Scanner z_nabuzardan = new Scanner(SubstitutionCracker2.cipher);
while(z_nabuzardan.hasNext()){
String next = z_nabuzardan.next();
if (next.length()==10){
String first = String.valueOf(next.charAt(0));
String second = String.valueOf(next.charAt(1));
String third = String.valueOf(next.charAt(2));
String fourth = String.valueOf(next.charAt(3));
String fifth = String.valueOf(next.charAt(4));
String sixth = String.valueOf(next.charAt(5));
String seventh = String.valueOf(next.charAt(6));
String eighth = String.valueOf(next.charAt(7));
String ninth = String.valueOf(next.charAt(8));
String tenth = String.valueOf(next.charAt(9));

if(massCalc_notAnyOther(new String[]{first,second,third,fourth,sixth,seventh,eighth,ninth,tenth},
new int[]{_n,_a,_b,_u,_a,_r,_d,_a,_n})){
SubstitutionCracker2.key[_z] = fifth.toLowerCase();
SubstitutionCracker2.hasZ=true;
System.err.println("SubstitutionCracker2.hasZ=true; via Scanner z_nabuzardan");
System.err.println((Arrays.toString(SubstitutionCracker2.key)).replaceAll("null", "\u0000"));
System.err.println(SubstitutionCracker2.correctKey);

z_nabuzardan.close();
break;
   }
  }
 }
if(!SubstitutionCracker2.hasZ){
z_nabuzardan.close();
Scanner z_zones = new Scanner(SubstitutionCracker2.cipher);
while(z_zones.hasNext()){
String next = z_zones.next();
if (next.length()==5){
String first = String.valueOf(next.charAt(0));
String second = String.valueOf(next.charAt(1));
String third = String.valueOf(next.charAt(2));
String fourth = String.valueOf(next.charAt(3));
String fifth = String.valueOf(next.charAt(4));

if(massCalc_notAnyOther(new String[]{second,third,fourth,fifth},
new int[]{_o,_n,_e,_s})){
SubstitutionCracker2.key[_z] = first.toLowerCase();
SubstitutionCracker2.hasZ=true;
System.err.println("SubstitutionCracker2.hasZ=true; via Scanner z_zones");
System.err.println((Arrays.toString(SubstitutionCracker2.key)).replaceAll("null", "\u0000"));
System.err.println(SubstitutionCracker2.correctKey);

z_zones.close();
break;
   }
  }
 }
if(!SubstitutionCracker2.hasZ){
z_zones.close();
Scanner z_breeze = new Scanner(SubstitutionCracker2.cipher);
while(z_breeze.hasNext()){
String next = z_breeze.next();
if (next.length()==6){
String first = String.valueOf(next.charAt(0));
String second = String.valueOf(next.charAt(1));
String third = String.valueOf(next.charAt(2));
String fourth = String.valueOf(next.charAt(3));
String fifth = String.valueOf(next.charAt(4));
String sixth = String.valueOf(next.charAt(5));

if(massCalc_notAnyOther(new String[]{first,second,third,fourth,sixth},
new int[]{_b,_r,_e,_e,_e})){
SubstitutionCracker2.key[_z] = fifth.toLowerCase();
SubstitutionCracker2.hasZ=true;
System.err.println("SubstitutionCracker2.hasZ=true; via Scanner z_breeze");
System.err.println((Arrays.toString(SubstitutionCracker2.key)).replaceAll("null", "\u0000"));
System.err.println(SubstitutionCracker2.correctKey);

z_breeze.close();
break;
   }
  }
 }
if(!SubstitutionCracker2.hasZ){
z_breeze.close();
Scanner z_darzee = new Scanner(SubstitutionCracker2.cipher);
while(z_darzee.hasNext()){
String next = z_darzee.next();
if (next.length()==6){
String first = String.valueOf(next.charAt(0));
String second = String.valueOf(next.charAt(1));
String third = String.valueOf(next.charAt(2));
String fourth = String.valueOf(next.charAt(3));
String fifth = String.valueOf(next.charAt(4));
String sixth = String.valueOf(next.charAt(5));

if(massCalc_notAnyOther(new String[]{first,second,third,fifth,sixth},
new int[]{_d,_a,_r,_e,_e})){
SubstitutionCracker2.key[_z] = fourth.toLowerCase();
SubstitutionCracker2.hasZ=true;
System.err.println("SubstitutionCracker2.hasZ=true; via Scanner z_darzee");
System.err.println((Arrays.toString(SubstitutionCracker2.key)).replaceAll("null", "\u0000"));
System.err.println(SubstitutionCracker2.correctKey);

z_darzee.close();
break;
   }
  }
 }
if(!SubstitutionCracker2.hasZ){
z_darzee.close();
Scanner z_pratzen = new Scanner(SubstitutionCracker2.cipher);
while(z_pratzen.hasNext()){
String next = z_pratzen.next();
if (next.length()==7){
String first = String.valueOf(next.charAt(0));
String second = String.valueOf(next.charAt(1));
String third = String.valueOf(next.charAt(2));
String fourth = String.valueOf(next.charAt(3));
String fifth = String.valueOf(next.charAt(4));
String sixth = String.valueOf(next.charAt(5));
String seventh = String.valueOf(next.charAt(6));

if(massCalc_notAnyOther(new String[]{first,second,third,fourth,sixth,seventh},
new int[]{_p,_r,_a,_t,_e,_n})){
SubstitutionCracker2.key[_z] = fifth.toLowerCase();
SubstitutionCracker2.hasZ=true;
System.err.println("SubstitutionCracker2.hasZ=true; via Scanner z_pratzen");
System.err.println((Arrays.toString(SubstitutionCracker2.key)).replaceAll("null", "\u0000"));
System.err.println(SubstitutionCracker2.correctKey);

z_pratzen.close();
break;
   }
  }
 }
if(!SubstitutionCracker2.hasZ){
z_pratzen.close();
Scanner z_fertilize = new Scanner(SubstitutionCracker2.cipher);
while(z_fertilize.hasNext()){
String next = z_fertilize.next();
if (next.length()==9){
String first = String.valueOf(next.charAt(0));
String second = String.valueOf(next.charAt(1));
String third = String.valueOf(next.charAt(2));
String fourth = String.valueOf(next.charAt(3));
String fifth = String.valueOf(next.charAt(4));
String sixth = String.valueOf(next.charAt(5));
String seventh = String.valueOf(next.charAt(6));
String eighth = String.valueOf(next.charAt(7));
String ninth = String.valueOf(next.charAt(8));

if(massCalc_notAnyOther(new String[]{first,second,third,fourth,fifth,sixth,seventh,ninth},
new int[]{_f,_e,_r,_t,_i,_l,_i,_e})){
SubstitutionCracker2.key[_z] = eighth.toLowerCase();
SubstitutionCracker2.hasZ=true;
System.err.println("SubstitutionCracker2.hasZ=true; via Scanner z_fertilize");
System.err.println((Arrays.toString(SubstitutionCracker2.key)).replaceAll("null", "\u0000"));
System.err.println(SubstitutionCracker2.correctKey);

z_fertilize.close();
break;
   }
  }
 }
if(!SubstitutionCracker2.hasZ){
z_fertilize.close();
Scanner z_czech = new Scanner(SubstitutionCracker2.cipher);
while(z_czech.hasNext()){
String next = z_czech.next();
if (next.length()==5){
String first = String.valueOf(next.charAt(0));
String second = String.valueOf(next.charAt(1));
String third = String.valueOf(next.charAt(2));
String fourth = String.valueOf(next.charAt(3));
String fifth = String.valueOf(next.charAt(4));

if(massCalc_notAnyOther(new String[]{first,third,fourth,fifth},
new int[]{_c,_e,_c,_h})){
SubstitutionCracker2.key[_z] = second.toLowerCase();
SubstitutionCracker2.hasZ=true;
System.err.println("SubstitutionCracker2.hasZ=true; via Scanner z_czech");
System.err.println((Arrays.toString(SubstitutionCracker2.key)).replaceAll("null", "\u0000"));
System.err.println(SubstitutionCracker2.correctKey);

z_czech.close();
break;
   }
  }
 }
if(!SubstitutionCracker2.hasZ){
z_czech.close();
Scanner z_joachaz = new Scanner(SubstitutionCracker2.cipher);
while(z_joachaz.hasNext()){
String next = z_joachaz.next();
if (next.length()==7){
String first = String.valueOf(next.charAt(0));
String second = String.valueOf(next.charAt(1));
String third = String.valueOf(next.charAt(2));
String fourth = String.valueOf(next.charAt(3));
String fifth = String.valueOf(next.charAt(4));
String sixth = String.valueOf(next.charAt(5));
String seventh = String.valueOf(next.charAt(6));

if(massCalc_notAnyOther(new String[]{first,second,third,fourth,fifth,sixth},
new int[]{_j,_o,_a,_c,_h,_a})){
SubstitutionCracker2.key[_z] = seventh.toLowerCase();
SubstitutionCracker2.hasZ=true;
System.err.println("SubstitutionCracker2.hasZ=true; via Scanner z_joachaz");
System.err.println((Arrays.toString(SubstitutionCracker2.key)).replaceAll("null", "\u0000"));
System.err.println(SubstitutionCracker2.correctKey);

z_joachaz.close();
break;
   }
  }
 }
if(!SubstitutionCracker2.hasZ){
z_joachaz.close();
Scanner z_ochozias = new Scanner(SubstitutionCracker2.cipher);
while(z_ochozias.hasNext()){
String next = z_ochozias.next();
if (next.length()==8){
String first = String.valueOf(next.charAt(0));
String second = String.valueOf(next.charAt(1));
String third = String.valueOf(next.charAt(2));
String fourth = String.valueOf(next.charAt(3));
String fifth = String.valueOf(next.charAt(4));
String sixth = String.valueOf(next.charAt(5));
String seventh = String.valueOf(next.charAt(6));
String eighth = String.valueOf(next.charAt(7));

if(massCalc_notAnyOther(new String[]{first,second,third,fourth,sixth,seventh,eighth},
new int[]{_o,_c,_h,_o,_i,_a,_s})){
SubstitutionCracker2.key[_z] = fifth.toLowerCase();
SubstitutionCracker2.hasZ=true;
System.err.println("SubstitutionCracker2.hasZ=true; via Scanner z_ochozias");
System.err.println((Arrays.toString(SubstitutionCracker2.key)).replaceAll("null", "\u0000"));
System.err.println(SubstitutionCracker2.correctKey);

z_ochozias.close();
break;
   }
  }
 }
if(!SubstitutionCracker2.hasZ){
z_ochozias.close();
Scanner z_specialized = new Scanner(SubstitutionCracker2.cipher);
while(z_specialized.hasNext()){
String next = z_specialized.next();
if (next.length()==11){
String first = String.valueOf(next.charAt(0));
String second = String.valueOf(next.charAt(1));
String third = String.valueOf(next.charAt(2));
String fourth = String.valueOf(next.charAt(3));
String fifth = String.valueOf(next.charAt(4));
String sixth = String.valueOf(next.charAt(5));
String seventh = String.valueOf(next.charAt(6));
String eighth = String.valueOf(next.charAt(7));
String ninth = String.valueOf(next.charAt(8));
String tenth = String.valueOf(next.charAt(9));
String eleventh = String.valueOf(next.charAt(10));

if(massCalc_notAnyOther(new String[]{first,second,third,fourth,fifth,sixth,seventh,eighth,tenth,eleventh},
new int[]{_s,_p,_e,_c,_i,_a,_l,_i,_e,_d})){
SubstitutionCracker2.key[_z] = ninth.toLowerCase();
SubstitutionCracker2.hasZ=true;
System.err.println("SubstitutionCracker2.hasZ=true; via Scanner z_specialized");
System.err.println((Arrays.toString(SubstitutionCracker2.key)).replaceAll("null", "\u0000"));
System.err.println(SubstitutionCracker2.correctKey);

z_specialized.close();
break;
   }
  }
 }
if(!SubstitutionCracker2.hasZ){
z_specialized.close();
Scanner z_apologize = new Scanner(SubstitutionCracker2.cipher);
while(z_apologize.hasNext()){
String next = z_apologize.next();
if (next.length()==9){
String first = String.valueOf(next.charAt(0));
String second = String.valueOf(next.charAt(1));
String third = String.valueOf(next.charAt(2));
String fourth = String.valueOf(next.charAt(3));
String fifth = String.valueOf(next.charAt(4));
String sixth = String.valueOf(next.charAt(5));
String seventh = String.valueOf(next.charAt(6));
String eighth = String.valueOf(next.charAt(7));
String ninth = String.valueOf(next.charAt(8));

if(massCalc_notAnyOther(new String[]{first,second,third,fourth,fifth,sixth,seventh,ninth},
new int[]{_a,_p,_o,_l,_o,_g,_i,_e})){
SubstitutionCracker2.key[_z] = eighth.toLowerCase();
SubstitutionCracker2.hasZ=true;
System.err.println("SubstitutionCracker2.hasZ=true; via Scanner z_apologize");
System.err.println((Arrays.toString(SubstitutionCracker2.key)).replaceAll("null", "\u0000"));
System.err.println(SubstitutionCracker2.correctKey);

z_apologize.close();
break;
   }
  }
 }
if(!SubstitutionCracker2.hasZ){
z_apologize.close();
Scanner z_zone = new Scanner(SubstitutionCracker2.cipher);
while(z_zone.hasNext()){
String next = z_zone.next();
if (next.length()==4){
String first = String.valueOf(next.charAt(0));
String second = String.valueOf(next.charAt(1));
String third = String.valueOf(next.charAt(2));
String fourth = String.valueOf(next.charAt(3));

if(massCalc_notAnyOther(new String[]{second,third,fourth},
new int[]{_o,_n,_e})){
SubstitutionCracker2.key[_z] = first.toLowerCase();
SubstitutionCracker2.hasZ=true;
System.err.println("SubstitutionCracker2.hasZ=true; via Scanner z_zone");
System.err.println((Arrays.toString(SubstitutionCracker2.key)).replaceAll("null", "\u0000"));
System.err.println(SubstitutionCracker2.correctKey);

z_zone.close();
break;
   }
  }
 }
if(!SubstitutionCracker2.hasZ){
z_zone.close();
Scanner z_zealand = new Scanner(SubstitutionCracker2.cipher);
while(z_zealand.hasNext()){
String next = z_zealand.next();
if (next.length()==7){
String first = String.valueOf(next.charAt(0));
String second = String.valueOf(next.charAt(1));
String third = String.valueOf(next.charAt(2));
String fourth = String.valueOf(next.charAt(3));
String fifth = String.valueOf(next.charAt(4));
String sixth = String.valueOf(next.charAt(5));
String seventh = String.valueOf(next.charAt(6));

if(massCalc_notAnyOther(new String[]{second,third,fourth,fifth,sixth,seventh},
new int[]{_e,_a,_l,_a,_n,_d})){
SubstitutionCracker2.key[_z] = first.toLowerCase();
SubstitutionCracker2.hasZ=true;
System.err.println("SubstitutionCracker2.hasZ=true; via Scanner z_zealand");
System.err.println((Arrays.toString(SubstitutionCracker2.key)).replaceAll("null", "\u0000"));
System.err.println(SubstitutionCracker2.correctKey);

z_zealand.close();
break;
   }
  }
 }
if(!SubstitutionCracker2.hasZ){
z_zealand.close();
Scanner z_borzoi = new Scanner(SubstitutionCracker2.cipher);
while(z_borzoi.hasNext()){
String next = z_borzoi.next();
if (next.length()==6){
String first = String.valueOf(next.charAt(0));
String second = String.valueOf(next.charAt(1));
String third = String.valueOf(next.charAt(2));
String fourth = String.valueOf(next.charAt(3));
String fifth = String.valueOf(next.charAt(4));
String sixth = String.valueOf(next.charAt(5));

if(massCalc_notAnyOther(new String[]{first,second,third,fifth,sixth},
new int[]{_b,_o,_r,_o,_i})){
SubstitutionCracker2.key[_z] = fourth.toLowerCase();
SubstitutionCracker2.hasZ=true;
System.err.println("SubstitutionCracker2.hasZ=true; via Scanner z_borzoi");
System.err.println((Arrays.toString(SubstitutionCracker2.key)).replaceAll("null", "\u0000"));
System.err.println(SubstitutionCracker2.correctKey);

z_borzoi.close();
break;
   }
  }
 }
if(!SubstitutionCracker2.hasZ){
z_borzoi.close();
Scanner z_magazine = new Scanner(SubstitutionCracker2.cipher);
while(z_magazine.hasNext()){
String next = z_magazine.next();
if (next.length()==8){
String first = String.valueOf(next.charAt(0));
String second = String.valueOf(next.charAt(1));
String third = String.valueOf(next.charAt(2));
String fourth = String.valueOf(next.charAt(3));
String fifth = String.valueOf(next.charAt(4));
String sixth = String.valueOf(next.charAt(5));
String seventh = String.valueOf(next.charAt(6));
String eighth = String.valueOf(next.charAt(7));

if(massCalc_notAnyOther(new String[]{first,second,third,fourth,sixth,seventh,eighth},
new int[]{_m,_a,_g,_a,_i,_n,_e})){
SubstitutionCracker2.key[_z] = fifth.toLowerCase();
SubstitutionCracker2.hasZ=true;
System.err.println("SubstitutionCracker2.hasZ=true; via Scanner z_magazine");
System.err.println((Arrays.toString(SubstitutionCracker2.key)).replaceAll("null", "\u0000"));
System.err.println(SubstitutionCracker2.correctKey);

z_magazine.close();
break;
   }
  }
 }
if(!SubstitutionCracker2.hasZ){
z_magazine.close();
Scanner z_buzzing = new Scanner(SubstitutionCracker2.cipher);
while(z_buzzing.hasNext()){
String next = z_buzzing.next();
if (next.length()==7){
String first = String.valueOf(next.charAt(0));
String second = String.valueOf(next.charAt(1));
String third = String.valueOf(next.charAt(2));
String fourth = String.valueOf(next.charAt(3));
String fifth = String.valueOf(next.charAt(4));
String sixth = String.valueOf(next.charAt(5));
String seventh = String.valueOf(next.charAt(6));

if(third.equalsIgnoreCase(fourth)){
if(massCalc_notAnyOther(new String[]{first,second,fifth,sixth,seventh},
new int[]{_b,_u,_i,_n,_g})){
SubstitutionCracker2.key[_z] = third.toLowerCase();
SubstitutionCracker2.hasZ=true;
System.err.println("SubstitutionCracker2.hasZ=true; via Scanner z_buzzing");
System.err.println((Arrays.toString(SubstitutionCracker2.key)).replaceAll("null", "\u0000"));
System.err.println(SubstitutionCracker2.correctKey);

z_buzzing.close();
break;
    }
   }
  }
 }
if(!SubstitutionCracker2.hasZ){
z_buzzing.close();
Scanner z_sterilization = new Scanner(SubstitutionCracker2.cipher);
while(z_sterilization.hasNext()){
String next = z_sterilization.next();
if (next.length()==13){
String first = String.valueOf(next.charAt(0));
String second = String.valueOf(next.charAt(1));
String third = String.valueOf(next.charAt(2));
String fourth = String.valueOf(next.charAt(3));
String fifth = String.valueOf(next.charAt(4));
String sixth = String.valueOf(next.charAt(5));
String seventh = String.valueOf(next.charAt(6));
String eighth = String.valueOf(next.charAt(7));
String ninth = String.valueOf(next.charAt(8));
String tenth = String.valueOf(next.charAt(9));
String eleventh = String.valueOf(next.charAt(10));
String twelfth = String.valueOf(next.charAt(11));
String thirteenth = String.valueOf(next.charAt(12));

if(massCalc_notAnyOther(new String[]{first,second,third,fourth,fifth,sixth,seventh,ninth,tenth,eleventh,twelfth,thirteenth},
new int[]{_s,_t,_e,_r,_i,_l,_i,_a,_t,_i,_o,_n})){
SubstitutionCracker2.key[_z] = eighth.toLowerCase();
SubstitutionCracker2.hasZ=true;
System.err.println("SubstitutionCracker2.hasZ=true; via Scanner z_sterilization");
System.err.println((Arrays.toString(SubstitutionCracker2.key)).replaceAll("null", "\u0000"));
System.err.println(SubstitutionCracker2.correctKey);

z_sterilization.close();
break;
   }
  }
 }
if(!SubstitutionCracker2.hasZ){
z_sterilization.close();
Scanner z_adarezer = new Scanner(SubstitutionCracker2.cipher);
while(z_adarezer.hasNext()){
String next = z_adarezer.next();
if (next.length()==8){
String first = String.valueOf(next.charAt(0));
String second = String.valueOf(next.charAt(1));
String third = String.valueOf(next.charAt(2));
String fourth = String.valueOf(next.charAt(3));
String fifth = String.valueOf(next.charAt(4));
String sixth = String.valueOf(next.charAt(5));
String seventh = String.valueOf(next.charAt(6));
String eighth = String.valueOf(next.charAt(7));

if(massCalc_notAnyOther(new String[]{first,second,third,fourth,fifth,seventh,eighth},
new int[]{_a,_d,_a,_r,_e,_e,_r})){
SubstitutionCracker2.key[_z] = sixth.toLowerCase();
SubstitutionCracker2.hasZ=true;
System.err.println("SubstitutionCracker2.hasZ=true; via Scanner z_adarezer");
System.err.println((Arrays.toString(SubstitutionCracker2.key)).replaceAll("null", "\u0000"));
System.err.println(SubstitutionCracker2.correctKey);

z_adarezer.close();
break;
   }
  }
 }
if(!SubstitutionCracker2.hasZ){
z_adarezer.close();
Scanner z_plaza = new Scanner(SubstitutionCracker2.cipher);
while(z_plaza.hasNext()){
String next = z_plaza.next();
if (next.length()==5){
String first = String.valueOf(next.charAt(0));
String second = String.valueOf(next.charAt(1));
String third = String.valueOf(next.charAt(2));
String fourth = String.valueOf(next.charAt(3));
String fifth = String.valueOf(next.charAt(4));

if(massCalc_notAnyOther(new String[]{first,second,third,fifth},
new int[]{_p,_l,_a,_a})){
SubstitutionCracker2.key[_z] = fourth.toLowerCase();
SubstitutionCracker2.hasZ=true;
System.err.println("SubstitutionCracker2.hasZ=true; via Scanner z_plaza");
System.err.println((Arrays.toString(SubstitutionCracker2.key)).replaceAll("null", "\u0000"));
System.err.println(SubstitutionCracker2.correctKey);

z_plaza.close();
break;
   }
  }
 }
if(!SubstitutionCracker2.hasZ){
z_plaza.close();
Scanner z_brazil = new Scanner(SubstitutionCracker2.cipher);
while(z_brazil.hasNext()){
String next = z_brazil.next();
if (next.length()==6){
String first = String.valueOf(next.charAt(0));
String second = String.valueOf(next.charAt(1));
String third = String.valueOf(next.charAt(2));
String fourth = String.valueOf(next.charAt(3));
String fifth = String.valueOf(next.charAt(4));
String sixth = String.valueOf(next.charAt(5));

if(massCalc_notAnyOther(new String[]{first,second,third,fifth,sixth},
new int[]{_b,_r,_a,_i,_l})){
SubstitutionCracker2.key[_z] = fourth.toLowerCase();
SubstitutionCracker2.hasZ=true;
System.err.println("SubstitutionCracker2.hasZ=true; via Scanner z_brazil");
System.err.println((Arrays.toString(SubstitutionCracker2.key)).replaceAll("null", "\u0000"));
System.err.println(SubstitutionCracker2.correctKey);

z_brazil.close();
break;
   }
  }
 }
if(!SubstitutionCracker2.hasZ){
z_brazil.close();
Scanner z_oz = new Scanner(SubstitutionCracker2.cipher);
while(z_oz.hasNext()){
String next = z_oz.next();
if (next.length()==2){
String first = String.valueOf(next.charAt(0));
String second = String.valueOf(next.charAt(1));

if(massCalc_notAnyOther(new String[]{first},
new int[]{_o})){
SubstitutionCracker2.key[_z] = second.toLowerCase();
SubstitutionCracker2.hasZ=true;
System.err.println("SubstitutionCracker2.hasZ=true; via Scanner z_oz");
System.err.println((Arrays.toString(SubstitutionCracker2.key)).replaceAll("null", "\u0000"));
System.err.println(SubstitutionCracker2.correctKey);

z_oz.close();
break;
   }
  }
 }
if(!SubstitutionCracker2.hasZ){
z_oz.close();
Scanner z_nazareth = new Scanner(SubstitutionCracker2.cipher);
while(z_nazareth.hasNext()){
String next = z_nazareth.next();
if (next.length()==8){
String first = String.valueOf(next.charAt(0));
String second = String.valueOf(next.charAt(1));
String third = String.valueOf(next.charAt(2));
String fourth = String.valueOf(next.charAt(3));
String fifth = String.valueOf(next.charAt(4));
String sixth = String.valueOf(next.charAt(5));
String seventh = String.valueOf(next.charAt(6));
String eighth = String.valueOf(next.charAt(7));

if(massCalc_notAnyOther(new String[]{first,second,fourth,fifth,sixth,seventh,eighth},
new int[]{_n,_a,_a,_r,_e,_t,_h})){
SubstitutionCracker2.key[_z] = third.toLowerCase();
SubstitutionCracker2.hasZ=true;
System.err.println("SubstitutionCracker2.hasZ=true; via Scanner z_nazareth");
System.err.println((Arrays.toString(SubstitutionCracker2.key)).replaceAll("null", "\u0000"));
System.err.println(SubstitutionCracker2.correctKey);

z_nazareth.close();
break;
   }
  }
 }
if(!SubstitutionCracker2.hasZ){
z_nazareth.close();
Scanner z_hazy = new Scanner(SubstitutionCracker2.cipher);
while(z_hazy.hasNext()){
String next = z_hazy.next();
if (next.length()==4){
String first = String.valueOf(next.charAt(0));
String second = String.valueOf(next.charAt(1));
String third = String.valueOf(next.charAt(2));
String fourth = String.valueOf(next.charAt(3));

if(massCalc_notAnyOther(new String[]{first,second,fourth},
new int[]{_h,_a,_y})){
SubstitutionCracker2.key[_z] = third.toLowerCase();
SubstitutionCracker2.hasZ=true;
System.err.println("SubstitutionCracker2.hasZ=true; via Scanner z_hazy");
System.err.println((Arrays.toString(SubstitutionCracker2.key)).replaceAll("null", "\u0000"));
System.err.println(SubstitutionCracker2.correctKey);

z_hazy.close();
break;
   }
  }
 }
if(!SubstitutionCracker2.hasZ){
z_hazy.close();
Scanner z_dozens = new Scanner(SubstitutionCracker2.cipher);
while(z_dozens.hasNext()){
String next = z_dozens.next();
if (next.length()==6){
String first = String.valueOf(next.charAt(0));
String second = String.valueOf(next.charAt(1));
String third = String.valueOf(next.charAt(2));
String fourth = String.valueOf(next.charAt(3));
String fifth = String.valueOf(next.charAt(4));
String sixth = String.valueOf(next.charAt(5));

if(massCalc_notAnyOther(new String[]{first,second,fourth,fifth,sixth},
new int[]{_d,_o,_e,_n,_s})){
SubstitutionCracker2.key[_z] = third.toLowerCase();
SubstitutionCracker2.hasZ=true;
System.err.println("SubstitutionCracker2.hasZ=true; via Scanner z_dozens");
System.err.println((Arrays.toString(SubstitutionCracker2.key)).replaceAll("null", "\u0000"));
System.err.println(SubstitutionCracker2.correctKey);

z_dozens.close();
break;
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
  }
 }
