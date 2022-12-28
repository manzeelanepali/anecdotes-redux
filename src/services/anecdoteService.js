import axios from "axios";

const baseUrl = "http://localhost:3001/anecdotes";

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const createNew = async (content) => {
  const newAnecdote = { content, votes: 0 };
  const response = await axios.post(baseUrl, newAnecdote);
  return response.data;
};

const updateVote = (id, anecdoteToUpdate) => {
  return axios.put(`${baseUrl}/${id}`, anecdoteToUpdate).then((response) => {
    // console.log("response by axios", response);
    return response.data;
  });
};

export default { getAll, createNew, updateVote };
