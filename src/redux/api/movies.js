import { buildCreateApi, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const headers = {
    'X-RapidAPI-Key': '5658209429mshb0c0ea13e60f6d9p16b99bjsncc1ca05e452a',
    'X-RapidAPI-Host': 'movies-app1.p.rapidapi.com'
}

export const moviesApi = createApi({
    reducerPath:'moviesApi',
    baseQuery: fetchBaseQuery({baseUrl: ''}),
    endpoints: (builder) => ({
        fetchMovies: builder.query({
            query: (title) => ({
                url:`/title/find?q=${title}`,
                method: 'GET',
                headers
            })
        })
    })
})

export const { useFetchMoviesQuery } = moviesApi;