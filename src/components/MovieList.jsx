import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-10 pb-3">
      <div className="text-3xl py-5">{title}</div>
      <div className="flex overflow-x-scroll">
        <div className="flex gap-5">
          {movies?.map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.original_title}
              posterPath={movie.poster_path}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
