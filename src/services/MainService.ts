import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const mainAPI = createApi({ // TEST TEMPLATE
    reducerPath: 'mainAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000/api/user'}),
    tagTypes: ['Post'],
    endpoints: (build) => ({
        signupUser: build.mutation({
            query: (payload) => ({
                url: '/',
                method: 'POST',
                body: payload,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
            invalidatesTags: ['Post'],
        }),
        loginUser: build.mutation({
            query: (payload) => ({
                url: '/login',
                method: 'POST',
                body: payload,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
            invalidatesTags: ['Post'],
        })
    })
})