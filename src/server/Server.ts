import express from "express";
import 'dotenv/config';
import cors from 'cors';

import { router } from "./routes";

const server = express();

server.use(express.json());

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header("methods", "GET,HEAD,PUT,PATCH,POST,DELETE");
    res.header("Access-Control-Allow-Headers", 'Content-Type');

    server.use(cors());

    next();
});

server.use(router);


export { server };