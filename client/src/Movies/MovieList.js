import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import MovieCard from './MovieCard';
import styled from 'styled-components';

const MovieListStyles = styled.div`
  /* display: flex;
  flex-wrap: wrap;
  justify-content: space-between; */
`

export default class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/movies')
      .then(response => {
        this.setState(() => ({ movies: response.data }));
      })
      .catch(error => {
        console.error('Server Error', error);
      });
  }

  render() {
    return (
      <MovieListStyles>
        {this.state.movies.map(movie => (

          <MovieDetails key={movie.id} movie={movie} />
        ))}
      </MovieListStyles>
    );
  }
}

function MovieDetails({ movie }) {
  return (
    <Link to={`/movies/${movie.id}`}>
      <MovieCard movie={movie} />
    </Link>
  );
}
