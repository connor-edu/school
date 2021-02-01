package com.dotconnr.hw01;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.text.Editable;
import android.text.TextWatcher;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.RadioGroup;
import android.widget.SeekBar;
import android.widget.TextView;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        RadioGroup tipPercent = (RadioGroup) findViewById(R.id.tipPercent);

        tipPercent.setOnCheckedChangeListener(new RadioGroup.OnCheckedChangeListener() {
            @Override
            public void onCheckedChanged(RadioGroup group, int checkedId) {
                double percent = getTipPercent(checkedId);
                if (percent != -1) {
                    updateTip(percent);
                }
            }
        });

        SeekBar customTipAmount = (SeekBar) findViewById(R.id.customTipAmount);
        TextView customTipAmountLabel = (TextView) findViewById(R.id.customTipAmountLabel);

        customTipAmount.setOnSeekBarChangeListener(new SeekBar.OnSeekBarChangeListener() {
            @Override
            public void onProgressChanged(SeekBar seekBar, int progress, boolean fromUser) {
                customTipAmountLabel.setText(progress + "%");
                double percent = getTipPercent(tipPercent.getCheckedRadioButtonId());
                if (percent != -1) {
                    updateTip(percent);
                }
            }

            @Override
            public void onStartTrackingTouch(SeekBar seekBar) {

            }

            @Override
            public void onStopTrackingTouch(SeekBar seekBar) {

            }
        });

        ((EditText) findViewById(R.id.billTotalInput)).addTextChangedListener(new TextWatcher() {
            @Override
            public void beforeTextChanged(CharSequence s, int start, int count, int after) {

            }
            @Override
            public void onTextChanged(CharSequence s, int start, int before, int count) {

            }
            @Override
            public void afterTextChanged(Editable s) {
                double percent = getTipPercent(tipPercent.getCheckedRadioButtonId());
                if (percent != -1) {
                    updateTip(percent);
                }
            }
        });

        ((Button) findViewById(R.id.exitButton)).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                finish();
            }
        });
    }

    double getTipPercent(int checkedId) {
        switch (checkedId) {
            case R.id.tip10: {
                return .1;
            }
            case R.id.tip15: {
                return .15;
            }
            case R.id.tip18: {
               return .18;
            }
            case R.id.tipCustom: {
                SeekBar custom = (SeekBar) findViewById(R.id.customTipAmount);
                return (double)custom.getProgress() / 100;
            }
            default: {
                Toast.makeText(getApplicationContext(), "Unknown tip option.", Toast.LENGTH_LONG).show();
                return -1;
            }
        }
    }

    void updateTip(double percent) {
        EditText subtotalInput = (EditText) findViewById(R.id.billTotalInput);
        double subtotal;
        try {
            subtotal = Double.parseDouble(subtotalInput.getText().toString());
        } catch (NumberFormatException e) {
            Toast.makeText(getApplicationContext(), "Invalid bill total.", Toast.LENGTH_LONG).show();
            return;
        }

        double tip = subtotal * percent;
        double total = subtotal + tip;

        TextView tipLabel = (TextView) findViewById(R.id.tipAmount);
        TextView totalLabel = (TextView) findViewById(R.id.billTotal);

        tipLabel.setText(String.format("%.2f", tip));
        totalLabel.setText(String.format("%.2f", total));
    }
}