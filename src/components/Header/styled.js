import styled from 'styled-components';

export const HeaderComponent = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
position:fixed;
z-index: 1;
top: 0;
left:0;
right: 0;
height: 70px;
transition: all ease 600ms;
  img{
    height:60%;
    margin: 10px 30px;
  }
  .logo-usuario{
    border-radius:5px
  }

  :hover{

  }

  .black{
    background-color: #141414;
    width:inherit;
    height: inherit
  }
`;
