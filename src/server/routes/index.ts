import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

const router = Router();

router.get('/', (req, res) => {
    return res.status(StatusCodes.ACCEPTED).json({ 'ok': true });
});

router.post('/teste', (req, res) => {
    console.log(req.body);
    return res.status(StatusCodes.UNAUTHORIZED).json(req.body);
    // return res.send({
    //     status: "success",
    //     msg: "Ola, dev!"
    // });
})



export { router };