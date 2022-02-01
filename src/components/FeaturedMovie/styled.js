import styled from 'styled-components';

export const Featured = styled.div`
  min-height: 100vh;
  background-size: cover;
  background-position: center;
  margin-bottom: -80px;

`;

export const TransparenciaVertical = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(to top, #111 10%, transparent 90%);
`;

export const TransparenciaHorizontal = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(to right, #111 20%, transparent 80%);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-left:30px;
  margin-top: -50px
`;

export const FeaturedName = styled.div`
  font-size: 60px;
  font-weight: bold;
`;

export const FeaturedInfo = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-top: 15px;
  .featured-points {
    color: #46d369;
  }
  .featured-year,
  .featured-temps,
  .featured-points {
    display: inline-block;
    margin-right: 15px;
  }
`;

export const MovieDescription = styled.div`
  margin-top: 15px;
  font-size: 20px;
  color: #999;
  max-width: 40%;
`;

export const FeaturedButtons = styled.div`
  button {
    margin-top: 15px;
    padding: 12px 25px;
    border: none;
    border-radius: 5px;
    font-size: 18px;
    font-weight: bold;
    display: inline-block;
    margin-right: 10px;
    cursor: pointer;
    opacity: 1;
    transition: all ease 300ms
  }
  .watch {
    background-color: white;
    color: #111;
  }

  .add {
    background-color: #333;
    color: #fff;
  }

  button:hover {
    opacity: 0.7;
  }
`;

export const MovieGenres = styled.div`
  margin-top: 15px;
  font-size:18px;
  color: #999;

`;
