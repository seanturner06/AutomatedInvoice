const express = require('express');
require('dotenv').config();

const app = express();
const cors = require('cors');
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200
};
app.use(cors(corsOptions));
const routes = require('./src/routes');
app.use(routes);

// Ask our server to listen for incoming connections
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));