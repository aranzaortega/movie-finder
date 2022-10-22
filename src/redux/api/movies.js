import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const headers = {
    'X-RapidAPI-Key': '5658209429mshb0c0ea13e60f6d9p16b99bjsncc1ca05e452a',
    'X-RapidAPI-Host': '1mdb-data-searching.p.rapidapi.com'
}

export const moviesApi = createApi({
    reducerPath:'moviesApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://1mdb-data-searching.p.rapidapi.com' }),
    endpoints: (builder) => ({
        fetchMovies: builder.query({
            query: (title) => ({
                url:`/om?t=${title}`,
                method: 'GET',
                headers
            })
        })
    })
})

export const { useFetchMoviesQuery } = moviesApi;