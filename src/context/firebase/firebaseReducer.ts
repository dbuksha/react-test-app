import {
  AddNoteAction,
  FetchNotesAction,
  RemoveNoteAction,
  ShowLoaderAction,
} from './firebaseActions';

import { SHOW_LOADER, ADD_NOTE, FETCH_NOTES, REMOVE_NOTE } from '../actionTypes';

import { FirebaseContextState } from './firebaseContext';

type FirebaseActions = AddNoteAction | ShowLoaderAction | FetchNotesAction | RemoveNoteAction;

export const firebaseReducer = (
  state: FirebaseContextState,
  action: FirebaseActions,
): FirebaseContextState => {
  switch (action.type) {
    case SHOW_LOADER: {
      return {
        ...state,
        loading: true,
      };
    }
    case ADD_NOTE: {
      return {
        ...state,
        notes: [...state.notes, action.payload],
      };
    }
    case FETCH_NOTES: {
      return {
        ...state,
        notes: action.payload,
        loading: false,
      };
    }
    case REMOVE_NOTE: {
      return {
        ...state,
        notes: state.notes.filter((n) => n.id !== action.payload),
      };
    }
    default:
      return state;
  }
};
