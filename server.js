// Dependencies

const express = require('express');
const path = require('path');

// Sets up the Express App

const app = express();
const PORT = process.env.PORT || 8000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const notes = [];



// Routes

// Basic route that sends the user first to the AJAX Page
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, './public/notes.html')));
app.get('*', (req, res) => res.sendFile(path.join(__dirname, './public/home.html')));
app.get('/api/notes', (req, res) => res.json(notes));

// Displays all tables



// Create New note - takes in JSON input
app.post('/api/notes', (req, res) => {
  const newNote = req.body;
  newNote.routeName = newNote.name.replace(/\s+/g, '').toLowerCase();
  console.log(newNote);
  tables.push(newTable);

  res.json(newTable);
});

// Starts the server to begin listening

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
