import express from 'express';
import { routes } from "../routes/index.routes";
import http from 'http';
import { Server } from 'socket.io';

const app = express();
app.use(express.json());
app.use(routes);

const httpServer = http.createServer(app);

const io = new Server(httpServer)

export { httpServer, io }
