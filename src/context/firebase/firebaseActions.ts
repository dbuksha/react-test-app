import { PropertiesType } from '../../helpers/propertiesType';
import { SHOW_LOADER, ADD_NOTE, REMOVE_NOTE, FETCH_NOTES } from '../actionTypes';
import { INote } from '../../entities/Note';

export const firebaseActions = {
  showLoader: () => ({ type: SHOW_LOADER } as const),
  addNote: (payload: INote) => ({ type: ADD_NOTE, payload } as const),
  fetchNotes: (payload: INote[]) => ({ type: FETCH_NOTES, payload } as const),
  removeNote: (payload: number) => ({ type: REMOVE_NOTE, payload } as const),
};

export type FirebaseActions = ReturnType<PropertiesType<typeof firebaseActions>>;
