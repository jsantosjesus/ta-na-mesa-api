import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup';
import { validation } from "../../shared/middlewares/Validation";
import { EnviarMensagemFirebase } from "../../shared/services/FirebaseMesaging";


interface IMessage {
    deviceToken: string,
    title: string,
    body: string
}


export const createValidation = validation((getSchema) => ({
    body: getSchema<IMessage>(yup.object().shape({
      deviceToken: yup.string().required().min(3),
      title: yup.string().required().min(3),
      body: yup.string().required().min(3),
    }))
  }));

export const create = async (req: Request<{}, {}, IMessage>, res: Response) => {
  

  EnviarMensagemFirebase(req.body.title, req.body.body, req.body.deviceToken).then(() => {
    
    return res.status(StatusCodes.CREATED).json(`Sucesso ao enviar mensagem`);
  })
  .catch((e) => {
    return res.status(StatusCodes.BAD_REQUEST).json(`Erro ao realizar requisição: ${e.message}`);
  });
  


}