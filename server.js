const express = require('express');
const cors = require('cors');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// تست مسیر اصلی
app.get('/', (req, res) => {
  res.send('BRKChain API is running...');
});

// دریافت فرم تماس
app.post('/contact', (req, res) => {
  const { name, email, subject, message } = req.body;
  console.log('Contact form received:', req.body);

  fs.appendFileSync('contacts.log', JSON.stringify(req.body) + '\n');
  res.json({ status: 'success', message: 'Contact form received' });
});

// دریافت قرارداد جدید
app.post('/contracts', (req, res) => {
  const { contractId, role, value, status } = req.body;
  console.log('New contract submission:', req.body);

  fs.appendFileSync('contracts.log', JSON.stringify(req.body) + '\n');
  res.json({ status: 'success', message: 'Contract received' });
});

app.listen(port, () => {
  console.log(`🚀 BRKChain API server is running at http://localhost:${port}`);
});