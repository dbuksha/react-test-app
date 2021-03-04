import { createContext } from 'react';
import { INote } from '../../entities/Note';

export interface FirebaseContextState {
  notes: INote[];
  loading: boolean;
  showLoader: () => void;
  addNote: (title: string) => Promise<void>;
  removeNote: (id: number) => void;
  fetchNotes: () => void;
}

export const firebaseContextDefaultValue: FirebaseContextState = {
  notes: [],
  loading: false,
  showLoader: () => null,
  addNote: () => Promise.resolve(),
  removeNote: () => null,
  fetchNotes: () => null,
};
export const FirebaseContext = createContext<FirebaseContextState>(firebaseContextDefaultValue);
