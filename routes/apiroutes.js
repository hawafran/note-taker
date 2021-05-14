const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const saveNoteBtn = document.getElementById('save-note');

saveNoteBtn.addEventListener('click', (e) => {
    e.preventDefault();
module.exports = app => {
    // read json file
    let notes = JSON.parse(fs.readFileSync('./db/db.json'));
    // get api request
    app.get('/api/notes', (req, res) => {
        return res.JSON(path.join(notes));
    },
    // api post request 
    app.post('/api/notes', (req, res) => {
        const newNote= req.body;
        // assign unique ID to every input
        newNote.id = uuidv4();
        let data = JSON.parse(fs.readFileSync("./db/db.json"));
        // writes input to db.json file
        fs.writeFile('./db/db.json', JSON.stringify(notes));
        response.json(notes);
    })

)};
});