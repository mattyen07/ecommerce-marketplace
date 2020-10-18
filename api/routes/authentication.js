var express = require('express');
const databaseHelpers = require('../helpers/databaseGet');

var router = express.Router();

router.post('/', async function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    let email = req.body.email;
    let password = req.body.password;

    let userData = await databaseHelpers.getUser(email);
    if (userData.password === password) {
        res.status(200).send('Success!');
    } else {
        res.status(401).send('Password Incorrect');
    }
});

module.exports = router;
