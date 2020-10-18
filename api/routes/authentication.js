var express = require('express');
const databaseHelpers = require('../helpers/databaseGet');

var router = express.Router();

router.post('/', async function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    let email = req.body.email;
    let password = req.body.password;

    let userData = await databaseHelpers.getUser(email);
    if (userData.password === password) {
        let storeData = {};
        if (userData.storeOwner) {
            storeData = await databaseHelpers.getShopFromEmail(userData.email);
        }

        res.status(200).send(storeData);
    } else {
        res.status(401).send('Password Incorrect');
    }
});

module.exports = router;
