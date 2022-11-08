import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchMovie } from "../../redux/actions/movies";

const Detail = () => {
    const { movieId } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMovie(movieId));
    }, [dispatch, movieId]);

    return (
        <div>Detail</div>
    )
}

export default Detail;