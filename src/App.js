import React, { useEffect, useState } from 'react';
import Data from './Data/index';

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
        <p>{e.title}</p>
      ))}
    </>
  );
}

export default App;
