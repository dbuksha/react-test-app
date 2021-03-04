import { AlertActionType } from '../actionTypes';
import { IAlert } from '../../entities/Alert';

export type ShowAlertAction = {
  type: AlertActionType.SHOW;
  payload: IAlert;
};

export type HideAlertAction = {
  type: AlertActionType.HIDE;
};
