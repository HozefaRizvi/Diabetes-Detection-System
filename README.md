# DiabEaseDetect


## Introduction

DiabEaseDetect is a web application developed for diabetes prediction using various machine learning techniques. The project aims to provide users with a user-friendly interface to assess their risk of diabetes based on input parameters.

## Features

- **Welcome Page:** Introduction to the DiabEaseDetect project.
- **Diagnose Page:** Form for users to input relevant health data for diabetes prediction.
- **Understanding Page:** Information about diabetes and its implications.
- **Cause Page:** Insights into the causes of diabetes.
- **Symptoms Page:** Overview of common symptoms associated with diabetes.
- **Treatment Page:** Information about diabetes management and treatment.
- **About Page:** Details about the project, its contributors, and acknowledgments.

## Tech Stack

- **Front End:** React JS
- **Back End:** Python Flask
- **Machine Learning Algorithms:**
  - K-Nearest Neighbor (KNN)
  - Logistic Regression (LR)
  - Decision Tree (DT)
  - Support Vector Machine (SVM)
  - Naïve Bayes (NB)
  - Random Forest (RF)
- **Primary Algorithm:** Support Vector Machine (SVM)

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/DiabEaseDetect.git
2. **Install node modules for front end :**

   ```bash
   npm install
3. **After that run the front end **

   ```bash
   npm start
4. **Make new terminal for running backend and run:**

   ```bash
   pip install -r requirements.txt
5. **After that Run the app.py file debug it **

   ```bash
   In VS Code CTRL+F5  for debug start
6. **Now app is running on some url:**

   ```bash
   copy the url and paste it in Front End src/Views/DiabteseForm.js in the handleformsubmit function go to fetch method and paste the url like this: 
   fetch('http://127.0.0.1:5000/predict')
  
