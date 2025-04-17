import { useEffect } from "react";
import { API_OPTIONS, GET_UPCOMING_MOVIES } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addUpComingMovies } from "../store/moviesSlice";

const useUpComingMovies = () =>{

    const dispatch = useDispatch();

    useEffect(()=>{
       fetchUpComingMovies();
    },[])

    const fetchUpComingMovies = async () =>{
        await fetch(GET_UPCOMING_MOVIES, API_OPTIONS)
        .then(res => res.json())
        .then(json => 
            dispatch(addUpComingMovies(json.results))
        )
        .catch(err => console.error(err));
    }

}

export default useUpComingMovies;