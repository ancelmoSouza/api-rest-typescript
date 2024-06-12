import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

interface IParamProps {
  id?: number;
}

interface IBodyProps {
  nome: string;
}

export const updateById = async (req: Request<IParamProps, {}, IBodyProps>, res: Response) => {
  console.log(req.params);
  console.log(req.body);

  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Nao implementado');
}