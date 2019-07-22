import { Router } from 'express';

const router = Router();

// fallback for not existing API
router.use((req: Object, res: Object) => {
  res.status(404).send('API does not exist\n');
});

export default router;
