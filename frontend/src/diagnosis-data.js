export default {
  "Acidosis" : {
    "ICD-10 Code" : "E872",
    "Diagnosis ID" : 4835,
    "RelevantValues" : {
      "Arterial pH" : {
        "Calculation" : "Minimum",
        "PrimaryDisplay" : true,
        "SecondaryDisplay" : true,
        "Numeric" : true,
        "Normal" : 7.3
      },
      "Venous pH" : {
        "Calculation" : "Minimum",
        "PrimaryDisplay" : true,
        "SecondaryDisplay" : true,
        "Numeric" : true,
        "Normal" : 7.25
      },
      "Bicarbonate" : {
        "Calculation" : "Minimum",
        "PrimaryDisplay" : true,
        "SecondaryDisplay" : true,
        "Numeric" : true,
        "Normal" : 18
      }
    },
    "HCC" : false,
    "Elixhauser" : false,
    "PSI" : false,
    "ROM" : true,
    "Vizient" : false,
    "Revenue" : 1,
    "POA" : true
  },
  "Acute kidney failure" : {
    "ICD-10 Code" : "N17",
    "Diagnosis ID" : 23698,
    "RelevantValues" : {
      "Creatinine" : {
        "Calculation" : "Maximum",
        "PrimaryDisplay" : true,
        "SecondaryDisplay" : true,
        "Numeric" : true,
        "Normal" : 1.25
      },
      "BUN" : {
        "Calculation" : "Maximum",
        "PrimaryDisplay" : true,
        "SecondaryDisplay" : true,
        "Numeric" : true,
        "Normal" : 25
      },
      "eGFR" : {
        "Calculation" : "Minimum",
        "PrimaryDisplay" : true,
        "SecondaryDisplay" : true,
        "Numeric" : true,
        "Normal" : 90
      }
    },
    "HCC" : false,
    "Elixhauser" : true,
    "PSI" : false,
    "ROM" : false,
    "Vizient" : false,
    "Revenue" : 2,
    "POA" : true
  },
  "Acute respiratory failure with hypoxia" : {
    "ICD-10 Code" : "J9601",
    "Diagnosis ID" : 13020,
    "RelevantValues" : {
      "spO2" : {
        "Calculation" : "Minimum",
        "PrimaryDisplay" : true,
        "SecondaryDisplay" : true,
        "Numeric" : true,
        "Normal" : 92
      },
      "Nasal Canula Flow Rate" : {
        "Calculation" : "Maximum",
        "PrimaryDisplay" : true,
        "SecondaryDisplay" : true,
        "Numeric" : true,
        "Normal" : 2
      },
      "Respiratory Rate" : {
        "Calculation" : "Maximum",
        "PrimaryDisplay" : true,
        "SecondaryDisplay" : true,
        "Numeric" : false,
        "Normal" : 20
      },
      "Respiratory Device" : {
        "Calculation" : "none",
        "PrimaryDisplay" : true,
        "SecondaryDisplay" : true,
        "Numeric" : false
      }
    },
    "HCC" : false,
    "Elixhauser" : false,
    "PSI" : true,
    "ROM" : true,
    "Vizient" : true,
    "Revenue" : 3,
    "POA" : true
  },
  "Alcohol depend w alcoh-induce psychotic disorder w hallucin" : {
    "ICD-10 Code" : "F10251",
    "Diagnosis ID" : 4949,
    "RelevantValues" : {
      "Thiamine" : {
        "Calculation" : "none",
        "PrimaryDisplay" : true,
        "SecondaryDisplay" : true,
        "Numeric" : false
      },
      "Benzodiazapines Ordered" : {
        "Calculation" : "none",
        "PrimaryDisplay" : true,
        "SecondaryDisplay" : true,
        "Numeric" : false
      },
      "Anti-psychotics Ordered" : {
        "Calculation" : "none",
        "PrimaryDisplay" : true,
        "SecondaryDisplay" : true,
        "Numeric" : false
      }
    },
    "HCC" : true,
    "Elixhauser" : true,
    "PSI" : false,
    "ROM" : false,
    "Vizient" : false,
    "Revenue" : 2,
    "POA" : true
  },
  "Hyperosmolality and hypernatremia" : {
    "ICD-10 Code" : "E870",
    "Diagnosis ID" : 4833,
    "RelevantValues" : {
      "Sodium" : {
        "Calculation" : "Maximum",
        "PrimaryDisplay" : true,
        "SecondaryDisplay" : true,
        "Numeric" : true,
        "Normal" : 145
      },
      "Osmolality" : {
        "Calculation" : "Maximum",
        "PrimaryDisplay" : true,
        "SecondaryDisplay" : true,
        "Numeric" : true,
        "Normal" : 295
      }
    },
    "HCC" : false,
    "Elixhauser" : true,
    "PSI" : false,
    "ROM" : false,
    "Vizient" : false,
    "Revenue" : 1,
    "POA" : true
  },
  "Hypertensive emergency" : {
    "ICD-10 Code" : "I161",
    "Diagnosis ID" : 10974,
    "RelevantValues" : {
      "Systolic BP" : {
        "Calculation" : "Maximum",
        "PrimaryDisplay" : true,
        "SecondaryDisplay" : true,
        "Numeric" : true,
        "Normal" : 140
      },
      "Diastolic BP" : {
        "Calculation" : "Maximum",
        "PrimaryDisplay" : true,
        "SecondaryDisplay" : true,
        "Numeric" : true,
        "Normal" : 90
      },
      "Troponin" : {
        "Calculation" : "Maximum",
        "PrimaryDisplay" : false,
        "SecondaryDisplay" : true,
        "Numeric" : true,
        "Normal" : 0.02
      },
      "Creatinine" : {
        "Calculation" : "Maximum",
        "PrimaryDisplay" : false,
        "SecondaryDisplay" : true,
        "Numeric" : true,
        "Normal" : 1.25
      }
    },
    "HCC" : true,
    "Elixhauser" : true,
    "PSI" : false,
    "ROM" : false,
    "Vizient" : true,
    "Revenue" : 2,
    "POA" : true
  },
  "Hypo-osmolality and hyponatremia" : {
    "ICD-10 Code" : "E871",
    "Diagnosis ID" : 4834,
    "RelevantValues" : {
      "Sodium" : {
        "Calculation" : "Minimum",
        "PrimaryDisplay" : true,
        "SecondaryDisplay" : true,
        "Numeric" : true,
        "Normal" : 135
      },
      "Osmolality" : {
        "Calculation" : "Maximum",
        "PrimaryDisplay" : true,
        "SecondaryDisplay" : true,
        "Numeric" : true,
        "Normal" : 275
      }
    },
    "HCC" : true,
    "Elixhauser" : true,
    "PSI" : false,
    "ROM" : true,
    "Vizient" : false,
    "Revenue" : 0,
    "POA" : true
  },
  "Hypotension" : {
    "ICD-10 Code" : "I95",
    "Diagnosis ID" : 12536,
    "RelevantValues" : {
      "Systolic BP" : {
        "Calculation" : "Minimum",
        "PrimaryDisplay" : true,
        "SecondaryDisplay" : true,
        "Numeric" : true,
        "Normal" : 90
      },
      "Diastolic BP" : {
        "Calculation" : "Minimum",
        "PrimaryDisplay" : true,
        "SecondaryDisplay" : true,
        "Numeric" : true,
        "Normal" : 60
      },
      "Mean BP" : {
        "Calculation" : "Minimum",
        "PrimaryDisplay" : true,
        "SecondaryDisplay" : true,
        "Numeric" : true,
        "Normal" : 75
      }
    },
    "HCC" : false,
    "Elixhauser" : false,
    "PSI" : false,
    "ROM" : false,
    "Vizient" : true,
    "Revenue" : 3,
    "POA" : true
  },
  "Morbid (severe) obesity due to excess calories" : {
    "ICD-10 Code" : "E6601",
    "Diagnosis ID" : 4534,
    "RelevantValues" : {
      "BMI" : {
        "Calculation" : "Maximum",
        "PrimaryDisplay" : true,
        "SecondaryDisplay" : true,
        "Numeric" : true,
        "Normal" : 30
      }
    },
    "HCC" : true,
    "Elixhauser" : true,
    "PSI" : false,
    "ROM" : false,
    "Vizient" : false,
    "Revenue" : 0,
    "POA" : true
  },
  "Myocardial infarction type 2" : {
    "ICD-10 Code" : "I21A1",
    "Diagnosis ID" : 10996,
    "RelevantValues" : {
      "Troponin" : {
        "Calculation" : "Maximum",
        "PrimaryDisplay" : true,
        "SecondaryDisplay" : true,
        "Numeric" : true,
        "Normal" : 0.02
      }
    },
    "HCC" : false,
    "Elixhauser" : false,
    "PSI" : false,
    "ROM" : true,
    "Vizient" : false,
    "Revenue" : 0,
    "POA" : true
  },
  "Neutropenia" : {
    "ICD-10 Code" : "D70",
    "Diagnosis ID" : 3544,
    "RelevantValues" : {
      "Absolute Neutrophil Count" : {
        "Calculation" : "Minimum",
        "PrimaryDisplay" : true,
        "SecondaryDisplay" : true,
        "Numeric" : true,
        "Normal" : 1.5
      },
      "Neutrophil Percentage" : {
        "Calculation" : "Minimum",
        "PrimaryDisplay" : false,
        "SecondaryDisplay" : true,
        "Numeric" : true,
        "Normal" : 2
      },
      "WBC Count" : {
        "Calculation" : "Minimum",
        "PrimaryDisplay" : false,
        "SecondaryDisplay" : true,
        "Numeric" : true,
        "Normal" : 4
      }
    },
    "HCC" : false,
    "Elixhauser" : true,
    "PSI" : false,
    "ROM" : false,
    "Vizient" : false,
    "Revenue" : 3,
    "POA" : true
  },
  "Opioid dependence" : {
    "ICD-10 Code" : "F112",
    "Diagnosis ID" : 4996,
    "RelevantValues" : {
      "Methadone Dose" : {
        "Calculation" : "Maximum",
        "PrimaryDisplay" : true,
        "SecondaryDisplay" : true,
        "Numeric" : true,
        "Normal" : 0
      }
    },
    "HCC" : true,
    "Elixhauser" : true,
    "PSI" : false,
    "ROM" : false,
    "Vizient" : false,
    "Revenue" : 2,
    "POA" : true
  },
  "Other encephalopathy" : {
    "ICD-10 Code" : "G9349",
    "Diagnosis ID" : 6604,
    "RelevantValues" : {
      "Anti-psychotic Ordered" : {
        "Calculation" : "none",
        "PrimaryDisplay" : true,
        "SecondaryDisplay" : true,
        "Numeric" : false
      },
      "Neuro-assessment Ordered" : {
        "Calculation" : "none",
        "PrimaryDisplay" : true,
        "SecondaryDisplay" : true,
        "Numeric" : false
      },
      "NPO Ordered" : {
        "Calculation" : "none",
        "PrimaryDisplay" : true,
        "SecondaryDisplay" : true,
        "Numeric" : false
      },
      "Dysphagia Ordered" : {
        "Calculation" : "none",
        "PrimaryDisplay" : true,
        "SecondaryDisplay" : true,
        "Numeric" : false
      },
      "1:1 Observation Ordered" : {
        "Calculation" : "none",
        "PrimaryDisplay" : true,
        "SecondaryDisplay" : true,
        "Numeric" : false
      },
      "Delirium diagnosed" : {
        "Calculation" : "none",
        "PrimaryDisplay" : true,
        "SecondaryDisplay" : true,
        "Numeric" : false
      },
      "Alerted mental status diagnosed" : {
        "Calculation" : "none",
        "PrimaryDisplay" : true,
        "SecondaryDisplay" : true,
        "Numeric" : false
      }
    },
    "HCC" : true,
    "Elixhauser" : false,
    "PSI" : false,
    "ROM" : true,
    "Vizient" : false,
    "Revenue" : 2,
    "POA" : false
  },
  "Other forms of acute ischemic heart disease" : {
    "ICD-10 Code" : "I248",
    "Diagnosis ID" : 11017,
    "RelevantValues" : {
      "Troponin" : {
        "Calculation" : "none",
        "PrimaryDisplay" : true,
        "SecondaryDisplay" : true,
        "Numeric" : false,
        "Normal" : 0.02
      }
    },
    "HCC" : true,
    "Elixhauser" : false,
    "PSI" : false,
    "ROM" : false,
    "Vizient" : false,
    "Revenue" : 1,
    "POA" : true
  },
  "Other specified sepsis" : {
    "ICD-10 Code" : "A4189",
    "Diagnosis ID" : 314,
    "RelevantValues" : {
      "Temperature" : {
        "Calculation" : "Maximum",
        "PrimaryDisplay" : true,
        "SecondaryDisplay" : true,
        "Numeric" : true,
        "Normal" : 38
      },
      "Heart Rate" : {
        "Calculation" : "Maximum",
        "PrimaryDisplay" : true,
        "SecondaryDisplay" : true,
        "Numeric" : true,
        "Normal" : 100
      },
      "WBC Count" : {
        "Calculation" : "Maximum",
        "PrimaryDisplay" : true,
        "SecondaryDisplay" : true,
        "Numeric" : true,
        "Normal" : 12
      },
      "Respiratory Rate" : {
        "Calculation" : "Maximum",
        "PrimaryDisplay" : false,
        "SecondaryDisplay" : true,
        "Numeric" : true,
        "Normal" : 20
      }
    },
    "HCC" : false,
    "Elixhauser" : false,
    "PSI" : true,
    "ROM" : false,
    "Vizient" : true,
    "Revenue" : 2,
    "POA" : true
  },
  "Pancytopenia" : {
    "ICD-10 Code" : "D6181",
    "Diagnosis ID" : 3483,
    "RelevantValues" : {
      "WBC Count" : {
        "Calculation" : "Minimum",
        "PrimaryDisplay" : true,
        "SecondaryDisplay" : true,
        "Numeric" : true,
        "Normal" : 4
      },
      "Platelets" : {
        "Calculation" : "Minimum",
        "PrimaryDisplay" : true,
        "SecondaryDisplay" : true,
        "Numeric" : true,
        "Normal" : 150
      },
      "Hemoglobin" : {
        "Calculation" : "Minimum",
        "PrimaryDisplay" : true,
        "SecondaryDisplay" : true,
        "Numeric" : true,
        "Normal" : 12.5
      }
    },
    "HCC" : false,
    "Elixhauser" : false,
    "PSI" : false,
    "ROM" : true,
    "Vizient" : false,
    "Revenue" : 1,
    "POA" : false
  },
  "Pulmonary edema" : {
    "ICD-10 Code" : "J81",
    "Diagnosis ID" : 12912,
    "RelevantValues" : {
      "Lasix dose" : {
        "Calculation" : "Maximum",
        "PrimaryDisplay" : true,
        "SecondaryDisplay" : true,
        "Numeric" : true,
        "Normal" : 0
      },
      "spO2" : {
        "Calculation" : "Minimum",
        "PrimaryDisplay" : true,
        "SecondaryDisplay" : true,
        "Numeric" : true,
        "Normal" : 92
      },
      "Nasal Canula Flow Rate" : {
        "Calculation" : "Maximum",
        "PrimaryDisplay" : true,
        "SecondaryDisplay" : true,
        "Numeric" : true,
        "Normal" : 2
      }
    },
    "HCC" : true,
    "Elixhauser" : false,
    "PSI" : false,
    "ROM" : true,
    "Vizient" : true,
    "Revenue" : 2,
    "POA" : true
  },
  "Thrombocytopenia, unspecified" : {
    "ICD-10 Code" : "D696",
    "Diagnosis ID" : 3541,
    "RelevantValues" : {
      "Platelets" : {
        "Calculation" : "Minimum",
        "PrimaryDisplay" : true,
        "SecondaryDisplay" : true,
        "Numeric" : true,
        "Normal" : 150
      }
    },
    "HCC" : false,
    "Elixhauser" : true,
    "PSI" : false,
    "ROM" : false,
    "Vizient" : false,
    "Revenue" : 1,
    "POA" : true
  },
  "Type 2 diabetes mellitus with hyperglycemia" : {
    "ICD-10 Code" : "E1165",
    "Diagnosis ID" : 4219,
    "RelevantValues" : {
      "Glucose" : {
        "Calculation" : "Maximum",
        "PrimaryDisplay" : true,
        "SecondaryDisplay" : true,
        "Numeric" : true,
        "Normal" : 200
      },
      "a1c" : {
        "Calculation" : "Maximum",
        "PrimaryDisplay" : true,
        "SecondaryDisplay" : true,
        "Numeric" : true,
        "Normal" : 6.5
      },
      "Diabetes diagnosed" : {
        "Calculation" : "none",
        "PrimaryDisplay" : false,
        "SecondaryDisplay" : true,
        "Numeric" : false
      }
    },
    "HCC" : true,
    "Elixhauser" : true,
    "PSI" : false,
    "ROM" : false,
    "Vizient" : false,
    "Revenue" : 1,
    "POA" : true
  },
  "Unspecified severe protein-calorie malnutrition" : {
    "ICD-10 Code" : "E43",
    "Diagnosis ID" : 4466,
    "RelevantValues" : {
      "Albumin" : {
        "Calculation" : "Minimum",
        "PrimaryDisplay" : true,
        "SecondaryDisplay" : true,
        "Numeric" : true,
        "Normal" : 3.2
      },
      "Pre-albumin" : {
        "Calculation" : "Minimum",
        "PrimaryDisplay" : false,
        "SecondaryDisplay" : true,
        "Numeric" : true,
        "Normal" : 28
      },
      "AST" : {
        "Calculation" : "Maximum",
        "PrimaryDisplay" : false,
        "SecondaryDisplay" : true,
        "Numeric" : true,
        "Normal" : 50
      },
      "ALT" : {
        "Calculation" : "Maximum",
        "PrimaryDisplay" : false,
        "SecondaryDisplay" : true,
        "Numeric" : true,
        "Normal" : 50
      }
    },
    "HCC" : false,
    "Elixhauser" : false,
    "PSI" : false,
    "ROM" : true,
    "Vizient" : true,
    "Revenue" : 1,
    "POA" : true
  },
  "Chronic kidney disease, stage 4 (severe)" : {
    "ICD-10 Code" : "N184",
    "Diagnosis ID" : 23708,
    "RelevantValues" : {
      "Creatinine" : {
        "Calculation" : "Minimum",
        "PrimaryDisplay" : true,
        "SecondaryDisplay" : true,
        "Numeric" : true,
        "Normal" : 1.25
      },
      "BUN" : {
        "Calculation" : "Minimum",
        "PrimaryDisplay" : false,
        "SecondaryDisplay" : true,
        "Numeric" : true,
        "Normal" : 25
      },
      "eGFR" : {
        "Calculation" : "Minimum",
        "PrimaryDisplay" : false,
        "SecondaryDisplay" : true,
        "Numeric" : true,
        "Normal" : 90
      }
    },
    "HCC" : true,
    "Elixhauser" : true,
    "PSI" : false,
    "ROM" : true,
    "Vizient" : true,
    "Revenue" : 2,
    "POA" : true
  },
  "Acute kidney failure with tubular necrosis" : {
    "ICD-10 Code" : "N170",
    "Diagnosis ID" : 23699,
    "RelevantValues" : {
      "Creatinine" : {
        "Calculation" : "Maximum",
        "PrimaryDisplay" : true,
        "SecondaryDisplay" : true,
        "Numeric" : true,
        "Normal" : 1.25
      },
      "BUN" : {
        "Calculation" : "Maximum",
        "PrimaryDisplay" : false,
        "SecondaryDisplay" : true,
        "Numeric" : true,
        "Normal" : 25
      },
      "eGFR" : {
        "Calculation" : "Minimum",
        "PrimaryDisplay" : false,
        "SecondaryDisplay" : true,
        "Numeric" : true,
        "Normal" : 90
      }
    },
    "HCC" : true,
    "Elixhauser" : true,
    "PSI" : false,
    "ROM" : true,
    "Vizient" : true,
    "Revenue" : 3,
    "POA" : true
  },
  "Acute kidney failure " : {
    "ICD-10 Code" : "N17",
    "Diagnosis ID" : 23698,
    "RelevantValues" : {
      "Creatinine" : {
        "Calculation" : "Maximum",
        "PrimaryDisplay" : true,
        "SecondaryDisplay" : true,
        "Numeric" : true,
        "Normal" : 1.25
      },
      "BUN" : {
        "Calculation" : "Maximum",
        "PrimaryDisplay" : true,
        "SecondaryDisplay" : true,
        "Numeric" : true,
        "Normal" : 25
      },
      "eGFR" : {
        "Calculation" : "Minimum",
        "PrimaryDisplay" : true,
        "SecondaryDisplay" : true,
        "Numeric" : true,
        "Normal" : 90
      }
    },
    "HCC" : false,
    "Elixhauser" : false,
    "PSI" : false,
    "ROM" : false,
    "Vizient" : false,
    "Revenue" : 0,
    "POA" : true
  },
  "Acute respiratory failure" : {
    "ICD-10 Code" : "J9601",
    "Diagnosis ID" : 13020,
    "RelevantValues" : {
      "spO2" : {
        "Calculation" : "Minimum",
        "PrimaryDisplay" : true,
        "SecondaryDisplay" : true,
        "Numeric" : true,
        "Normal" : 92
      },
      "Nasal Canula Flow Rate" : {
        "Calculation" : "Maximum",
        "PrimaryDisplay" : true,
        "SecondaryDisplay" : true,
        "Numeric" : true,
        "Normal" : 2
      },
      "Respiratory Rate" : {
        "Calculation" : "Maximum",
        "PrimaryDisplay" : true,
        "SecondaryDisplay" : true,
        "Numeric" : false,
        "Normal" : 20
      },
      "Respiratory Device" : {
        "Calculation" : "none",
        "PrimaryDisplay" : true,
        "SecondaryDisplay" : true,
        "Numeric" : false
      }
    },
    "HCC" : false,
    "Elixhauser" : true,
    "PSI" : true,
    "ROM" : true,
    "Vizient" : true,
    "Revenue" : 2,
    "POA" : true
  },
}