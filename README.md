# 🎓 Student Academic Performance Prediction & Management System

A full-stack machine learning application designed to analyze, evaluate, and predict student academic performance using multiple Machine Learning models.

The system provides an interactive dashboard for exploring student data, comparing ML model performance, analyzing important academic factors, and generating predictions through a user-friendly interface.

---

## 📌 Project Overview

**Student Academic Performance Prediction & Management System** is developed to support data-driven analysis of student academic outcomes.

The system combines a modern React-based frontend with a backend prediction service to:

* Analyze student academic and behavioral data
* Evaluate multiple Machine Learning algorithms
* Compare model performance using evaluation metrics
* Identify important factors affecting student performance
* Predict student academic outcomes based on input data
* Present analytical results through interactive dashboards

---

## ✨ Key Features

### 📊 Analytics Dashboard

* Model performance overview
* Accuracy and F1-score analysis
* Student performance distribution
* Dataset statistics
* Interactive data visualizations

### 🤖 Machine Learning Model Evaluation

The system evaluates and compares:

* Logistic Regression
* Random Forest
* Support Vector Machine (SVM)
* K-Nearest Neighbors (KNN)

### 🔍 Model Comparison

Provides a comparative view of different ML models using metrics such as:

* Accuracy
* Precision
* Recall
* F1-Score

### 📈 Data Visualization

The dashboard includes visual analysis for:

* Model performance
* Grade distribution
* Feature importance
* Student academic trends
* Prediction results

### ⚡ Student Performance Predictor

Users can enter student-related academic and behavioral information and generate a performance prediction through the prediction system.

### 🎨 Modern User Interface

* Responsive React interface
* Dark-themed dashboard
* Glassmorphism-inspired UI
* Interactive components
* Smooth animations
* Clean navigation

---

## 🧠 Machine Learning

The project evaluates different classification algorithms to determine how effectively student academic performance can be predicted.

### Models

| Model               | Description                                                              |
| ------------------- | ------------------------------------------------------------------------ |
| Logistic Regression | Linear classification algorithm suitable for binary classification       |
| Random Forest       | Ensemble learning algorithm based on multiple decision trees             |
| SVM                 | Classification algorithm that finds an optimal decision boundary         |
| KNN                 | Instance-based algorithm that predicts based on neighboring observations |

### Evaluation Metrics

The models are evaluated using:

* **Accuracy** – Overall proportion of correct predictions
* **Precision** – Proportion of predicted positive cases that are actually positive
* **Recall** – Proportion of actual positive cases correctly identified
* **F1-Score** – Harmonic mean of precision and recall

---

## 🛠️ Technology Stack

### Frontend

* React 19
* Vite
* JavaScript
* HTML5
* CSS3
* Recharts
* Framer Motion
* Lucide React

### Backend / ML

* Node.js
* Python
* Machine Learning
* Scikit-learn
* Pandas
* NumPy

### Data & Model

* CSV Dataset
* Jupyter Notebook
* Trained Machine Learning Models
* JSON-based evaluation metrics

---

## 📂 Project Structure

```text
student-performance-prediction-management-system/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── MetricCard.jsx
│   │   └── Sidebar.jsx
│   │
│   ├── pages/
│   │   ├── Auth.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Comparison.jsx
│   │   └── Predictor.jsx
│   │
│   ├── data/
│   │   └── modelsData.js
│   │
│   ├── App.jsx
│   ├── App.css
│   └── index.css
│
├── server/
│   ├── data/
│   │   └── raw/
│   │
│   ├── metrics/
│   │   └── latest_evaluation.json
│   │
│   ├── models/
│   │   └── random_forest_v1.2.pkl
│   │
│   ├── notebooks/
│   │   └── eda_student_performance.ipynb
│   │
│   ├── scripts/
│   │   └── data_cleaning.py
│   │
│   ├── index.js
│   ├── predictor.js
│   ├── model_trainer.py
│   ├── requirements.txt
│   └── Dockerfile
│
├── sample_students.csv
├── package.json
├── vite.config.js
├── README.md
└── RUNNING_GUIDE.md
```

---

## 📦 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/Sivaranjani170305/student-performance-prediction-management-system.git
```

### 2. Navigate to the Project

```bash
cd student-performance-prediction-management-system
```

### 3. Install Frontend Dependencies

```bash
npm install
```

### 4. Install Backend / ML Dependencies

Navigate to the server directory:

```bash
cd server
```

Install the required Python packages:

```bash
pip install -r requirements.txt
```

---

## ▶️ How to Run

### Start the Frontend

From the project root:

```bash
npm run dev
```

Then open:

```text
http://localhost:5173
```

### Start the Backend

Open another terminal and navigate to:

```bash
cd server
```

Then start the backend service according to the configuration provided in `RUNNING_GUIDE.md`.

---

## 📊 Dataset

The project uses student academic and behavioral data for performance analysis and prediction.

Example factors include:

* Study Time
* Absences
* Previous Failures
* Academic Grades
* Student-related behavioral attributes

The dataset is processed before being used for Machine Learning model training and evaluation.

---

## 🔬 Model Evaluation Workflow

```text
Student Dataset
       ↓
Data Cleaning & Preprocessing
       ↓
Feature Preparation
       ↓
Model Training
       ↓
Model Evaluation
       ↓
Accuracy / Precision / Recall / F1-Score
       ↓
Model Comparison
       ↓
Student Performance Prediction
       ↓
Dashboard Visualization
```

---

## 📈 Application Modules

### 🔐 Authentication

Provides a dedicated authentication interface for accessing the application.

### 📊 Dashboard

Displays important analytical information and model performance metrics.

### ⚖️ Model Comparison

Allows users to compare the performance of different Machine Learning algorithms.

### 🔮 Predictor

Provides an interactive interface for generating student performance predictions.

---

## 🎯 Project Objectives

* To analyze student academic performance using historical data
* To evaluate multiple Machine Learning algorithms
* To compare model performance using standard evaluation metrics
* To identify important factors associated with student outcomes
* To provide an interactive prediction system
* To present Machine Learning results through an accessible dashboard

---

## 🔮 Future Enhancements

* Student management module
* Advanced student performance reports
* Early identification of students requiring academic support
* Additional Machine Learning algorithms
* Automated model retraining
* Cloud deployment
* Database integration
* Role-based access control
* Advanced analytics and reporting

---

## 📸 Screenshots

Screenshots of the application can be added here to showcase:

* Login page
* Dashboard
* Model comparison
* Prediction page
* Analytics and visualizations

---

## 👩‍💻 Author

**Sivaranjani S**

Computer Science Engineering

GitHub: [Sivaranjani170305](https://github.com/Sivaranjani170305)

---

## 📄 License

This project is developed for academic and educational purposes.

---

⭐ If you find this project useful, consider giving the repository a star.
