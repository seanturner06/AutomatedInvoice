const express = require('express');
const cookieParser = require('cookie-parser');

const apiRouter = express.Router();

apiRouter.use(cookieParser());
apiRouter.use(express.json());

const { TokenMiddleware, generateToken, removeToken } = require('../middleware/TokenMiddleware');

/************\
* API ROUTES *
\************/


module.exports = apiRouter;
