// Assignment #1
// MainPart2.java
// Connor Love
// Samuel Garn

package edu.uncc.cci.mobileapps;

import java.util.*;

public class MainPart2 {
    /*
    * Question 2:
    * - In this question you will use the Data.users array that includes
    * a list of users. Formatted as : firstname,lastname,age,email,gender,city,state
    * - Create a User class that should parse all the parameters for each user.
    * - The goal is to count the number of users living each state.
    * - Print out the list of State, Count order in ascending order by count.
    * */

    public static void main(String[] args) {

        ArrayList<Data> users = new ArrayList<>();
        for (String line : Data.users) {
            users.add(new Data(line));
        }
        HashMap<String, Integer> usersInState = new HashMap<String, Integer>();
        for (Data user : users) {
            Integer current = usersInState.getOrDefault(user.state, 0);
            usersInState.put(user.state, current + 1);
        }

        List<Map.Entry<String, Integer>> list = new ArrayList<Map.Entry<String, Integer>>(usersInState.entrySet());
        list.sort(new Comparator<Map.Entry<String, Integer>>() {
            @Override
            public int compare(Map.Entry<String, Integer> o1, Map.Entry<String, Integer> o2) {
                return o1.getValue() - o2.getValue();
            }
        });

        for (Map.Entry<String, Integer> entry : list) {
            System.out.println(entry.getKey() + ": " + entry.getValue());
        }
    }
}