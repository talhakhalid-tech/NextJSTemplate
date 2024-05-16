'use client';

import React, { createContext, useContext, useReducer } from 'react';
import type { Dispatch, ReactNode } from 'react';

interface IAppReducerState {
  products: {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
  }[];
}

// initial state for reducer of App Context
const initialAppReducerState: IAppReducerState = {
  products: []
};

type Action = { type: string; payload: any };

/**
 * Reducer function for App Context
 * which is used to make changes in reducer state based on action type
 *
 * @param {object} state - Current state of reducer
 * @param {object} action - action to be taken on state
 * @returns updated state
 */
const appReducer = (
  state: IAppReducerState,
  action: Action
): IAppReducerState => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return { ...state, products: action.payload };
    default:
      return { ...state };
  }
};

// function to create tool context
export const AppContext = createContext<
  | {
      state: IAppReducerState;
      dispatch: Dispatch<Action>;
    }
  | undefined
>(undefined);

/**
 * Provider function of App Context
 *
 * @param {*} props
 * @param {ReactNode} props.children - Teact Node on which we need to provide App Context
 * @returns React functional component
 */
export function AppContextProvider({ children }: { children: ReactNode }) {
  const [appReducerState, appStateDispatch] = useReducer(
    appReducer,
    initialAppReducerState
  );

  return (
    <AppContext.Provider
      value={{
        state: appReducerState,
        dispatch: appStateDispatch
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = (): {
  state: IAppReducerState;
  dispatch: Dispatch<Action>;
} => useContext<any>(AppContext);
