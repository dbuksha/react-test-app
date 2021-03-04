import React, { useState, SyntheticEvent, useContext } from 'react';
import { useAlertStore } from '../context/alert/AlertStore';
import { FirebaseContext } from '../context/firebase/firebaseContext';

export const Form = () => {
  const [value, setValue] = useState('');
  const { show } = useAlertStore();
  const { addNote } = useContext(FirebaseContext);

  const submitHandler = (event: SyntheticEvent) => {
    event.preventDefault();

    if (value.trim()) {
      addNote(value.trim())
        .then(() => {
          show('The note was successfully created', 'success');
        })
        .catch(() => {
          show('Something went wrong', 'danger');
        });
      setValue('');
    } else {
      show('Input the note name');
    }
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Put the note name"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </form>
  );
};
