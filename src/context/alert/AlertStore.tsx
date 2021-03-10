import React, { useReducer } from 'react';

import { alertReducer } from './alertReducer';

import { AlertContext, initAlertValue } from './alertContext';
import { alertActions } from './alertActions';

export const AlertStateProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(alertReducer, initAlertValue);

  const hide = () => dispatch(alertActions.hide());

  const show = (text: string, type = 'warning') => {
    dispatch(alertActions.show({ text, type, visible: true }));
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
