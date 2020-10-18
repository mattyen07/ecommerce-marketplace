var express = require('express');
const databaseHelpers = require('../helpers/databaseGet');

var router = express.Router();

router.post('/', async function(req, res) {
    
    let shops = await databaseHelpers.getShops();
    res.status(200).send(shops);
});

module.exports = router;
