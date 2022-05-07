import axios from 'axios';
import env from 'react-dotenv';

const token = env.GITHUB_TOKEN;

export async function getUser(username) {
  const response = await axios
    .get(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: token
      }
    })
    .catch((error) => {
      return error.response;
    });
  return response;
}

export async function getRepos(username) {
  const response = await axios
    .get(`https://api.github.com/users/${username}/repos`, {
      headers: {
        Authorization: token
      }
    })
    .catch((error) => {
      return error.response;
    });
  return response.data;
}
