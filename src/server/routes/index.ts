import { CidadesController } from './../controllers/cidades/index';
import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

const router = Router();

router.get('/', (req, res) => {
  return res.status(StatusCodes.ACCEPTED).json({ 'ok': true });
});

router.post('/cidades', CidadesController.createBodyValidator, CidadesController.create);
router.get('/cidades', CidadesController.getAll);
router.get('/cidades/:id', CidadesController.getById);
router.put('/cidades/:id', CidadesController.updateById);
router.delete('/cidades/:id', CidadesController.deleteById);

export { router };