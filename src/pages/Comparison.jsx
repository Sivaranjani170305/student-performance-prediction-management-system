import React from 'react';
import { motion } from 'framer-motion';
import { modelsData } from '../data/modelsData';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from 'recharts';
import './Comparison.css';

const Comparison = () => {
  return (
    <div className="comparison-page animate-fade-in">
      <header className="page-header">
        <div>
          <h1>Model <span className="gradient-text">Comparison</span></h1>
          <p>Side-by-side performance analysis of various algorithms.</p>
        </div>
      </header>

      <div className="comparison-chart glass-panel">
        <h3>Performance <span className="gradient-text">Metrics</span></h3>
        <p>Comparison of Accuracy, Precision, Recall and F1-Score.</p>
        <div className="chart-wrapper">
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={modelsData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
              <XAxis dataKey="name" stroke="rgba(255,255,255,0.4)" fontSize={12} />
              <YAxis stroke="rgba(255,255,255,0.4)" fontSize={12} domain={[0, 1]} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#0f172a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
              />
              <Legend />
              <Bar dataKey="accuracy" name="Accuracy" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              <Bar dataKey="precision" name="Precision" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
              <Bar dataKey="recall" name="Recall" fill="#ec4899" radius={[4, 4, 0, 0]} />
              <Bar dataKey="f1Score" name="F1-Score" fill="#10b981" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="comparison-table-container glass-panel">
        <h3>Detailed <span className="gradient-text">Stats</span></h3>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Model Name</th>
                <th>Processing</th>
                <th>Complexity</th>
                <th>Accuracy</th>
                <th>F1-Score</th>
              </tr>
            </thead>
            <tbody>
              {modelsData.map((model, idx) => (
                <tr key={idx}>
                  <td>
                    <div className="table-model-name">
                      <div className="model-dot" style={{ backgroundColor: model.color }}></div>
                      {model.name}
                    </div>
                  </td>
                  <td>{model.processingTime}</td>
                  <td>
                    <span className={`complexity-badge ${model.complexity.toLowerCase()}`}>
                      {model.complexity}
                    </span>
                  </td>
                  <td>{(model.accuracy * 100).toFixed(1)}%</td>
                  <td>{(model.f1Score * 100).toFixed(1)}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Comparison;
