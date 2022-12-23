import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setVotes } from "../reducers/anecdoteReducer";

export function AnecdoteList() {
  const anecdotes = useSelector((state) => state);

  const sortingAccLikes = anecdotes.sort((a, b) => b.votes - a.votes);

  const dispatch = useDispatch();

  const vote = (id) => {
    // console.log("vote", id);
    // dispatch({ type: "VOTE", data: { id } });
    dispatch(setVotes(id));
  };

  return (
    <div>
      {sortingAccLikes.map((anecdote) => (
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
