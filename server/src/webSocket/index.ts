import { IVideos } from '../@types/videos.types';
import { io } from '../http'
let emit: any;

io.on('connection', socket => {
  console.log(socket.id);
  emit = (data: IVideos) => {
    io.emit('video', data)
  }
})

export { emit }
