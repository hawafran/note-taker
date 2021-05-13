const fs = require('fs');
const path = require('path');

module.exports = app => {
    var notes = JSON.parse(data)
    app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, 'db.json')));
    Response.json(notes)

}
    
