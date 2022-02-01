import React, { useEffect, useState } from 'react';
import Data from './Data/index';
import GlobalStyle from './styles/GlobalStyle';

import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';

function App() {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);

  useEffect(() => {
    const loadAll = async () => {
      // Pegando a lista
      const list = await Data.getHomeList();
      setMovieList(list);

      // Pegando o filme em destaque
      const originals = list.filter((i) => i.slug === 'originals');
      const randomChosen = Math.floor(Math.random() * (originals[0].itens.data.results.length - 1));
      const ChosenVideo = originals[0].itens.data.results[randomChosen];
      const ChosenInfo = await Data.getMovieInfo(ChosenVideo.id, 'tv');
      setFeaturedData(ChosenInfo.data);
    };
    loadAll();
  }, []);
  return (
    <>
      {featuredData && <FeaturedMovie item={featuredData} />}
      {movieList.map((e, key) => (
        <MovieRow title={e.title} itens={e.itens} key={key} />
      ))}

      <GlobalStyle />
    </>
  );
}

export default App;
