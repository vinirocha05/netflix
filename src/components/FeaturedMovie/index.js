import React from 'react';
import {
  Featured, TransparenciaVertical, TransparenciaHorizontal,
  FeaturedName, FeaturedInfo, MovieDescription, FeaturedButtons,
  MovieGenres,
} from './styled';

export default function MovieRowList({ item }) {
  const firstDate = new Date(item.first_air_date);
  const genresArray = [];
  item.genres.map((e) => (genresArray.push(e.name)));

  return (
    <Featured style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${item.backdrop_path})` }}>
      <TransparenciaVertical>
        <TransparenciaHorizontal>
          <FeaturedName>{item.original_name}</FeaturedName>
          <FeaturedInfo>
            <div className="featured-points">{item.vote_average}</div>
            <div className="featured-year">{firstDate.getFullYear()}</div>
            <div className="featured-temps">
              {item.number_of_seasons}
              {' '}
              temporada
              {item.number_of_seasons > 1 ? 's' : ''}
            </div>
          </FeaturedInfo>
          <MovieDescription>
            {item.overview}
          </MovieDescription>
          <FeaturedButtons>
            <button type="submit" className="watch">&#9658; Assistir</button>
            {' '}
            <button type="submit" className="add">+ Minha lista</button>
          </FeaturedButtons>
          <MovieGenres>
            <strong>
              Gêneros:
            </strong>
            {' '}
            {genresArray.join(', ')}

          </MovieGenres>
        </TransparenciaHorizontal>
      </TransparenciaVertical>
    </Featured>

  );
}
