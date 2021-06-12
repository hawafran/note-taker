This is a note taker app that allows the user to add notes to a list.
The app is deployed via heroku 8000.
GET /notes returns the notes.html file and get/* returns the home.html file. the db.'/POST api/notes' recieves the new notes, and the json file is read via get '/api/notes'. The UUID module is able to give each input an individual ID. 
there is currently an error with the CSS styling, which express.static was not able to resolve. there is also an issue with the new-note icon, which an event listener was not able to resove.  