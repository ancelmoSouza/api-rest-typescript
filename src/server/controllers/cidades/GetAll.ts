import { Request, RequestHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup';


interface IQueryProps {
  page?: number,
  limit?: number,
  filter?: string,
}


export const getAll = async (req: Request<{}, {}, {}, IQueryProps>, res: Response) => {

  console.log(req.query);

  return res.send({ 'option': 'Create' });
};