import React from "react";
import { useDispatch } from "react-redux";

import { addNewAnecdote } from "../reducers/anecdoteReducer";
import anecdoteService from "../services/anecdoteService";

export function AnecdoteForm() {
  const dispatch = useDispatch();

  //   const addAnecdotes = (event) => {
  //     event.preventDefault();

  //     const content = event.target.anecdote.value;

  //     dispatch(addNewAnecdote(content));
  //     event.target.anecdote.value = "";
  //   };

  const addAnecdotes = async (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = "";
    const newAnecdote = await anecdoteService.createNew(content);
    dispatch(addNewAnecdote(newAnecdote));
  };

  return (
    <>
      <h2>create new</h2>
      <form onSubmit={addAnecdotes}>
        <div>
          <input name="anecdote" />
        </div>
        <button type="submit">create</button>
      </form>
    </>
  );
}
