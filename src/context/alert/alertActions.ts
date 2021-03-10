import { PropertiesType } from '../../helpers/propertiesType';
import { HIDE_ALERT, SHOW_ALERT } from '../actionTypes';
import { IAlert } from '../../entities/Alert';

export const alertActions = {
  show: (payload: IAlert) => ({ type: SHOW_ALERT, payload } as const),
  hide: () => ({ type: HIDE_ALERT } as const),
};

export type AlertTypes = ReturnType<PropertiesType<typeof alertActions>>;
