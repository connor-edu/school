package com.dotconnor.inclass03;

import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.TextView;
import android.widget.Toast;

import org.w3c.dom.Text;

import java.util.regex.Pattern;

public class MainActivity extends AppCompatActivity {

    Pattern emailRegex = Pattern.compile("^[a-zA-Z0-9_+&*-]+(?:\\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,7}$");

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }

    public void onSelectClick(View view) {
        TextView currentDept = (TextView) findViewById(R.id.deptLabel);
        Intent intent = new Intent(this, Department.class);
        intent.putExtra("currentDept", currentDept.getText().toString());
        startActivityForResult(intent, 0);
    }

    public void onSubmitClick(View view) {
        TextView nameInput = findViewById(R.id.nameInput);
        String name = nameInput.getText().toString();
        if (name.length() == 0) {
            Toast.makeText(getApplicationContext(), "Missing name.", Toast.LENGTH_LONG).show();
            return;
        }
        TextView emailInput = findViewById(R.id.emailInput);
        String email = emailInput.getText().toString();
        if (email.length() == 0) {
            Toast.makeText(getApplicationContext(), "Missing email.", Toast.LENGTH_LONG).show();
            return;
        }

        if (!emailRegex.matcher(email).matches()) {
            Toast.makeText(getApplicationContext(), "Invalid email.", Toast.LENGTH_LONG).show();
            return;
        }

        TextView idInput = findViewById(R.id.idInput);
        String id = idInput.getText().toString();
        if (id.length() == 0) {
            Toast.makeText(getApplicationContext(), "Missing id.", Toast.LENGTH_LONG).show();
            return;
        }
        TextView deptLabel = findViewById(R.id.deptLabel);
        String dept = deptLabel.getText().toString();
        if (dept.length() == 0) {
            Toast.makeText(getApplicationContext(), "Missing department.", Toast.LENGTH_LONG).show();
            return;
        }
        Profile profile = new Profile(name, email, id, dept);
        Intent intent = new Intent(this, ProfileActivity.class);
        intent.putExtra("profile", profile);
        startActivity(intent);
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, @Nullable Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        if (resultCode == 1) {
            TextView currentDept = (TextView) findViewById(R.id.deptLabel);
            String dept = data.getStringExtra("dept");
            currentDept.setText(dept);
        }
    }
}