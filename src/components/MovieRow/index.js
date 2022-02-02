import React from 'react';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import {
  ListArea, MovieList, MovieListItem, MovieRow, ButtonLeft, ButtonRight,
} from './styled';

export default function MovieRowList({ title, itens }) {
  const handleLeftArrow = () => {
    console.log('Oii');
  };

  return (
    <MovieRow>
      <h2>{title}</h2>
      <ButtonLeft>
        <NavigateBeforeIcon style={{ fontSize: 50 }} onClick={handleLeftArrow} />
      </ButtonLeft>
      <ButtonRight>
        <NavigateNextIcon style={{ fontSize: 50 }} />
      </ButtonRight>
      <ListArea>
        <MovieList>
          {itens.data.results.length > 0 && itens.data.results.map((e, key) => (
            <MovieListItem key={key}>
              <img src={`https://image.tmdb.org/t/p/w300${e.poster_path}`} alt={e.original_title} />
            </MovieListItem>
          ))}
        </MovieList>
      </ListArea>
    </MovieRow>
  );
}
