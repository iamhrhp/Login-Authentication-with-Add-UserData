import { Action } from '@remix-run/router';
import { createContext, useReducer } from 'react';

const initialState: any = {
  token: null,
  user: null,
  mobile: '',
  data: [],
};

const myReducer: any = (state: typeof initialState, action: any) => {
  switch (action.type) {
    case 'setMobile':
      return {
        ...state,
        mobile: action.payload,
      };
  }
};

export const RedContext = createContext({
  state: initialState,
  dispatch: myReducer,
});

export const RedContextProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(myReducer, initialState);

  return (
    <RedContext.Provider value={{ state, dispatch }}>
      {children}
    </RedContext.Provider>
  );
};
