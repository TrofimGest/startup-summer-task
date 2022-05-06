import axios from 'axios';

export async function getUser(username) {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  return response.data;
}

export async function getRepos(username) {
  const response = await axios.get(`https://api.github.com/users/${username}/repos`);
  return response.data;
}
