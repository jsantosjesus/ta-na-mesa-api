import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup';
import { validation } from "../../shared/middlewares/Validation";

interface IMessage {
    deviceToken: String,
    title: String,
    body: String
}


export const createValidation = validation((getSchema) => ({
    body: getSchema<IMessage>(yup.object().shape({
      deviceToken: yup.string().required().min(3),
      title: yup.string().required().min(3),
      body: yup.string().required().min(3),
    }))
  }));

export const create = async (req: Request<{}, {}, IMessage>, res: Response) => {

    console.log(req.body);
    return res.status(StatusCodes.CREATED).json(123);

}