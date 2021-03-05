import { HIDE_ALERT, SHOW_ALERT } from '../actionTypes';
import { IAlert } from '../../entities/Alert';

export const showAlert = (payload: IAlert) => ({ type: SHOW_ALERT, payload } as const);
export const hideAlert = () => ({ type: HIDE_ALERT } as const);

export type ShowAlertAction = ReturnType<typeof showAlert>;
export type HideAlertAction = ReturnType<typeof hideAlert>;
