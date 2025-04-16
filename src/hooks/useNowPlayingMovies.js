import { useEffect } from "react";
import { API_OPTIONS, GET_NOW_PLAYING_MOVIES } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../store/moviesSlice";

const useNowPlayingMovies = () =>{

    const dispatch = useDispatch();

    useEffect(()=>{
       fetchNowPlayingMovies();
    },[])

    const fetchNowPlayingMovies = async () =>{
        await fetch(GET_NOW_PLAYING_MOVIES, API_OPTIONS)
        .then(res => res.json())
        .then(json => 
            dispatch(addNowPlayingMovies(json.results))
        )
        .catch(err => console.error(err));
    }

}

export default useNowPlayingMovies;