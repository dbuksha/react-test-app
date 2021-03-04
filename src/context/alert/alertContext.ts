import { createContext } from 'react';
import { IAlert } from '../../entities/Alert';

export interface AlertContextState {
  hide: () => void;
  show: (text: string, type?: string) => void;
  alert: IAlert | null;
}

export const initAlertValue: IAlert = {
  visible: false,
  text: 'Something went wrong',
  type: 'warning',
};

const initContextValue: AlertContextState = {
  hide: () => null,
  show: () => null,
  alert: initAlertValue,
};

export const AlertContext = createContext<AlertContextState>(initContextValue);
