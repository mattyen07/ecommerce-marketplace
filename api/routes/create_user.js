var express = require('express');
const databaseHelpers = require('../helpers/databaseCreate');

var router = express.Router();

/* POST create a new user */
/**
 * BODY params:
 *  {
 *      Name: string,
 *      Email (uuid): string,
 *  }
 */
router.post('/create_user', function(req, res, next) {
    // databaseHelpers.createUser(req.body.name, req.body.email);
    res.send('Success!');
});

module.exports = router;
