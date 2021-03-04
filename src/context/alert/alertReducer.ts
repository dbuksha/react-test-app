import { HideAlertAction, ShowAlertAction } from './alertActions';
import { Alert } from '../../entities/Alert';
import { AlertActionType } from '../actionTypes';

type AlertActions = ShowAlertAction | HideAlertAction;

// const handlers: { [key: string]: (state: Alert, action: AlertActions) => Alert } = {
//   DEFAULT: (state: Alert) => state,
//   [SHOW_ALERT]: (state: Alert, { payload }) => ({ ...payload, visible: true }),
//   [HIDE_ALERT]: (state: Alert) => ({ ...state, visible: false }),
// };

// export const alertReducer = (state: Alert, action: AlertActions) => {
//   const handle = handlers[action.type] || handlers.DEFAULT;
//
//   return handle(state, action);
// };

export const alertReducer = (state: Alert, action: AlertActions) => {
  switch (action.type) {
    case AlertActionType.SHOW: {
      return {
        ...action.payload,
        visible: true,
      };
    }
    case AlertActionType.HIDE: {
      return { ...state, visible: false };
    }
    default:
      return state;
  }
};
