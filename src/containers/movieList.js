import MovieList from '../components/MovieList'
import { connect } from "react-redux"
import { requestMoviesData } from "../actions/movies"

const mapStateToProps = state => ({
  movieList: state.movies.movies
})

const mapDispatchToProps = dispatch => {
  return {
    onLoadMovies: () => dispatch(requestMoviesData())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(MovieList)