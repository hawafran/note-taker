const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routes/apiroutes')(app);
require('./routes/html*routes')(app);

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));