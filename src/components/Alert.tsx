import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { useAlertStore } from '../context/alert/AlertStore';

export const Alert: React.FC = () => {
  const { alert, hide } = useAlertStore();
  if (!alert) return null;

  return (
    <CSSTransition
      in={alert.visible}
      timeout={{
        enter: 500,
        exit: 350,
      }}
      classNames="alert"
      mountOnEnter
      unmountOnExit
    >
      <div className={`alert alert-${alert.type || 'warning'} alert-dismissible`}>
        <strong>Alert!</strong>
        &nbsp;{alert.text}
        <button type="button" className="close" aria-label="Close" onClick={hide}>
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </CSSTransition>
  );
};