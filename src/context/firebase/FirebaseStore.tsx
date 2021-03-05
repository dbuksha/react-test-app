import React, { useReducer } from 'react';
import axios from 'axios';

import { FirebaseContext, initFirebaseContextValue } from './firebaseContext';
import { firebaseReducer } from './firebaseReducer';
import {
  showLoaderAction,
  fetchNotesAction,
  addNoteAction,
  removeNoteAction,
} from './firebaseActions';

const url = process.env.REACT_APP_DB_URL;

export const FirebaseStateProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(firebaseReducer, initFirebaseContextValue);

  const showLoader = () => dispatch(showLoaderAction());

  const fetchNotes = async () => {
    showLoader();
    const res = await axios.get(`${url}/notes.json`);

    const payload = Object.keys(res.data).map((key) => {
      return {
        ...res.data[key],
        id: key,
      };
    });

    dispatch(fetchNotesAction(payload));
  };

  const addNote = async (title: string) => {
    const note = {
      title,
      date: new Date().toJSON(),
    };

    try {
      const res = await axios.post(`${url}/notes.json`, note);
      const payload = {
        ...note,
        id: res.data.name,
      };

      dispatch(addNoteAction(payload));
    } catch (e) {
      throw new Error(e.message);
    }
  };

  const removeNote = async (id: number) => {
    await axios.delete(`${url}/notes/${id}.json `);

    dispatch(removeNoteAction(id));
  };

  return (
    <FirebaseContext.Provider
      value={{
        showLoader,
        addNote,
        removeNote,
        fetchNotes,
        loading: state.loading,
        notes: state.notes,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};
