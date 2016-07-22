import { Router } from 'express';

var router = Router();

router.get('/', function (req, res) {
    res.send('Hello World');
});

module.exports = router;
