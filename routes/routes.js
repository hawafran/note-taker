// Dependencies
const fs = require("fs");

// imported 'uuid' npm package for unique id
const { v4: uuidv4 } = require('uuid');
const path = require('path');


module.exports = function (app) {

    // API GET Request
    app.get("/api/notes", (request, response) => {
     let data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
        
       
        response.json(data);
    });


    // API POST Request
    app.post("/api/notes", (request, response) => {

     
        const newNote = request.body;
        
        newNote.id = uuidv4();


        let data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    
        
        data.push(newNote);

    
        fs.writeFileSync('./db/db.json', JSON.stringify(data));

        // Send response
        response.json(data);
    });


    // API DELETE request
    app.delete("/api/notes/:id", (request, response) => {

        
        let noteId = request.params.id.toString();

        
        let data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));


        const newData = data.filter( note => note.id.toString() !== noteId );

        
        fs.writeFileSync('./db/db.json', JSON.stringify(newData));

        // Send response
        response.json(newData);
    });

            app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'))
    });
        app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/home.html'

))
});

};

