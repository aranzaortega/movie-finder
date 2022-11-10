import { createAction } from "@reduxjs/toolkit";

const BASE_URL = "https://1mdb-data-searching.p.rapidapi.com";
const headers = {
    'X-RapidAPI-Key': '7f11d66d84msh1d2ca1368f1f3ddp12b4b9jsn6f16218ac7ab',
    'X-RapidAPI-Host': '1mdb-data-searching.p.rapidapi.com'
};

export const startFetchMovie = createAction('START_FETCH_MOVIE');
export const successFetchMovie = createAction('SUCCESS_FETCH_MOVIE');
export const errorFetchMovie = createAction('ERROR_FETCH_MOVIE');

export const fetchMovie = (movieId) => async (dispatch) => {
    try {
        dispatch(startFetchMovie());
        const response = await fetch(`${BASE_URL}/om?i=${movieId}`, { headers });
        const data = await response.json();
        dispatch(successFetchMovie({ data }));
    } catch (error){
        dispatch(errorFetchMovie({ error }));
    }
};