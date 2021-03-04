import React, { useReducer, useContext } from 'react';

import { alertReducer } from './alertReducer';

import { showAlert, hideAlert } from './alertActions';
import { AlertContext, initAlertValue } from './alertContext';

export const AlertStateProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(alertReducer, initAlertValue);

  const hide = () => dispatch(hideAlert());

  const show = (text: string, type = 'warning') => {
    dispatch(showAlert({ text, type, visible: true }));
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