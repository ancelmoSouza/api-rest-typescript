import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

interface IParamProps {
  id?: number;
}

interface IBodyProps {
  nome: string;
}

export const updateById = async (req: Request<IParamProps, {}, IBodyProps>, res: Response) => {
  if (Number(req.params.id) === 99999) return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
    errors: {
      default: 'Registro nao encontrado'
    }
  });

  return res.status(StatusCodes.NO_CONTENT).send();
}