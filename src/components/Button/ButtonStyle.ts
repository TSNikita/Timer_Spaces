import styled from "styled-components";


export const ButtonStyle = styled.button `
  width: 150px;
  height: 40px;
  background-color: transparent;
  border-radius: 5px;
  border: 1px solid darkgoldenrod;
  color: darkblue;
  cursor: pointer;

  
  &:hover {
    background-color: lightblue;
    color: white;
    border: none;
  }
`