import React from "react";
export function AnecdoteForm({ addingAnecdotes }) {
  return (
    <form onSubmit={addingAnecdotes}>
      <div>
        <input name="anecdote" />
      </div>
      <button type="submit">create</button>
    </form>
  );
}
