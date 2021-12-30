import { VideoInformations } from "../types/interfacesVideos"
import { isValidHttpUrl } from "./validateUrl"

const typeArray = ['playlist', 'live', 'common']

export const validData = (data: VideoInformations) => {
  return typeArray.includes(data.type) && isValidHttpUrl(data.link)
}
