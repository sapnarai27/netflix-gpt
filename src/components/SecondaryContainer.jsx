import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="bg-black w-screen">
      <div className="relative z-10 text-white -mt-10">
        <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
        <MovieList title="Up Coming" movies={movies.upComingMovies} />
        <MovieList title="Popular" movies={movies.popularMovies} />
        <MovieList title="Top rated" movies={movies.topRatedMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
