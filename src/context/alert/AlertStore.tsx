import React, { useReducer } from 'react';

import { alertReducer } from './alertReducer';

import { AlertContext, initAlertValue } from './alertContext';
import { hideAlert, showAlert } from './alertActions';

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
