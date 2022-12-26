import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { increaseVote } from "../reducers/anecdoteReducer";

export function AnecdoteList() {
  const anecdotes = useSelector((state) => state.anecdotes);

  const sortingAnecdotes = [...anecdotes].sort((a, b) => b.votes - a.votes);

  const dispatch = useDispatch();

  const vote = (id) => {
    // console.log("vote", id);
    // dispatch({ type: "VOTE", data: { id } });
    dispatch(increaseVote(id));
  };

  return (
    <div>
      {sortingAnecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  );
}
