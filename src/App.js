import React, { useEffect, useState } from 'react';
import Data from './Data/index';

import MovieRow from './components/MovieRow';

function App() {
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    const loadAll = async () => {
      const list = await Data.getHomeList();
      setMovieList(list);
    };
    loadAll();
  }, []);
  return (
    <>
      {movieList.map((e) => (
        <MovieRow key={e.slug} title={e.title} itens={e.itens} />
      ))}
    </>
  );
}

export default App;
