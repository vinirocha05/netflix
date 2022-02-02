import styled from 'styled-components';

export const MovieRow = styled.div`
  margin-bottom:30px;
  h2{
    margin: 0 0 5px 30px
  }
`;

export const MovieList = styled.div`
  width:10000px;
`;

export const MovieListItem = styled.div`
  display: inline-block;
  width:150px;
  cursor: pointer;

  img{
    width:100%;
    transform: scale(0.9);
    transition: all ease 500ms

  }

  img:hover{
    transform: scale(1)
  }
`;

export const ListArea = styled.div`
  overflow-x: hidden;
`;

export const ButtonLeft = styled.div`
`;
