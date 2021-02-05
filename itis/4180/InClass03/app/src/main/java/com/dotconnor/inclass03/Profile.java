package com.dotconnor.inclass03;

import java.io.Serializable;

public class Profile implements Serializable {
    public String name;
    public String email;
    public String id;
    public String department;
    Profile(String name, String email, String id, String department) {
        this.name = name;
        this.email = email;
        this.id = id;
        this.department = department;
    }
}
