import React from "react";
import { IMG_CDN_URL } from "../utils/constant";

const MovieCard = ({ title, posterPath }) => {
  return (
    <div className="w-36">
      <img alt={title} src={IMG_CDN_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
