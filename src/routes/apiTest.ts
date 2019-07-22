import { Router } from 'express';

const router = Router();

// GET test API
router.get('/test', (req, res) => {
  res.send('Hello from test API\n');
});

export default router;
