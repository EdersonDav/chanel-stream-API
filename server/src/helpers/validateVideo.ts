import { IVideos } from '../@types/videos.types';
import { isValidHttpUrl } from "./validateUrl"
const typeArray = ['playlist', 'live', 'common']

export const validData = (data: IVideos) => {
  return typeArray.includes(data.type) && isValidHttpUrl(data.link)
}
