
import { useParams } from "react-router"
import ResultsImage from '../../assets/results.png';
import { useFetchMoviesQuery } from '../../redux/api/movies'
import Loading from './components/Loading';
import List from './components/List';
import Error from "./components/Error";

const Results = () => {
    const { title } = useParams();
    const { data: movie, isLoading, isSuccess, isFetching, error
    } = useFetchMoviesQuery(title);

    const renderContent = () => {
        if (error) return <Error error={error}/>
        else if (isLoading || isFetching) return <Loading />
        else if (isSuccess && movie) return <List data={movie} />
        else return undefined
    }

    return (
        <div className="flex flex-row">
        <div className="w-3/5 h-screen overflow-y-auto px-10">
            {renderContent()}
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
