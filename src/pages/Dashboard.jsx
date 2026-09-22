import React from 'react';
import { motion } from 'framer-motion';
import { Target, Zap, Clock, TrendingUp } from 'lucide-react';
import MetricCard from '../components/MetricCard';
import { modelsData, featureImportance, dataDistribution } from '../data/modelsData';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend 
} from 'recharts';
import './Dashboard.css';

const Dashboard = () => {
  const bestModel = modelsData.reduce((prev, current) => 
    (prev.accuracy > current.accuracy) ? prev : current
  );

  const COLORS = ['#3b82f6', '#8b5cf6', '#ec4899', '#10b981', '#f59e0b'];

  return (
    <div className="dashboard-page animate-fade-in">
      <header className="page-header">
        <div>
          <h1>Insights & <span className="gradient-text">Overview</span></h1>
          <p>Real-time evaluation of machine learning models for student success.</p>
        </div>
        <div className="best-model-badge glass-panel">
          <Zap size={16} fill="#f59e0b" color="#f59e0b" />
          <span>Top Performer: <strong>{bestModel.name}</strong></span>
        </div>
      </header>

      <div className="metrics-grid">
        <MetricCard 
          title="Overall Accuracy"
          value={bestModel.accuracy * 100}
          unit="%"
          icon={<Target />}
          description="Highest accuracy achieved by the champion model."
          trend={{ value: 2.4, positive: true }}
          color="#3b82f6"
        />
        <MetricCard 
          title="Avg. Processing Time"
          value={24}
          unit="ms"
          icon={<Clock />}
          description="Mean inference time across all evaluated models."
          trend={{ value: 12, positive: true }}
          color="#8b5cf6"
        />
        <MetricCard 
          title="Model Count"
          value={modelsData.length}
          unit=""
          icon={<Zap />}
          description="Different algorithms evaluated for performance."
          color="#ec4899"
        />
        <MetricCard 
          title="Reliability Score"
          value={88}
          unit="/100"
          icon={<TrendingUp />}
          description="Cross-validated confidence across datasets."
          trend={{ value: 0.8, positive: true }}
          color="#10b981"
        />
      </div>

      <div className="charts-grid secondary">
        <div className="chart-container glass-panel">
          <h3>Feature <span className="gradient-text">Importance</span></h3>
          <p>Key indicators contributing to student performance.</p>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={featureImportance} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" horizontal={false} />
                <XAxis type="number" hide />
                <YAxis dataKey="feature" type="category" stroke="rgba(255,255,255,0.4)" fontSize={12} width={100} />
                <Tooltip 
                  cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
                />
                <Bar dataKey="importance" radius={[0, 4, 4, 0]}>
                  {featureImportance.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="chart-container glass-panel">
          <h3>Data <span className="gradient-text">Distribution</span></h3>
          <p>Spread of student results in testing phase.</p>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={dataDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="count"
                  nameKey="grade"
                >
                  {dataDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
                />
                <Legend iconType="circle" />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
