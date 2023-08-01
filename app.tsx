import { useReducer } from "react";
import { Theme } from "./src/lib";
import { ESetTheme, ETheme } from "./src/types";
import React from "react";


const initialState: ETheme = localStorage.getItem("theme") as ETheme ?? ETheme.LIGHT

// useReducer

interface IAction {
    type: string;
    payload: ETheme
}


function reducer(state: ETheme, action: IAction) {
    if (action.type === ESetTheme.SET_MENU) {
        return action.payload
    }
    if (action.type === ESetTheme.SET_MENU) {
        return action.payload
    }
    return state
}

export const UsingUseReducer = () => {
    
    const [state, dispatch] = useReducer(reducer, initialState)
   
    return(
        <>
            <h1 style={{
                color: state === ETheme.LIGHT ? "black" : "white"
            }}>Hola mundo</h1>
            <Theme dispatch={(theme: string) => dispatch({
                type: ESetTheme.SET_MENU,
                payload: theme
            })} initialValue={state} />
        </>
    )
}


// redux

import { configureStore, createSlice } from '@reduxjs/toolkit'

const themeSlice = createSlice({
    name: 'theme',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
      setTheme: (state, action: PayloadAction<ETheme>) => {
        state = action.payload
        return state
      }
    }
  })

const store = configureStore({
  reducer: {
    themeReducer: themeSlice.reducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
type AppDispatch = typeof store.dispatch

import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
const useAppDispatch: () => AppDispatch = useDispatch
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const UsingRedux = () => {
    return (
        <Provider store={store}>
            <Redux />
        </Provider>
    )
}

const Redux = () => {
    const theme = useAppSelector(state => state.themeReducer)
    const dispatch = useAppDispatch()
    
    return(
        <>
            <h1 style={{
                color: theme === ETheme.LIGHT ? "black" : "white",
                height: "200vh"
            }}>Hola mundo</h1>
            <Theme dispatch={(theme) => dispatch(themeSlice.actions.setTheme(theme))} initialValue={theme}/>
        </>
    )
    
}