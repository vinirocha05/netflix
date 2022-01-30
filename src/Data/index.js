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
      items: await getData(`/discover/tv/?with_network=213&api_key=${apiKey}&language=pt-BR`),
    },
    {
      slug: 'trending',
      title: 'Recomendados para Você',
      items: await getData(`/trending/all/week?api_key=${apiKey}&language=pt-BR`),
    },
    {
      slug: 'toprated',
      title: 'Em alta',
      items: await getData(`/movie/top_rated?api_key=${apiKey}&language=pt-BR`),
    },
    {
      slug: 'action',
      title: 'Ação',
      items: await getData(`/discover/movie/?with_genres=28&api_key=${apiKey}&language=pt-BR`),
    },
    {
      slug: 'comedy',
      title: 'Comédia',
      items: await getData(`discover/movie/?with_genres=35&api_key=${apiKey}&language=pt-BR`),
    },
    {
      slug: 'horror',
      title: 'Terror',
      items: await getData(`discover/movie/?with_genres=27&api_key=${apiKey}&language=pt-BR`),
    },
    {
      slug: 'romance',
      title: 'Romance',
      items: await getData(`discover/movie/?with_genres=10749&api_key=${apiKey}&language=pt-BR`),
    },
    {
      slug: 'documentary',
      title: 'Documentários',
      items: await getData(`discover/movie/?with_genres=99&api_key=${apiKey}&language=pt-BR`),
    },
  ],
};
