package com.dotconnor.inclass03;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.RadioButton;
import android.widget.RadioGroup;

public class Department extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_department);
        Intent intent = getIntent();
        String dept = intent.getStringExtra("currentDept");
        if (dept != null) {
            RadioGroup selection = (RadioGroup) findViewById(R.id.departmentSelect);
            switch (dept) {
                case "Computer Science": {
                    selection.check(R.id.csRadio);
                    break;
                }
                case "Software Info. Systems": {
                    selection.check(R.id.sisRadio);
                    break;
                }
                case "Bio Informatics": {
                    selection.check(R.id.bioRadio);
                    break;
                }
                case "Data Science": {
                    selection.check(R.id.dataRadio);
                    break;
                }
            }
        }
    }

    public void onCancelClicked(View view) {
        setResult(0);
        finish();
    }

    public void onSelectClicked(View view) {
        RadioGroup selection = (RadioGroup) findViewById(R.id.departmentSelect);
        String currentDept = (String) ((RadioButton) findViewById(selection.getCheckedRadioButtonId())).getText();
        setResult(1, new Intent().putExtra("dept", currentDept));
        finish();
    }
}