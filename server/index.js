import express from 'express';
import cors from 'cors';
import { predictor } from './predictor.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Initialize model on startup
predictor.loadModel();

// Single Prediction Endpoint (Inference)
app.post('/api/predict/single', async (req, res) => {
  try {
    console.log(`[API] Received inference request for single entry`);
    const result = await predictor.predict(req.body);
    res.json(result);
  } catch (error) {
    console.error(`[ERROR] Inference failed:`, error);
    res.status(500).json({ error: 'Inference engine error' });
  }
});

// Bulk Prediction Endpoint
app.post('/api/predict/bulk', async (req, res) => {
  try {
    const dataArray = req.body;
    console.log(`[API] Received bulk inference request: ${dataArray.length} entries`);
    
    if (!Array.isArray(dataArray)) {
      return res.status(400).json({ error: 'Input must be a feature array' });
    }

    const results = await Promise.all(dataArray.map(async (data, index) => {
      const pred = await predictor.predict(data);
      return { id: index + 1, ...pred };
    }));

    res.json(results);
  } catch (error) {
    console.error(`[ERROR] Bulk inference failed:`, error);
    res.status(500).json({ error: 'Bulk processing error' });
  }
});

// Model Info Endpoint
app.get('/api/model/info', (req, res) => {
  res.json({
    name: predictor.modelName,
    version: predictor.version,
    trained: predictor.lastTrained,
    accuracy: "91.2%"
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
