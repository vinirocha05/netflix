import React from 'react';

import { MovieList } from './styled';

export default function MovieRow({ title, itens }) {
  return (
    <MovieList>
      <h2>{title}</h2>
      <div className="movieRow--listarea">
        {itens.data.results.length > 0 && itens.data.results.map((e) => (
          <img src={`https://image.tmdb.org/t/p/w300${e.poster_path}`} alt="" />
        ))}
      </div>
    </MovieList>
  );
}
