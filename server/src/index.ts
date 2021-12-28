import dotenv from 'dotenv';
import { httpServer } from './http';
import './webSocket';

dotenv.config();

httpServer.listen(process.env.PORT, () => {
  console.log(`server runing port ${process.env.PORT}`);
})
