const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Parse JSON bodies
app.use(express.json());

// (Optional) Safe even if serving same origin
app.use(cors());

// Serve frontend statically
const FRONTEND_DIR = path.join(__dirname, '../frontend');
app.use(express.static(FRONTEND_DIR));

// Path to registrations file
const filePath = path.join(__dirname, 'registrations.json');

// Helpers to read/write JSON safely
function readRegistrations() {
  try {
    if (!fs.existsSync(filePath)) return [];
    const data = fs.readFileSync(filePath, 'utf8');
    return data ? JSON.parse(data) : [];
  } catch (err) {
    console.error('Read error:', err);
    return [];
  }
}

function writeRegistrations(arr) {
  fs.writeFileSync(filePath, JSON.stringify(arr, null, 2));
}

// Root -> index.html
app.get('/', (_req, res) => {
  res.sendFile(path.join(FRONTEND_DIR, 'index.html'));
});

// Register route
app.post('/register', (req, res) => {
  const { name, email } = req.body || {};

  if (!name || !email) {
    return res.status(400).json({ message: 'Name and email are required.' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'Invalid email format.' });
  }

  const registrations = readRegistrations();

  const entry = {
    name: String(name).trim(),
    email: String(email).trim(),
    date: new Date().toISOString() // useful for the View page
  };

  try {
    registrations.push(entry);
    writeRegistrations(registrations);
    console.log('New Registration:', entry);
    return res.status(200).json({ message: 'Registration successful!', entry });
  } catch (err) {
    console.error('Write error:', err);
    return res.status(500).json({ message: 'Error saving registration.' });
  }
});

// List registrations
app.get('/registrations', (_req, res) => {
  const registrations = readRegistrations();
  res.json(registrations);
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
