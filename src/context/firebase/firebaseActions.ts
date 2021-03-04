import { FirebaseActionType } from '../actionTypes';
import { INote } from '../../entities/Note';

export type ShowLoaderAction = {
  type: FirebaseActionType.SHOW_LOADER;
};

export type AddNoteAction = {
  type: FirebaseActionType.ADD_NOTE;
  payload: INote;
};

export type FetchNotesAction = {
  type: FirebaseActionType.FETCH_NOTES;
  payload: INote[];
};

export type RemoveNoteAction = {
  type: FirebaseActionType.REMOVE_NOTE;
  payload: number;
};
