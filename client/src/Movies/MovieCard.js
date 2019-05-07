import React from 'react';
import styled from 'styled-components';

const MovieCardStyles = styled.div`
  
  width: 33%;
  background-color: #fff;
  border: 0;
  box-shadow: 0 -1px 0 #e0e0e0, 0 0 2px rgba(0, 0, 0, 0.12),
    0 2px 4px rgba(0, 0, 0, 0.24);
  padding: 1rem;
  cursor: pointer;
  position: relative;
  margin: 1rem auto;
`

const MovieDirector = styled.div`
  padding: 4px 0;
  font-size: 0.8rem;
`

const MovieCard = (props) => {
  const { title, director, metascore, stars } = props.movie;
  return (  
    <MovieCardStyles>  
    {/* <div className="movie-card"> */}
      <h2>{title}</h2>
      <MovieDirector>
      {/* <div className="movie-director"> */}
        Director: <em>{director}</em>
      {/* </div> */}
      </MovieDirector>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      <h3>Actors</h3>

      {stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
    {/* </div>  */}
    </MovieCardStyles>
  );
};

export default MovieCard;
