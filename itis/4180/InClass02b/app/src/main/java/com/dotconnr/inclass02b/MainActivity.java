package com.dotconnr.inclass02b;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Context;
import android.os.Bundle;
import android.view.View;
import android.view.inputmethod.InputMethodManager;
import android.widget.Button;
import android.widget.EditText;
import android.widget.RadioGroup;
import android.widget.TextView;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        TextView resultTextView = (TextView) findViewById(R.id.resultTextView);
        EditText inputText = (EditText) findViewById(R.id.inputText);
        RadioGroup selectedOptions = (RadioGroup) findViewById(R.id.options);

        ((Button) findViewById(R.id.convert)).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                // Use this very ugly way to dismiss the keyboard when the button is presssed.
                InputMethodManager imm = (InputMethodManager)getSystemService(Context.INPUT_METHOD_SERVICE);
                imm.hideSoftInputFromWindow(inputText.getWindowToken(), 0);

                // Find the id of the currently selected radio button.
                int id = selectedOptions.getCheckedRadioButtonId();
                // Fast check to see if a option isn't selected.
                if (id == -1) {
                    Toast.makeText(getApplicationContext(), "Select an option", Toast.LENGTH_LONG).show();
                    return;
                }
                // If the selected option is to clear, then we clear all inputs.
                if (id == R.id.clearAll) {
                    resultTextView.setText("");
                    inputText.setText("");
                    selectedOptions.clearCheck();
                    return;
                }
                // Try to convert the input into a double.
                double input;
                try {
                    input = Double.parseDouble(inputText.getText().toString());
                } catch (NumberFormatException e) {
                    Toast.makeText(getApplicationContext(), "Invalid number", Toast.LENGTH_LONG).show();
                    return;
                }
                // Convert the input used the selected radio buttion.
                String output = "";
                switch (id) {
                    case R.id.toMeters: {
                        output = new Double((input * 0.0254)) + " meters";
                        break;
                    }
                    case R.id.toFeet: {
                        output = (input * (1.0/12.0)) + " feet";
                        break;
                    }
                    case R.id.toMiles: {
                        output = (input * (1.0/63360.0)) + " miles";
                        break;
                    }
                    default: {
                        Toast.makeText(getApplicationContext(), "Select an option", Toast.LENGTH_LONG).show();
                        return;
                    }
                }
                resultTextView.setText(output);
            }
        });
    }
}