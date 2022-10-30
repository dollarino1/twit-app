import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {IPost} from "../models/IPost";

export const mainAPI = createApi({ // TEST TEMPLATE
    reducerPath: 'mainAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com/'}),
    endpoints: (build) => ({
        fetchAll: build.query<IPost[], number>({
            query: (limit: number = 5) => ({
                url: '/posts',
                params: {
                    _limit: limit
                }
            })
        })
    })
})