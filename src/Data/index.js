import axios from 'axios';

const url = 'https://api.themoviedb.org/3';
const apiKey = 'ed395ac767673d161a536c690e730240';
/*
Originais da netflix
Recomendados
Em alta
Ação
Comédia
Terror
Romance
Documentário
*/
async function getData(endpoint) {
  const response = await axios.get(`${url}${endpoint}`);
  return response;
}

export default {
  getHomeList: async () => [
    {
      slug: 'originals',
      title: 'Originais da Netflix',
      itens: await getData(`/discover/tv/?with_network=213&api_key=${apiKey}&language=pt-BR`),
    },
    {
      slug: 'trending',
      title: 'Recomendados para Você',
      itens: await getData(`/trending/all/week?api_key=${apiKey}&language=pt-BR`),
    },
    {
      slug: 'toprated',
      title: 'Em alta',
      itens: await getData(`/movie/top_rated?api_key=${apiKey}&language=pt-BR`),
    },
    {
      slug: 'action',
      title: 'Ação',
      itens: await getData(`/discover/movie/?with_genres=28&api_key=${apiKey}&language=pt-BR`),
    },
    {
      slug: 'comedy',
      title: 'Comédia',
      itens: await getData(`/discover/movie/?with_genres=35&api_key=${apiKey}&language=pt-BR`),
    },
    {
      slug: 'horror',
      title: 'Terror',
      itens: await getData(`/discover/movie/?with_genres=27&api_key=${apiKey}&language=pt-BR`),
    },
    {
      slug: 'romance',
      title: 'Romance',
      itens: await getData(`/discover/movie/?with_genres=10749&api_key=${apiKey}&language=pt-BR`),
    },
    {
      slug: 'documentary',
      title: 'Documentários',
      itens: await getData(`/discover/movie/?with_genres=99&api_key=${apiKey}&language=pt-BR`),
    },
  ],
  getMovieInfo: async (movieId, type) => {
    let info = {};
    if (movieId) {
      switch (type) {
        case 'movie': {
          info = await getData(`/movie/${movieId}?api_key=${apiKey}&language=pt-BR`);
          break;
        }
        case 'tv': {
          info = await getData(`/tv/${movieId}?api_key=${apiKey}&language=pt-BR`);
          break;
        }
        default: info = null;
      }
    }

    return info;
  },
};
