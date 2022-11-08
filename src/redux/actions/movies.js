import { createAction } from "@reduxjs/toolkit";

const BASE_URL = "https://1mdb-data-searching.p.rapidapi.com";
const headers = {
    'X-RapidAPI-Key': '5658209429mshb0c0ea13e60f6d9p16b99bjsncc1ca05e452a',
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