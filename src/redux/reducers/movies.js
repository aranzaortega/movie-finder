import { startFetchMovie, successFetchMovie, errorFetchMovie } from "../actions/movies";

const initialState = {
    isLoading: false,
    isFetching: false,
    movie: {},
    success: null,
    error: null,
}

const moviesReducer = (state = initialState, action) => {
switch (action.type) {
    case startFetchMovie.type:
        return {
            ...state,
            isLoading: false,
            isFetching: true,
        };
    case successFetchMovie.type:
        return {
            ...state,
            isLoading: false,
            isFetching: false,
            movie: action.payload.data,
            success: true,
            error: null,
        };
    case errorFetchMovie.type:
        return {
            ...state,
            isLoading: false,
            isFetching: false,
            movie: {},
            success: false,
            error: action.payload.error,
        };  
    default:
        return state;
    }
};

export default moviesReducer;