import { Router } from 'express';

var router = Router();

// GET test API
router.get('/test', (req, res) => {
    res.send('Hello from test API');
});

module.exports = router;
