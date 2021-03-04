import { createContext } from 'react';
import { Alert } from '../../entities/Alert';

export interface AlertContextState {
  hide: () => void;
  show: (text: string, type?: string) => void;
  alert: Alert | null;
}

export const initAlertValue: Alert = {
  visible: false,
  text: 'Something went wrong',
  type: 'warning',
};

export const initAlertContextValue = {
  hide: () => null,
  show: () => null,
  alert: initAlertValue,
};

export const AlertContext = createContext<AlertContextState>(initAlertContextValue);
