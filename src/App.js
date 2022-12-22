import { useSelector, useDispatch } from "react-redux";

const App = () => {
  const anecdotes = useSelector((state) => state);
  const sortingAccLikes = anecdotes.sort((a, b) => b.votes - a.votes);
  const dispatch = useDispatch();

  const vote = (id) => {
    console.log("vote", id);
    dispatch({ type: "VOTE", data: { id } });
  };

  const addingAnecdotes = (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;

    dispatch({ type: "ADD", data: { content } });
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
      <form onSubmit={addingAnecdotes}>
        <div>
          <input name="anecdote" />
        </div>
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default App;
