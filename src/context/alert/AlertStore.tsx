import React, { useReducer, useContext } from 'react';

import { alertReducer } from './alertReducer';

import { AlertContext, initAlertValue } from './alertContext';
import { AlertActionType } from '../actionTypes';

export const AlertStateProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(alertReducer, initAlertValue);

  const hide = () => dispatch({ type: AlertActionType.HIDE });

  const show = (text: string, type = 'warning') => {
    dispatch({
      type: AlertActionType.SHOW,
      payload: { text, type, visible: true },
    });
  };

  return (
    <AlertContext.Provider
      value={{
        show,
        hide,
        alert: state,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export const useAlertStore = () => {
  const contextValue = useContext(AlertContext);
  if (contextValue === null) {
    throw Error('Context has not been Provided.');
  }
  return contextValue;
};
