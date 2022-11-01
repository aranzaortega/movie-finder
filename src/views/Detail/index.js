import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchMovie } from "../../redux/actions/movies";

const Detail = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMovie());
    }, [dispatch]);

    return (
        <div>Detail</div>
    )
}

export default Detail;