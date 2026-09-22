# 🎓 Student Academic Performance Prediction Evaluation

A sophisticated analytics dashboard designed to evaluate, compare, and visualize the performance of various Machine Learning models in predicting student academic outcomes. This application provides insights into model accuracy, precision, recall, and feature importance to help educators identify at-risk students.

## 🚀 Overview

The **EDU Predictor** platform analyzes student behavioral data and historical grades to provide a data-driven approach to educational support. By comparing multiple algorithms, the tool helps in selecting the most reliable model for performance forecasting.

## ✨ Key Features

- **📊 Comprehensive Dashboard**: At-a-glance view of model performance metrics and data distribution.
- **⚖️ Model Comparison**: Side-by-side evaluation of Logistic Regression, Random Forest, SVM, and KNN.
- **📈 Advanced Visualizations**:
  - Model Performance Radar Charts
  - Accuracy & F1-Score Comparisons
  - Feature Importance Rankings (Absences, Failures, Study Time, etc.)
  - Grade Distribution Analysis
- **⚡ Real-time Predictor**: Interactive interface to test model predictions with custom inputs.
- **🎨 Premium UI/UX**: Modern dark-themed design with smooth glassmorphism effects and Framer Motion animations.

## 🛠️ Technology Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Data Visualization**: [Recharts](https://recharts.org/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Styling**: Vanilla CSS3 (Custom Design System)

## 📦 Installation

Follow these steps to set up the project locally:

1. **Clone the repository** (if applicable) or navigate to the project directory.
2. **Ensure you have Node.js installed** (Version 18 or higher recommended).
3. **Install dependencies**:
   ```bash
   npm install
   ```

## 🏃 如何运行 (How to Run)

### Development Mode
To start the development server with Hot Module Replacement (HMR):
```bash
npm run dev
```
After running this command, open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build
To create a production-ready bundle in the `dist` folder:
```bash
npm run build
```

### Preview Production
To preview the production build locally:
```bash
npm run preview
```

## 📂 Project Structure

- `src/components`: Reusable UI components (Sidebar, Cards, etc.)
- `src/pages`: Main application views (Dashboard, Comparison, Predictor)
- `src/data`: Mock data and model performance metrics
- `src/assets`: Static assets and images

## 🤖 Models Evaluated

The application compares the following algorithms:
- **Logistic Regression**: Linear model for binary classification.
- **Random Forest**: Ensemble learning method for high-accuracy classification.
- **SVM (Support Vector Machine)**: Effective for high-dimensional spaces.
- **KNN (K-Nearest Neighbors)**: Simple, instance-based learning algorithm.

---
Developed for evaluating student academic performance prediction models.
