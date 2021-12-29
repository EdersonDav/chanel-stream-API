import { Router } from "express";
import { IVideos } from "../@types/videos.types";
import { emit } from "../webSocket";

const videosRoutes = Router();

const validTypes = ['playlist', 'live', 'common'];

const isValidHttpUrl = (data: string) => {
  let url;

  try {
    url = new URL(data);
  } catch (_) {
    return false;
  }

  return url.protocol === "http:" || url.protocol === "https:";
}

videosRoutes.post('/', (req, res) => {
  const video: IVideos = req.body;
  try {
    if (!validTypes.includes(video.type)) {
      throw new Error('tipo de vídeo inválido')
    }
    if (!isValidHttpUrl(video.link)) {
      throw new Error('link de vídeo inválido')
    }
    console.log(video);
    emit(video)
    res.json({ message: 'ok' });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
})

export { videosRoutes }
