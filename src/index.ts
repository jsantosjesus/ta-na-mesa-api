import { server } from "./server/Server";
import { initializeApp } from 'firebase-admin/app';

const app = initializeApp();


server.listen(process.env.PORT, () => console.log('Rodando'));