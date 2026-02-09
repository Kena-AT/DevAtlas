const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const conceptsPath = path.join(__dirname, '../data/concepts.json');

const getConcepts = () => {
  const data = fs.readFileSync(conceptsPath, 'utf8');
  return JSON.parse(data);
};

// GET /api/v1/concepts
router.get('/', (req, res) => {
  const concepts = getConcepts();
  res.json({ success: true, data: concepts });
});

// GET /api/v1/concepts/:id
router.get('/:id', (req, res) => {
  const concepts = getConcepts();
  const concept = concepts.find(c => c.id === req.params.id);
  if (!concept) return res.status(404).json({ success: false, message: 'Concept not found' });
  res.json({ success: true, data: concept });
});

module.exports = router;
