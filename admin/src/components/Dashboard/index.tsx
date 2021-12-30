import { useState, ChangeEvent } from 'react';
import io from 'socket.io-client';

import { Container, Content, InputControl, SelectControl, Controls } from "./style";
import { VideoInformations } from '../../types/interfacesVideos';
import { validData } from '../../helpers/validateVideo';


export const Dashboard = () =>{
  const [informations, setInformations] = useState<VideoInformations>({
    link:"",
    type:""
  });

  const handleInput = (e: ChangeEvent<HTMLInputElement>) =>{
    const {value} = e.target;
    setInformations({...informations, link: value})
  }

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) =>{
    const {value} = e.target;
    setInformations({...informations, type: value})
  }

  
  const handleSubmit = async () =>{
    try {
      if(validData(informations)){
        const socket = io("http://localhost:5000");
        socket.emit("video", informations);
        socket.on("video", data => {
          if(validData(data)){
            alert('Video Salvo')
            setInformations({
              link:'',
              type:''
            })
          }else{
           alert('Erro ao salvar vídeo')
          }
        });
      }else{
        throw new Error('Tipo ou Link do vídeo inválido')
      }
    } catch (error:any) {
      alert(error.message)
    }
  }

  return(
    <Container>
      <h1>Insira o link e selecione o tipo do video</h1>
      <Content>
        <InputControl>
          <label htmlFor="link">Link</label>
          <input type="text" id='Link' onChange={handleInput} value={informations.link} />
        </InputControl>
        <SelectControl>
          <label htmlFor="type">Tipo</label>
          <select name="type" id="type" onChange={handleSelect} value={informations.type}>
            <option value=""></option>
            <option value="playlist">Playlist</option>
            <option value="live">Ao vivo</option>
            <option value="common">Comum</option>
          </select>
        </SelectControl>
        <Controls>
          <button onClick={handleSubmit} type="button">Enviar</button>
        </Controls>
      </Content>
    </Container>
  )
}