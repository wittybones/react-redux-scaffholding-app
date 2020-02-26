import React from 'react'
import Movie from './Movie'
import PropTypes from 'prop-types';

export default class MoviesList extends React.Component {
  componentDidMount() {
    const { onLoadMovies } = this.props;
    onLoadMovies()
  }

  render() {
    const { movieList } = this.props
    return (
      <div className="movies-list">
        {movieList.map((movie, index) => {
          return <Movie
            key={`movie_${index}`}
            movie={movie} />
        })
        }</div>
    )
  }
}

MoviesList.propTypes = {
  movieList: PropTypes.array,
  onLoadMovies: PropTypes.func
}
