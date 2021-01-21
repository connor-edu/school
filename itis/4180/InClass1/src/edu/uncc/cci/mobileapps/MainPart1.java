// Assignment #1
// MainPart1.java
// Connor Love
// Samuel Garn

package edu.uncc.cci.mobileapps;

import java.util.ArrayList;
import java.util.Comparator;

public class MainPart1 {
    /*
    * Question 1:
    * - In this question you will use the Data.users array that includes
    * a list of users. Formatted as : firstname,lastname,age,email,gender,city,state
    * - Create a User class that should parse all the parameters for each user.
    * - Insert each of the users in a list.
    * - Print out the TOP 10 oldest users.
    * */

    public static void main(String[] args) {

        ArrayList<Data> users = new ArrayList<>();

        for (String line : Data.users) {
            users.add(new Data(line));
        }

        users.sort(new Comparator<Data>(){

            @Override
            public int compare(Data c1, Data c2)
            {
                // ignoring case
                return c2.age - c1.age;
            }
        });


        for (int i = 0; i < 10; i++) {
            System.out.println(users.get(i));
        }
    }
}