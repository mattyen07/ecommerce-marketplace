const express = require('express');
const databaseHelpers = require('../helpers/databaseCreate');

const router = express.Router();

/* POST create a new shop */
router.post('/', async function(req, res) {
    if (await databaseHelpers.createShop(req.body) == -1) {
        res.status(400).json({
            status: 400,
            message: 'Missing attribute! Require name, ownerName, email, address, phone'
        });
        return;
    };

    if (await databaseHelpers.createUser(req.body.ownerName, req.body.email, req.body.password) == -1) {
        res.status(400).json({
            status: 400,
            message: 'Missing name or email or password!'
        });
        return;
    };

    res.status(200).send('Success!');
});

module.exports = router;
