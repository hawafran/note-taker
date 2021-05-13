const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

module.exports = app => {
    // read json file
    let notes = JSON.parse(fs.readFile('./db/db.json'));
    // get api request
    app.get('/api/notes', (req, res) => {
        return res.JSON(path.join(notes));
    },
    // api post request 
    app.post('/api/notes', (req, res) => {
        const newInput= req.body;
        // assign unique ID to every input
        newInput.id = uuidv4();
        DataCue.push(newInput);
        // writes input to db.json file
        fs.writeFile('./db/db.json', JSON.stringify(notes));
        response.json(notes);
    })

)};