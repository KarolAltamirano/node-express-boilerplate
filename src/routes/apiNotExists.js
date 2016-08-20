// @flow

import { Router } from 'express';

var router = Router();

// fallback for not existing API
router.use((req: Object, res: Object) => {
    res.status(500);
    res.send('API does not exist');
});

module.exports = router;
