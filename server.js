// Dependencies

const express = require('express');
const path = require('path');

// Sets up the Express App

const app = express();
const PORT = process.env.PORT || 8000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname, './public'));
app.use(express.json());


// Basic route that sends the user first to the AJAX Page

app.use('/notes', (req, res) => res.sendFile(path.join(__dirname, './public/notes.html')));
app.use('*', (req, res) => res.sendFile(path.join(__dirname, './public/home.html')));
app.use('/api/notes', (req, res) => res.json(notes));
// Create New note - takes in JSON input
app.post('/api/notes', (req, res) => {
  const newNote = req.body;
  newNote.routeName = newNote.name.replace(/\s+/g, '').toLowerCase();
  console.log(newNote);
  notes.push(newNotes);

  res.json(newNotes);
});

// Starts the server to begin listening
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
