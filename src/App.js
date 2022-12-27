import { AnecdoteForm } from "./components/AnecdoteForm";
import { AnecdoteList } from "./components/AnecdoteList";
import Notification from "./components/Notification";
import Filter from "./components/Filter";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import anecdoteService from "./services/anecdoteService";
import { appendNewAnecdote } from "./reducers/anecdoteReducer";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    anecdoteService
      .getAll()
      .then((response) => dispatch(appendNewAnecdote(response)));
  }, []);
  return (
    <div>
      <h2>Anecdotes</h2>

      <Notification />
      <Filter />
      <AnecdoteForm />
      <AnecdoteList />
    </div>
  );
};

export default App;
