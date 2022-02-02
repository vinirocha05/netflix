import styled from 'styled-components';

export const MovieRow = styled.div`
  margin-bottom: 30px;
  h2 {
    margin: 0 0 5px 30px;
  }

`;

export const MovieList = styled.div`
  width: 10000px;
  margin: 0 10px;
`;

export const MovieListItem = styled.div`
  display: inline-block;
  width: 150px;
  cursor: pointer;

  img {
    width: 100%;
    transform: scale(0.9);
    transition: all ease 500ms;
  }

  img:hover {
    transform: scale(1);
  }
`;

export const ListArea = styled.div`
  overflow-x: hidden;

`;

export const ButtonLeft = styled.div`
  position: absolute;
  width: 40px;
  height: 225px;
  left: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0,0,0,0.5);
  overflow:hidden;
  cursor: pointer;
  transition: all ease 500ms;
  opacity: 0;
  :hover{
    opacity: 1;
  }
`;

export const ButtonRight = styled.div`
  position: absolute;
  width: 40px;
  height: 225px;
  right: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0,0,0,0.5);
  overflow:hidden;
  cursor: pointer;
  transition: all ease 500ms;
  opacity: 0;
  :hover{
    opacity: 1;
  }

;
`;
