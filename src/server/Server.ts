import express from "express";
import 'dotenv/config';
import cors from 'cors';

import { router } from "./routes";

const server = express();

server.use(express.json());

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://ta-na-mesa-cliente.vercel.app');
    res.header("methods", "GET,HEAD,PUT,PATCH,POST,DELETE");
    res.header("Access-Control-Allow-Headers", 'Content-Type');

    const corsOptions = {
        origin: 'https://ta-na-mesa-cliente.vercel.app', // Seu domínio Vercel
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Métodos permitidos
        allowedHeaders: ['Content-Type', 'Authorization'], // Cabeçalhos permitidos
        credentials: true // Permitir cookies
      };

    server.use(cors(corsOptions));

    next();
});

server.use(router);


export { server };