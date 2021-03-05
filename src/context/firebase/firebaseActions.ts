import { SHOW_LOADER, ADD_NOTE, REMOVE_NOTE, FETCH_NOTES } from '../actionTypes';
import { INote } from '../../entities/Note';

export const showLoaderAction = () => ({ type: SHOW_LOADER } as const);
export const addNoteAction = (payload: INote) => ({ type: ADD_NOTE, payload } as const);
export const fetchNotesAction = (payload: INote[]) => ({ type: FETCH_NOTES, payload } as const);
export const removeNoteAction = (payload: number) => ({ type: REMOVE_NOTE, payload } as const);

export type ShowLoaderAction = ReturnType<typeof showLoaderAction>;
export type AddNoteAction = ReturnType<typeof addNoteAction>;
export type FetchNotesAction = ReturnType<typeof fetchNotesAction>;
export type RemoveNoteAction = ReturnType<typeof removeNoteAction>;
