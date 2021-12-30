import { IVideos } from '../@types/videos.types';
import { validData } from '../helpers/validateVideo';
import { io } from '../http'


io.on('connection', socket => {
  socket.on('video', (data) => {
    console.log(data);
    if (!validData(data)) {
      io.emit('video', 'error')
    }
    io.emit('video', data)
  })
})
