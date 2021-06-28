// const express = require("express");
// const app = express();
// const apiRoutes = require('./routes/apiRoutes');
// const htmlRoutes = require('./routes/htmlRoutes')


// // Sets port.
// const PORT = process.env.PORT || 3000;


// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(express.static('public'))

// // ROUTES
// // require('./routes/apiRoutes')(app);
// // require('./routes/htmlRoutes')(app);
// app.use('/api' ,apiRoutes); 
// app.use('/' ,htmlRoutes)

// app.listen(PORT, function() {
//     console.log(`App listening on PORT: ${PORT}`);
// });

const express = require("express");
const fs = require("fs");
const path = require('path');

// Initialize express app
const app = express();
const PORT = process.env.PORT || 3000;

// Setup data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'))


//Require routes file
require('./routes/routes')(app);

// Setup listener
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});  