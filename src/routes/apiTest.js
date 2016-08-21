// @flow

import { Router } from 'express';

var router = Router();

// GET test API
router.get('/test', (req: Object, res: Object) => {
    res.send('Hello from test API');
});

export default router;
