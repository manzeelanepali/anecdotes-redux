import React from "react";
// import { useDispatch } from "react-redux";

import { connect } from "react-redux";

import { addNewAnecdote } from "../reducers/anecdoteReducer";
import anecdoteService from "../services/anecdoteService";
import { updateNotification } from "../reducers/notificationReducer";

export function AnecdoteForm(props) {
  const addAnecdotes = async (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = "";
    const newAnecdote = await anecdoteService.createNew(content);
    props.addNewAnecdote(newAnecdote);
    props.updateNotification(`added '${content}'`, 2);
    event.target.anecdote.value = "";
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
const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = {
  addNewAnecdote,
  updateNotification,
};

export default connect(mapStateToProps, mapDispatchToProps)(AnecdoteForm);
