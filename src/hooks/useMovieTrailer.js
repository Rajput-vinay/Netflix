import { API_OPTION } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
 
  const trailerVideo= useSelector(store => store.movies.trailerVideo)
  const getMoviesVideo = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos", API_OPTION);
    const json = await data.json();

    const filteredData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filteredData.length ? filteredData[0] : json.results[0];

    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    !trailerVideo&& getMoviesVideo();
  },[]);
};
export default useMovieTrailer;
