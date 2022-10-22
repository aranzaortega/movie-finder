
import { useParams } from "react-router"
import ResultsImage from '../../assets/results.png';
import { useFetchMoviesQuery } from '../../redux/api/movies'
import Loading from './components/Loading';
import List from './components/List';

const Results = () => {
    const { title } = useParams();
    const { data: movie, isLoading, isFetching,
    } = useFetchMoviesQuery(title);

    return (
        <div className="flex flex-row">
        <div className="w-3/5 h-screen overflow-y-auto px-10">
            {isLoading && isFetching ? <Loading /> : <List data={movie} />}
        </div>
        <div className="w-3/5">
            <img
                src={ResultsImage}
                alt="Cinema"
                className="w-full h-screen object-cover"
            />
        </div>
        </div>
    );
};

export default Results;
