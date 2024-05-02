const express = require('express');
require('dotenv').config();

const app = express();

const routes = require('./src/routes');
app.use(routes);

// Ask our server to listen for incoming connections
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));