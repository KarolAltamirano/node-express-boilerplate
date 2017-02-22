// @flow

import { Router } from 'express';

const router = Router();

// fallback for not existing API
router.use((req: Object, res: Object) => {
    res.status(404);
    res.send('API does not exist');
});

export default router;
