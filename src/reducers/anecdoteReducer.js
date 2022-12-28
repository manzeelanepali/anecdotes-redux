import { createSlice } from "@reduxjs/toolkit";
import anecdoteService from "../services/anecdoteService";
// const getId = () => (100000 * Math.random()).toFixed(0);

// const asObject = (anecdote) => {
//   return {
//     content: anecdote,
//     id: getId(),
//     votes: 0,
//   };
// };

// const initialState = anecdotesAtStart.map(asObject);

// 6.13

const anecdoteSlice = createSlice({
  name: "anecdotes",
  initialState: [],
  reducers: {
    increaseVote(state, action) {
      const id = action.payload;
      return state.map((anec) => {
        if (anec.id === id) return { ...anec, votes: anec.votes + 1 };
        else return anec;
      });
    },

    addNewAnecdote(state, action) {
      const newAnnecdote = action.payload;
      return [...state, newAnnecdote];
    },

    setAnecdote(state, action) {
      return action.payload;
    },
  },
});

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll();
    dispatch(setAnecdote(anecdotes));
  };
};

export const createAnecdote = (content) => {
  return async (dispatch) => {
    const newAnnecdote = await anecdoteService.createNew(content);
    dispatch(addNewAnecdote(newAnnecdote));
  };
};
export const { increaseVote, addNewAnecdote, setAnecdote } =
  anecdoteSlice.actions;
export default anecdoteSlice.reducer;
