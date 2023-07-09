import styled from "styled-components";

export  const HomeStyle = styled.div `
  width: 737px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid bisque;
  border-radius: 5px;
  position: relative;
`

export const TitleHome = styled.h1 `
  font-size: 25px;
  font-weight: 500;
  color: cadetblue;
  margin-bottom: 100px;
`

export const ImgStyle = styled.img`
    width: 150px;
  height: 150px;
  position: absolute;
  right: 10px;
  bottom: 10px;
`

export const BlockButtonHome = styled.div`
height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`