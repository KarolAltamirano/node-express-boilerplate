// @flow

import { Router } from 'express';

var router = Router();

// GET test API
router.get('/test', (req: any, res: any) => {
    res.send('Hello from test API');
});

module.exports = router;
