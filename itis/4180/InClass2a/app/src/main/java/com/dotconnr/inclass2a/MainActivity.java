package com.dotconnr.inclass2a;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        TextView resultTextView = (TextView) findViewById(R.id.resultTextView);
        EditText inputText = (EditText) findViewById(R.id.inputText);

        ((Button) findViewById(R.id.toMetersButton)).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                try {
                    double input = Double.parseDouble(inputText.getText().toString());
                    double result = input * 0.0254;
                    resultTextView.setText(result + " meters");
                } catch (NumberFormatException e) {
                    Toast.makeText(getApplicationContext(), "Invalid number", Toast.LENGTH_LONG).show();
                }
            }
        });
        ((Button) findViewById(R.id.toFeetButton)).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                try {
                    double input = Double.parseDouble(inputText.getText().toString());
                    double result = input * (1.0/12.0);
                    resultTextView.setText(result + " feet");
                } catch (NumberFormatException e) {
                    Toast.makeText(getApplicationContext(), "Invalid number", Toast.LENGTH_LONG).show();
                }
            }
        });
        ((Button) findViewById(R.id.toMilesButton)).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                try {
                    double input = Double.parseDouble(inputText.getText().toString());
                    double result = input * (1.0/63360.0);
                    resultTextView.setText(result + " miles");
                } catch (NumberFormatException e) {
                    Toast.makeText(getApplicationContext(), "Invalid number", Toast.LENGTH_LONG).show();
                }
            }
        });
        ((Button) findViewById(R.id.clearButton)).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                inputText.setText("");
                resultTextView.setText("");
            }
        });
    }
}