import React from 'react';
import { motion } from 'framer-motion';
import './MetricCard.css';

const MetricCard = ({ title, value, unit, icon, description, trend, color }) => {
  return (
    <motion.div 
      className="metric-card glass-panel"
      whileHover={{ y: -5, boxShadow: '0 12px 40px rgba(0,0,0,0.4)' }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="metric-header">
        <div className="metric-icon" style={{ backgroundColor: `${color}20`, color: color }}>
          {icon}
        </div>
        {trend && (
          <div className={`metric-trend ${trend.positive ? 'up' : 'down'}`}>
            {trend.value}%
          </div>
        )}
      </div>
      
      <div className="metric-content">
        <h3 className="metric-value">
          {value}
          <span className="metric-unit">{unit}</span>
        </h3>
        <p className="metric-title">{title}</p>
        <p className="metric-desc">{description}</p>
      </div>
      
      <div className="metric-footer" style={{ background: color }}></div>
    </motion.div>
  );
};

export default MetricCard;
