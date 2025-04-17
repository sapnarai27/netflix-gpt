import { useEffect } from "react";
import { API_OPTIONS, GET_TOP_RATED_MOVIES } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../store/moviesSlice";

const useTopRatedMovies = () =>{

    const dispatch = useDispatch();

    useEffect(()=>{
       fetchTopRatedMovies();
    },[])

    const fetchTopRatedMovies = async () =>{
        await fetch(GET_TOP_RATED_MOVIES, API_OPTIONS)
        .then(res => res.json())
        .then(json => 
            dispatch(addTopRatedMovies(json.results))
        )
        .catch(err => console.error(err));
    }

}

export default useTopRatedMovies;