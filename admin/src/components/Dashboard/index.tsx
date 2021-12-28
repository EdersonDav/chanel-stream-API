import { Container, Content, InputControl, SelectControl } from "./style"

export const Dashboard = () =>{
  return(
    <Container>
      <h1>Insira o link e selecione o tipo do video</h1>
      <Content>
        <InputControl>
          <label htmlFor="link">Link</label>
          <input type="text" id='Link' />
        </InputControl>
        <SelectControl>
          <label htmlFor="type">Tipo</label>
          <select name="type" id="type">
            <option value=""></option>
            <option value="playlist">Playlist</option>
            <option value="live">Ao vivo</option>
            <option value="common">Comum</option>
          </select>
        </SelectControl>
      </Content>
    </Container>
  )
}