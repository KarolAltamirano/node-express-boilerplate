import { Router } from 'express';

var router = Router();

router.use((req, res) => {
    res.status(500);
    res.send('API does not exist');
});

module.exports = router;
