import { AnecdoteForm } from "./components/AnecdoteForm";
import { useSelector, useDispatch } from "react-redux";
import { setVotes, setAnecdote } from "./reducers/anecdoteReducer";

const App = () => {
  const anecdotes = useSelector((state) => state);
  const sortingAccLikes = anecdotes.sort((a, b) => b.votes - a.votes);
  const dispatch = useDispatch();

  const vote = (id) => {
    console.log("vote", id);
    // dispatch({ type: "VOTE", data: { id } });
    dispatch(setVotes(id));
  };

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
  // console.log("vote", vote);

  return (
    <div>
      <h2>Anecdotes</h2>

      {/* {anecdotes.map((anecdote) => ( */}
      {sortingAccLikes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}

      <h2>create new</h2>
      <AnecdoteForm addingAnecdotes={addingAnecdotes} />
    </div>
  );
};

export default App;
