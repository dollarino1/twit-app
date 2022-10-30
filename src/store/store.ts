import {combineReducers, configureStore} from '@reduxjs/toolkit'
import mainReducer  from './reducers/mainSlice'
import {mainAPI} from "../services/MainService";

const rootReducer = combineReducers({
    mainReducer,
    [mainAPI.reducerPath]: mainAPI.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: getDefaultMiddleware =>
            getDefaultMiddleware().concat(mainAPI.middleware)
    })
}
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
