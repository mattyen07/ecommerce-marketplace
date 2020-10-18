var express = require('express');
const databaseHelpers = require('../helpers/databaseGet');

var router = express.Router();

router.get('/', async function(req, res) {
    let shops = await databaseHelpers.getShops();
    res.status(200).send(shops);
});

module.exports = router;
