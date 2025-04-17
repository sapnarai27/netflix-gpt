import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

const MainContainer = () => {
    const nowPlayingMovies = useSelector(store=> store.movies?.nowPlayingMovies);

    if(!nowPlayingMovies) return; //early return
    const mainMovie = nowPlayingMovies[1]; //consider this as main movie

    const {id, original_title, overview} = mainMovie;
  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
