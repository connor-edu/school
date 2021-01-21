// Assignment #1
// MainPart3.java
// Connor Love
// Samuel Garn

package edu.uncc.cci.mobileapps;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;

public class MainPart3 {
    /*
    * Question 3:
    * - This is a simple programming question that focuses on finding the
    * longest increasing subarray. Given the array A = {1,2,3,2,5,2,4,6,7} the
    * longest increasing subarray is {2,4,6,7}, note that the values have to be
    * contiguous.
    * */

    public static void main(String[] args) {
        ArrayList<Data> users = new ArrayList<>();

        for (String line : Data.users) {
            users.add(new Data(line));
        }

        ArrayList<Data> otherUsers = new ArrayList<>();

        for (String line : Data.otherUsers) {
            otherUsers.add(new Data(line));
        }

        HashSet<Data> bothUsers = new HashSet<>();


        for (Data user : users) {
            for (Data otherUser : otherUsers) {
                if (user.equals(otherUser)) {
                    bothUsers.add(user);
                }
            }
        }

        for (Data user : bothUsers) {
            System.out.println(user);
        }

        //example call
        //int[] input = {}; // output {}
        //int[] input = {1}; // output {1}
        //int[] input = {1,2,3,4}; // output {1,2,3,4}
        //int[] input = {1,2,3,4,4,4,4,4,5,6}; // output {1,2,3,4}
        //int[] input = {1,2,3,-1,4,5,8,20,25,1,1,4,6}; // output {-1,4,5,8,20,25}
        //int[] input = {1,2,3,1,1,1,2,3,4,1,1,2,4,6,7}; // output{1,2,4,6,7}
        //int[] input = {1,2,3,2,5,2,4,6,7}; // output {2,4,6,7}
        //int[] result = printLongestSequence(input);
    }

    public static int[] printLongestSequence(int[] input){
        int longestIndex = 0;
        int longestLength = 1;
        int currentLength = 1;
        int currentIndex = 0;

        for (int i = 1; i < input.length; i++) {
            if (input[i - 1] < input[i]) {
                currentLength += 1;
                if (currentLength > longestLength) {
                    longestLength = currentLength;
                    longestIndex = currentIndex;
                }
            } else {
                currentLength = 1;
                currentIndex = i;
            }
        }

        return Arrays.copyOfRange(input, longestIndex, longestIndex + longestLength);
    }
}