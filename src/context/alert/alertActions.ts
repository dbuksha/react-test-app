import { AlertActionType } from '../actionTypes';
import { Alert } from '../../entities/Alert';

export type ShowAlertAction = {
  type: AlertActionType.SHOW;
  payload: Alert;
};

export type HideAlertAction = {
  type: AlertActionType.HIDE;
};

export const showAlert = (payload: Alert): ShowAlertAction => ({
  type: AlertActionType.SHOW,
  payload,
});

export const hideAlert = (): HideAlertAction => ({
  type: AlertActionType.HIDE,
});
