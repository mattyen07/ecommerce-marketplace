const express = require('express');
const databaseHelpers = require('../helpers/databaseCreate');

const router = express.Router();

/* POST create a new shop */
router.post('/', function(req, res) {
    if (databaseHelpers.createUser(req.body.name, req.body.email) == -1) {
        res.status(400).json({
            status: 400,
            message: 'Missing name or email!'
        });
        return;
    };

    if (databaseHelpers.createShop(req.body) == -1) {
        res.status(400).json({
            status: 400,
            message: 'Missing attribute! Require name, ownerName, email, address, phone'
        });
        return;
    };
    res.status(200).send('Success!');
});

module.exports = router;
