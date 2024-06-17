import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";


interface IParamProps {
  id?: number;
}


export const deleteById = async (req: Request<IParamProps>, res: Response) => {
  console.log(req.params);

  if (Number(req.params.id) === 99999) return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
    errors: {
      default: 'Registro nao encontrado'
    }
  });

  return res.status(StatusCodes.NO_CONTENT).send();
}