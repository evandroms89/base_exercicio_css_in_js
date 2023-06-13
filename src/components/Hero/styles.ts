import styled from 'styled-components'

export const ImagemCapa = styled.div`
  height: 360px;
  width: 100%;
  background-image: url('https://cdn.pixabay.com/photo/2018/08/10/15/45/woman-3597101_1280.jpg');
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    height: auto;
    padding: 24px 0;
  }
`

export const SobreCapa = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.corPrincipal};
  content: '';
  opacity: 0.7;
`
export const Container = styled.div`
  position: relative;
  color: #eee;
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`
export const Titulo = styled.h2`
  font-family: Gloock, serif;
  font-size: 48px;

  @media (max-width: 768px) {
    font-size: 30px;
    max-width: 80%;
    margin: 0 auto;
  }
`