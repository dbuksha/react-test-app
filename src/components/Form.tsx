import React, { useState, useContext } from 'react';
import { FirebaseContext } from '../context/firebase/firebaseContext';
import { AlertContext } from '../context/alert/alertContext';

export const Form: React.FC = () => {
  const [value, setValue] = useState('');
  const { show } = useContext(AlertContext);
  const { addNote } = useContext(FirebaseContext);

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
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
