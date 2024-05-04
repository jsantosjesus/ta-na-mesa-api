import { Router } from "express"; 
import { MessageController } from "../controllers";

const router = Router();

router.post('/teste', (req, res) => {

    console.log(req.body);
    return res.status(500).send("erro");
});

router.post('/message', MessageController.createValidation, MessageController.create);



export { router };