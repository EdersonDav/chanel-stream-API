import { useState, ChangeEvent } from 'react';

import { Container, Content, InputControl, SelectControl, Controls } from "./style"
import { api } from '../../services/api';
interface VideoInformations{
  link: string;
  type: string
}

export const Dashboard = () =>{
  const typeArray = ['playlist', 'live', 'common']
  const [informations, setInformations] = useState<VideoInformations>({
    link:"",
    type:""
  });

  const isValidHttpUrl = (data: string) => {
    let url;
  
    try {
      url = new URL(data);
    } catch (_) {
      return false;
    }
  
    return url.protocol === "http:" || url.protocol === "https:";
  }

  const handleInput = (e: ChangeEvent<HTMLInputElement>) =>{
    const {value} = e.target;
    setInformations({...informations, link: value})
  }

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) =>{
    const {value} = e.target;
    setInformations({...informations, type: value})
  }

  const handleSubmit = async () =>{
    if(typeArray.includes(informations.type) && isValidHttpUrl(informations.link)){
      const response = await api.post('/videos', informations);
      if(response.status === 200){
        alert('Video Salvo')
        setInformations({
          link:'',
          type:''
        })
      }
    }else{
      alert('Tipo ou Link do video inválido')
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