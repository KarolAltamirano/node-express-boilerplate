import { Router } from 'express';

var router = Router();

router.get('/test', (req, res) => {
    res.send('Hello from test API');
});

module.exports = router;
