import React from 'react';

import { MovieList } from './styled';

export default function MovieRow({ title, itens }) {
  return (
    <MovieList>
      <h2>{title}</h2>
      <ul>
        {itens.data.results.map((e) => (
          <li key={e.id}>{e.title}</li>
        ))}

      </ul>
    </MovieList>
  );
}
