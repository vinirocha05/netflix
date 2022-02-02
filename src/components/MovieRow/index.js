import React from 'react';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import {
  ListArea, MovieList, MovieListItem, MovieRow, ButtonLeft,
} from './styled';

export default function MovieRowList({ title, itens }) {
  return (
    <MovieRow>
      <h2>{title}</h2>
      <ButtonLeft>
        <NavigateBeforeIcon />
      </ButtonLeft>
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
