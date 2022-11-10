import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchMovie } from "../../redux/actions/movies";
import starImage from '../../assets/star.png';

const Detail = () => {
    const { movieId } = useParams();
    const dispatch = useDispatch();
    const { success, error, isFetching, isLoading, movie } = useSelector((state) => state.moviesReducer);

    useEffect(() => {
        dispatch(fetchMovie(movieId));
    }, [dispatch, movieId]);

    return (
        <div className="flex flex-row px-16 h-screen items-center justify-center">
            <div className="w-1/3 flex justify-center">
                <img src={movie?.Poster} className="w-80" alt="movie-detail" />
            </div>
            <div className="flex flex-col w-2/3 items-start overflow-y-auto my-16 justify-center">
                <h2 className="text-4xl font-bold my-1">{`${movie?.Title} (${movie?.Year})`}</h2>
            </div>
            <div className="flex flex-row my-1 items-center">
                <span className="text-xl font-bold w-full">{movie?.Ratings[0].Value}</span>
                <img src={starImage} className="ml-1 w-6 h-6" alt="star-ratings" />
            </div>
            <p className="text-left">{movie?.Plot}</p>
            <h3 className="font-bold my-1">Genre: {movie?.Genre}</h3>
            <h4 className="font-bold my-1">Cast: {movie?.Actors}</h4>
        </div>
    )
}

export default Detail;