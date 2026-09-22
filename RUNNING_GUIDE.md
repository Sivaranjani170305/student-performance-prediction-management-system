# 🚀 Execution Guide: Student Academic Performance Predictor

This guide explains how to set up and run the application on a new computer after unzipping the project folder.

## 📋 Prerequisites

Ensure you have the following installed:
- **Node.js** (Version 18.0 or higher)
- **npm** (comes with Node.js)

---

## 🛠️ Step 1: Frontend Setup

1. Open a terminal or command prompt.
2. Navigate to the root folder of the project.
3. Install the frontend dependencies:
   ```bash
   npm install
   ```
4. Start the frontend development server:
   ```bash
   npm run dev
   ```
5. The frontend will be running at: `http://localhost:5173` (or the URL shown in your terminal).

---

## ⚙️ Step 2: Backend Setup (Crucial)

Since this is a full-stack application, the backend server **must** be running for the predictions to work.

1. Open a **second** terminal window.
2. Navigate into the `server` directory:
   ```bash
   cd server
   ```
3. Install the backend dependencies:
   ```bash
   npm install
   ```
4. Start the backend server:
   ```bash
   node index.js
   ```
5. The backend will be running at: `http://localhost:3000`. You should see `[ML] Model loaded successfully` in the terminal.

---

## 🔍 Note on Project Structure

This project is organized as a professional Machine Learning production environment. You will see several folders in the `server` directory:

- **`models/`**: Contains the trained model weights.
- **`notebooks/`**: Exploratory Data Analysis (EDA) and research notebooks.
- **`scripts/`**: Data cleaning and preprocessing pipelines.
- **`data/`**: Raw and processed student datasets.
- **`metrics/`**: Model evaluation and accuracy reports.

> **Note**: The Python files (`.py`) and notebooks (`.ipynb`) are provided for research and documentation purposes. The main application runs entirely on the **Node.js Express server** inside the `server` folder.

---

## ✅ Troubleshooting

- **Predictions not working?** Ensure the backend server is running in a separate terminal.
- **Port already in use?** If port 3000 or 5173 is busy, close any other running servers and try again.
- **Dependencies error?** Delete `node_modules` and run `npm install` again in both the root and `server` folders.
