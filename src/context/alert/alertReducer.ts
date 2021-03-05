import { HideAlertAction, ShowAlertAction } from './alertActions';
import { IAlert } from '../../entities/Alert';
import { HIDE_ALERT, SHOW_ALERT } from '../actionTypes';

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

export const alertReducer = (state: IAlert, action: AlertActions): IAlert => {
  switch (action.type) {
    case SHOW_ALERT: {
      return {
        ...action.payload,
        visible: true,
      };
    }
    case HIDE_ALERT: {
      return { ...state, visible: false };
    }
    default:
      return state;
  }
};
