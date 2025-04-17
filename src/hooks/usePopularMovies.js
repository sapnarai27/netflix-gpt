import { useEffect } from "react";
import { API_OPTIONS, GET_POPULAR_MOVIES } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../store/moviesSlice";

const usePopularMovies = () =>{

    const dispatch = useDispatch();

    useEffect(()=>{
       fetchPopularMovies();
    },[])

    const fetchPopularMovies = async () =>{
        await fetch(GET_POPULAR_MOVIES, API_OPTIONS)
        .then(res => res.json())
        .then(json => 
            dispatch(addPopularMovies(json.results))
        )
        .catch(err => console.error(err));
    }

}

export default usePopularMovies;