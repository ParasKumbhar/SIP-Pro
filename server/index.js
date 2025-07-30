const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Utility function to save data to JSON file
function saveData(filename, data) {
  const filePath = path.join(__dirname, filename);
  let existingData = [];
  if (fs.existsSync(filePath)) {
    const fileContent = fs.readFileSync(filePath);
    existingData = JSON.parse(fileContent);
  }
  existingData.push(data);
  fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2));
}

// Subscribe endpoint
app.post('/api/subscribe', (req, res) => {
  const { email } = req.body;
  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Invalid email address' });
  }
  try {
    saveData('subscribers.json', { email, date: new Date().toISOString() });
    res.json({ message: 'Subscription successful' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to save subscription' });
  }
});

// Contact endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }
  if (!email.includes('@')) {
    return res.status(400).json({ error: 'Invalid email address' });
  }
  try {
    saveData('contacts.json', { name, email, message, date: new Date().toISOString() });
    res.json({ message: 'Message received. We will get back to you soon.' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to save message' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
