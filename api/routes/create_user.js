var express = require('express');
const databaseHelpers = require('../helpers/databaseCreate');

var router = express.Router();

/* POST create a new user */
/**
 * BODY params:
 *  {
 *      Name: string,
 *      Email (uuid): string,
 *      Password: string
 *  }
 */
router.post('/', async function(req, res, next) {
    if (await databaseHelpers.createUser(req.body.name, req.body.email, req.body.password, req.body.storeOwner) === -1) {
        res.status(400).json({
            status: 400,
            message: 'Missing name or email or password!'
        });
        return;
    };
    res.status(200).send('Success!');
});

module.exports = router;
