import { Router } from "express";
import { IVideos } from "../@types/videos.types";

const videosRoutes = Router();

const validTypes = ['playlist', 'live', 'common'];

videosRoutes.post('/', (req, res) => {
  const video: IVideos = req.body;
  try {
    if (!validTypes.includes(video.type)) {
      throw new Error('tipo de vídeo inválido')
    }

    console.log(video);
    res.json({ message: 'ok' });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
})

export { videosRoutes }
