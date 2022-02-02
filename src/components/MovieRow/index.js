import React, { useState } from 'react';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import {
  ListArea, MovieList, MovieListItem, MovieRow, ButtonLeft, ButtonRight,
} from './styled';

export default function MovieRowList({ title, itens }) {
  const [scrollX, setScrollX] = useState(0);
  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  };
  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    const listWidth = itens.data.results.length * 150;
    if (window.innerWidth - listWidth > x) {
      x = (window.innerWidth - listWidth) - 60;
    }
    setScrollX(x);
  };

  return (
    <MovieRow>
      <h2>{title}</h2>
      <ButtonLeft>
        <NavigateBeforeIcon style={{ fontSize: 50 }} onClick={handleLeftArrow} />
      </ButtonLeft>
      <ButtonRight>
        <NavigateNextIcon style={{ fontSize: 50 }} onClick={handleRightArrow} />
      </ButtonRight>
      <ListArea>
        <MovieList style={{ marginLeft: scrollX, width: itens.data.results.length * 150 }}>
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
