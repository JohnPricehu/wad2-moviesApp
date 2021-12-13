import {React,lazy} from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import {getNowPlayingMovies} from '../api/tmdb-api'
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'
// const Spinner = lazy(() => import("../components/spinner"));
// const PageTemplate = lazy(() => import("../components/templateMoviePage"));
// const getNowPlayingMovies = lazy(() => import("../api/tmdb-api"));

const NowPlayingMoviesPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('discover3', getNowPlayingMovies)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  // Redundant, but necessary to avoid app crashing.
  const favorites = movies.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))
  // const addToFavorites = (movieId) => true 

  return (
    <PageTemplate
      title="Now Playing Movies"
      movies={movies}
      action={(movie) => {
        return <AddToFavoritesIcon movie={movie} />
      }}
    />
);
};

export default NowPlayingMoviesPage;