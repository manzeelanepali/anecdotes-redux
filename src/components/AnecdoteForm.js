import React from "react";
import { useDispatch } from "react-redux";
import { setAnecdote } from "../reducers/anecdoteReducer";
// export function AnecdoteForm({ addingAnecdotes }) {
export function AnecdoteForm() {
  const dispatch = useDispatch();
  const addingAnecdotes = (event) => {
    event.preventDefault();
    // console.log(event.target, "harey");
    // console.log("mareyyyyy", event.target.anecdote);
    const content = event.target.anecdote.value;

    // console.log(content, "this is what coming from the content ");
    dispatch(setAnecdote(content));
    // dispatch({ type: "ADD", data: { content } });
    event.target.anecdote.value = "";
  };

  return (
    <>
      <h2>create new</h2>
      <form onSubmit={addingAnecdotes}>
        <div>
          <input name="anecdote" />
        </div>
        <button type="submit">create</button>
      </form>
    </>
  );
}
