import React from "react";
// import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import PersonPage from "./pages/personDetailsPage";
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage"; // NEW
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader';
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import MustwatchMoviesPage from "./pages/mustWatchMoviesPage"; 
import NowPlayingMoviesPage from "./pages/nowPlayingMoviesPage";
import TopRatedMoviesPage from "./pages/topRatedMoviesPage";
// import AuthProvider from "./contexts/authContext";
// import LoginPage from "./pages/LoginPage";
// import SignUpPage from "./pages/signUpPage";





const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

export const App =({handleLogout})=>{
  return(
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
        <MoviesContextProvider>
            {" "}
      {/* <AuthProvider> */}
      <Switch>
        {/* <Route exact path="/movies/signup" component={SignUpPage} /> */}
        {/* <Route exact path="/movies/login" component={LoginPage} /> */}
        <Route exact path="/movies/top-rated" component={TopRatedMoviesPage} />
        <Route exact path="/movies/now-playing" component={NowPlayingMoviesPage} />
        <Route exact path="/movies/mustwatch" component={MustwatchMoviesPage} />
        <Route exact path="/reviews/form" component={AddMovieReviewPage} />
        <Route exact path="/movies/upcoming" component={UpcomingMoviesPage} />
        <Route path="/reviews/:id" component={MovieReviewPage} />
        <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
        <Route path="/movies/:id" component={MoviePage} />
        <Route path="/person/:id" component={PersonPage} />
        <Route exact path="/" component={HomePage} />
        <Redirect from="*" to="/" />
      </Switch>
      {/* </AuthProvider> */}
        </MoviesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
export default App;
// ReactDOM.render(<App />, document.getElementById("root"));