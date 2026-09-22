import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Send, RefreshCw, AlertCircle, UploadCloud, FileText } from 'lucide-react';
import Papa from 'papaparse';
import './Predictor.css';

const Predictor = () => {
  const [mode, setMode] = useState('single'); // 'single' or 'bulk'
  
  // Single Prediction State
  const [formData, setFormData] = useState({
    studyTime: 2, failures: 0, absences: 5, health: 3, g1: 12, g2: 12
  });
  const [prediction, setPrediction] = useState(null);
  const [isPredicting, setIsPredicting] = useState(false);

  // Bulk Prediction State
  const [csvFile, setCsvFile] = useState(null);
  const [bulkResults, setBulkResults] = useState([]);
  const [isBulkPredicting, setIsBulkPredicting] = useState(false);

  // Calculation moved to server


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: parseInt(value) }));
  };

  const handlePredict = async (e) => {
    e.preventDefault();
    setIsPredicting(true);
    setPrediction(null);
    
    try {
      const response = await fetch('/api/predict/single', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const result = await response.json();
      setPrediction(result);
    } catch (error) {
      console.error("Prediction Error:", error);
    } finally {
      setIsPredicting(false);
    }
  };

  const resetForm = () => {
    setFormData({ studyTime: 2, failures: 0, absences: 5, health: 3, g1: 12, g2: 12 });
    setPrediction(null);
  };

  // Bulk Handlers
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCsvFile(file);
      setBulkResults([]);
    }
  };

  const handleBulkPredict = () => {
    if (!csvFile) return;
    setIsBulkPredicting(true);
    setBulkResults([]);

    Papa.parse(csvFile, {
      header: true,
      skipEmptyLines: true,
      complete: async (results) => {
        try {
          const response = await fetch('/api/predict/bulk', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(results.data)
          });
          const predictions = await response.json();
          setBulkResults(predictions);
        } catch (error) {
          console.error("Bulk Prediction Error:", error);
        } finally {
          setIsBulkPredicting(false);
        }
      },
      error: (error) => {
        console.error("CSV Parse Error:", error);
        setIsBulkPredicting(false);
      }
    });
  };

  return (
    <div className="predictor-page animate-fade-in">
      <header className="page-header">
        <div>
          <h1>Performance <span className="gradient-text">Predictor</span></h1>
          <p>Estimate student outcomes based on behavioral and academic factors.</p>
        </div>
        <div className="mode-toggle">
          <button className={`toggle-btn ${mode === 'single' ? 'active' : ''}`} onClick={() => setMode('single')}>Single Entry</button>
          <button className={`toggle-btn ${mode === 'bulk' ? 'active' : ''}`} onClick={() => setMode('bulk')}>Bulk Import</button>
        </div>
      </header>

      {mode === 'single' ? (
        <div className="predictor-container">
          <form className="predictor-form glass-panel" onSubmit={handlePredict}>
            <div className="form-grid">
              <div className="input-group">
                <label>Study Time (hrs/week)</label>
                <input type="number" name="studyTime" min="0" max="20" value={formData.studyTime} onChange={handleInputChange} />
              </div>
              <div className="input-group">
                <label>Previous Failures</label>
                <input type="number" name="failures" min="0" max="5" value={formData.failures} onChange={handleInputChange} />
              </div>
              <div className="input-group">
                <label>Absences</label>
                <input type="number" name="absences" min="0" max="100" value={formData.absences} onChange={handleInputChange} />
              </div>
              <div className="input-group">
                <label>Health Status (1-5)</label>
                <input type="number" name="health" min="1" max="5" value={formData.health} onChange={handleInputChange} />
              </div>
              <div className="input-group">
                <label>G1 Period Grade</label>
                <input type="number" name="g1" min="0" max="20" value={formData.g1} onChange={handleInputChange} />
              </div>
              <div className="input-group">
                <label>G2 Period Grade</label>
                <input type="number" name="g2" min="0" max="20" value={formData.g2} onChange={handleInputChange} />
              </div>
            </div>

            <div className="form-actions">
              <button type="button" className="btn-secondary" onClick={resetForm}>
                <RefreshCw size={18} /> Reset
              </button>
              <button type="submit" className="btn-primary" disabled={isPredicting}>
                {isPredicting ? (
                  <> <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1 }}><RefreshCw size={18} /></motion.div> Processing...</>
                ) : (
                  <> <Send size={18} /> Run Prediction</>
                )}
              </button>
            </div>
          </form>

          <div className="prediction-result-container">
            <AnimatePresence mode="wait">
              {!prediction && !isPredicting && (
                <motion.div key="empty" className="empty-state glass-panel" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <AlertCircle size={48} color="rgba(255,255,255,0.1)" />
                  <p>Input student data and run the predictor to see results.</p>
                </motion.div>
              )}
              {isPredicting && (
                <motion.div key="loading" className="loading-state glass-panel" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <div className="loader grad-bg"></div>
                  <p>Analyzing patterns...</p>
                </motion.div>
              )}
              {prediction && (
                <motion.div key="result" className="result-card glass-panel" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: "spring", damping: 12 }}>
                  <div className="result-header">
                    <div className="sparkle-icon grad-bg"><Sparkles size={20} /></div>
                    <h3>Analysis Complete</h3>
                  </div>
                  <div className="result-body">
                    <div className="status-badge" data-status={prediction.status}>{prediction.status}</div>
                    <div className="confidence-meter">
                      <div className="meter-label">
                        <span>Model Confidence</span>
                        <span>{(prediction.confidence * 100)}%</span>
                      </div>
                      <div className="meter-bar">
                        <motion.div className="meter-fill grad-bg" initial={{ width: 0 }} animate={{ width: `${prediction.confidence * 100}%` }}></motion.div>
                      </div>
                    </div>
                    <div className="prediction-summary">
                      <p>Based on the Random Forest model, this student is categorized as <strong>{prediction.status}</strong> with a quantified score of <strong>{prediction.score}</strong>.</p>
                    </div>
                    {prediction.metadata && (
                      <div className="model-metadata">
                        <div className="meta-item">
                          <span className="meta-label">Model Version</span>
                          <span className="meta-value">{prediction.metadata.modelVersion}</span>
                        </div>
                        <div className="meta-item">
                          <span className="meta-label">Inference Time</span>
                          <span className="meta-value">{prediction.metadata.inferenceTimeMs}ms</span>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      ) : (
        <div className="bulk-predictor-container animate-fade-in">
          <div className="bulk-upload-card glass-panel">
            <div className="upload-area">
              <UploadCloud size={48} color="rgba(255,255,255,0.5)" />
              <h3>Upload CSV Data</h3>
              <p>Upload a CSV containing: studyTime, failures, absences, health, g1, g2</p>
              <input type="file" accept=".csv" onChange={handleFileUpload} id="csv-upload" className="hidden-input" />
              <label htmlFor="csv-upload" className="btn-secondary upload-label">Choose File</label>
              {csvFile && <div className="file-info"><FileText size={16} /> {csvFile.name}</div>}
            </div>
            <div className="form-actions" style={{ marginTop: '24px', justifyContent: 'center' }}>
              <button onClick={handleBulkPredict} className="btn-primary" disabled={!csvFile || isBulkPredicting}>
                {isBulkPredicting ? (
                  <> <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1 }}><RefreshCw size={18} /></motion.div> Processing...</>
                ) : (
                  <> <Send size={18} /> Run Bulk Prediction</>
                )}
              </button>
            </div>
          </div>

          {bulkResults.length > 0 && (
            <motion.div className="bulk-results-card glass-panel" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h3>Bulk Prediction Results</h3>
              <div className="table-responsive">
                <table className="results-table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Study Time</th>
                      <th>Failures</th>
                      <th>Absences</th>
                      <th>G1</th>
                      <th>G2</th>
                      <th>Score</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bulkResults.map((row) => (
                      <tr key={row.id}>
                        <td>{row.id}</td>
                        <td>{row.name || 'Unknown'}</td>
                        <td>{row.studyTime}</td>
                        <td>{row.failures}</td>
                        <td>{row.absences}</td>
                        <td>{row.g1}</td>
                        <td>{row.g2}</td>
                        <td><strong>{row.score}</strong></td>
                        <td><span className="status-badge-small" data-status={row.status}>{row.status}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}
        </div>
      )}
    </div>
  );
};

export default Predictor;
