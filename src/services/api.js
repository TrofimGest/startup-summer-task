import axios from 'axios';

const token = process.env.REACT_APP_GITHUB_TOKEN;

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
