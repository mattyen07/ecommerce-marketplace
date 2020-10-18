const express = require('express');
const databaseHelpers = require('../helpers/databaseCreate');

const router = express.Router();

/* POST create a new shop */
router.post('/', function(req, res) {
    databaseHelpers.createUser(req.body.name, req.body.email);
    databaseHelpers.createShop(req.body);
    res.status(200).send('Success!');
});

module.exports = router;
