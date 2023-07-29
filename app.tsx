import { useReducer } from "react";
import { Theme } from "./src/lib";
import { ESetTheme, ETheme } from "./src/types";
import React from "react";



// useReducer

interface IAction {
    type: string;
    payload: ETheme
}

const initialStateUseReducer: ETheme = ETheme.LIGHT

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
    
    const [state, dispatch] = useReducer(reducer, initialStateUseReducer)
   
    return(
        <>
            <h1 style={{
                color: state === ETheme.LIGHT ? "black" : "white"
            }}>Hola mundo</h1>
            <Theme dispatch={dispatch} />
        </>
    )
}


// redux


import { configureStore, createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'counter',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
      increment: state => {
        state.value += 1
      },
      decrement: state => {
        state.value -= 1
      },
      // Use the PayloadAction type to declare the contents of `action.payload`
      incrementByAmount: (state, action: PayloadAction<number>) => {
        state.value += action.payload
      }
    }
  })

// ...

const store = configureStore({
  reducer: {
    theme
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'


// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const UsingRedux = () => {

}