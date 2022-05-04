import axios from 'axios';

async function getUser(username) {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  return response.data;
}

export default getUser;
