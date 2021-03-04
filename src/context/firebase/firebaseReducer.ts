import {
  AddNoteAction,
  FetchNotesAction,
  RemoveNoteAction,
  ShowLoaderAction,
} from './firebaseActions';

import { FirebaseActionType } from '../actionTypes';

import { FirebaseContextState } from './firebaseContext';

type FirebaseActions = AddNoteAction | ShowLoaderAction | FetchNotesAction | RemoveNoteAction;

export const firebaseReducer = (
  state: FirebaseContextState,
  action: FirebaseActions,
): FirebaseContextState => {
  switch (action.type) {
    case FirebaseActionType.SHOW_LOADER: {
      return {
        ...state,
        loading: true,
      };
    }
    case FirebaseActionType.ADD_NOTE: {
      return {
        ...state,
        notes: [...state.notes, action.payload],
      };
    }
    case FirebaseActionType.FETCH_NOTES: {
      return {
        ...state,
        notes: action.payload,
        loading: false,
      };
    }
    case FirebaseActionType.REMOVE_NOTE: {
      return {
        ...state,
        notes: state.notes.filter((n) => n.id !== action.payload),
      };
    }
    default:
      return state;
  }
};
