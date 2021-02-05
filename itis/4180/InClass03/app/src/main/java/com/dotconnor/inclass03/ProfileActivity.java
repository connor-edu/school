package com.dotconnor.inclass03;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.widget.TextView;

public class ProfileActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_profile);
        Intent intent = getIntent();
        Profile profile = (Profile) intent.getSerializableExtra("profile");
        ((TextView) findViewById(R.id.nameLabel)).setText(profile.name);
        ((TextView) findViewById(R.id.emailLabel)).setText(profile.email);
        ((TextView) findViewById(R.id.idLabel)).setText(profile.id);
        ((TextView) findViewById(R.id.deptLabel)).setText(profile.department);
    }
}