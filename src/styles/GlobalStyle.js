import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
   margin:0;
  padding: 0;
  outline: none;
  box-sizing: border-box
};
body{
  background-color: #111;
  color: #fff;
  font-family: 'Roboto', 'sans-serif'
}
.loading{
  position: fixed;
  left: 0;
  top:0;
  right:0;
  bottom: 0;
  z-index:99;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
}

`;
