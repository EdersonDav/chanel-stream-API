import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  h1{
    margin-top: 200px;
  }
  
  
`
export const Content = styled.div`
  max-width: 600px;
  padding: 0 30px 30px;
  border: 1px solid #ddd;
  border-radius: 16px;
  margin-top: 50px;
  background: #fff;
  >div{
    width: 100%;
    display: flex;
    align-items: center;
    margin-top: 30px;
  }
  label{
    font-size: 22px;
    margin-right: 15px;
  }
`

export const InputControl = styled.div`
  input{
    padding: 5px;
    font-size: 20px;
  }
`

export const SelectControl = styled.div`
  select{
    padding: 5px;
    font-size: 20px;
  }
`

export const Controls = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  button{
    border: 0;
    background-color: #55CD60;
    padding: 15px;
    border-radius: 16px;
    font-size: 18px;
    color: #fff;
    font-weight: 600;
  }
`