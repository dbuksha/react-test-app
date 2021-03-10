import { AlertTypes } from './alertActions';
import { IAlert } from '../../entities/Alert';
import { HIDE_ALERT, SHOW_ALERT } from '../actionTypes';

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

// const handlers = {
//   DEFAULT: (state: IAlert) => state,
//   [SHOW_ALERT]: (state: IAlert, { payload }) => ({ ...payload, visible: true } as const),
//   [HIDE_ALERT]: (state: IAlert) => ({ ...state, visible: false } as const),
// };

// type handlerType = ReturnType<ActionsType<typeof handlers>>;

// export const alertReducer = (state: IAlert, action: AlertTypes) => {
//   const handle: handlerType = handlers[action.type] || handlers.DEFAULT;
//
//   return handle(state, action);
// };

export const alertReducer = (state: IAlert, action: AlertTypes): IAlert => {
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
