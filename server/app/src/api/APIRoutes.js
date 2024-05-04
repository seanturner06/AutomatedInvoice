const express = require('express');
const cookieParser = require('cookie-parser');

const apiRouter = express.Router();

apiRouter.use(cookieParser());
apiRouter.use(express.json());

const { TokenMiddleware, generateToken, removeToken } = require('../middleware/TokenMiddleware');

/************\
* API ROUTES *
\************/

const InvoiceDAO = require('./db/InvoiceDAO');
const UserDAO = require('./db/UserDAO');

// Get all invoices 
apiRouter.get('/invoices', TokenMiddleware, (req, res) => {
    InvoiceDAO.getAllInvoices()
        .then(invoices => {
            res.json(invoices);
        })
        .catch(err => {
            console.log(err);
            res.status(400).send(err);
        });
});

// Add an invoice to the invoice list
apiRouter.post('/invoices', TokenMiddleware, (req, res) => {
    let invoice = req.body;
    InvoiceDAO.addInvoice(invoice)
        .then(invoice => {
            res.json(invoice);
        })
        .catch(err => {
            console.log(err);
            res.status(400).send(err);
        });
});

// Authentication routes
apiRouter.post('/users/login', (req, res) => {
    if (req.body.username && req.body.password) {
        UserDAO.getUserByCredentials(req.body.username, req.body.password).then(user => {
            let result = {
                user: user
            }

            generateToken(req, res, user);

            res.json(result);
        }).catch(err => {
            res.status(400).json({ error: err });
        });
    }
    else {
        res.status(401).json({ error: 'Not authenticated' });
    }
});

apiRouter.post('/users/logout', (req, res) => {
    removeToken(req, res);

    res.json({ success: true });
});

apiRouter.get('/users/current', TokenMiddleware, (req, res) => {
    res.json(req.user);
});

module.exports = apiRouter;
