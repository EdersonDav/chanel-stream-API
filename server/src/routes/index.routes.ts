import { Router } from "express";
import { videosRoutes } from "./videos.routes";

const routes = Router();

routes.use('/videos', videosRoutes)

export { routes };
