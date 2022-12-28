import { createSlice } from "@reduxjs/toolkit";

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

    appendNewAnecdote(state, action) {
      return action.payload;
    },
  },
});
export const { increaseVote, addNewAnecdote, appendNewAnecdote } =
  anecdoteSlice.actions;
export default anecdoteSlice.reducer;
