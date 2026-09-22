export const modelsData = [
  {
    name: 'Logistic Regression',
    accuracy: 0.82,
    precision: 0.79,
    recall: 0.81,
    f1Score: 0.80,
    processingTime: '12ms',
    complexity: 'Low',
    color: '#3b82f6'
  },
  {
    name: 'Random Forest',
    accuracy: 0.91,
    precision: 0.89,
    recall: 0.92,
    f1Score: 0.90,
    processingTime: '45ms',
    complexity: 'High',
    color: '#8b5cf6'
  },
  {
    name: 'SVM',
    accuracy: 0.88,
    precision: 0.86,
    recall: 0.87,
    f1Score: 0.86,
    processingTime: '28ms',
    complexity: 'Medium',
    color: '#ec4899'
  },
  {
    name: 'KNN',
    accuracy: 0.85,
    precision: 0.83,
    recall: 0.84,
    f1Score: 0.83,
    processingTime: '18ms',
    complexity: 'Low',
    color: '#10b981'
  }
];

export const featureImportance = [
  { feature: 'Absences', importance: 0.35 },
  { feature: 'Failures', importance: 0.28 },
  { feature: 'Study Time', importance: 0.15 },
  { feature: 'G1 Grade', importance: 0.12 },
  { feature: 'G2 Grade', importance: 0.10 }
];

export const dataDistribution = [
  { grade: 'Fail', count: 120 },
  { grade: 'Pass', count: 480 },
  { grade: 'Excellent', count: 200 }
];
