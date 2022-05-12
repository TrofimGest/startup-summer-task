import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Start from './components/Start/Start';
import { getUser, getRepos } from './services/api';

function App() {
  const [username, setUsername] = useState('');
  const [profile, setProfile] = useState();
  const [repos, setRepos] = useState();
  const [page, setPage] = useState(1);
  const history = useNavigate();

  async function fetchUser() {
    const response = await getUser(username);
    setProfile(response);
    history('/user');
  }

  async function fetchRepos() {
    const response = await getRepos(username, page);
    setRepos(response);
  }

  const searchResult = (e) => {
    if (e.keyCode === 13) {
      if (username !== '') {
        setPage(1);
        fetchUser(username);
        fetchRepos(username, page);
      } else {
        history('/');
      }
    }
  };

  const searchByPage = (e) => {
    setPage(e.selected + 1);
    fetchRepos(username, page);
  };

  return (
    <div className="App">
      <Header username={username} setUsername={setUsername} searchResult={searchResult} />
      <Routes>
        <Route path="/" element={<Start />} />
        <Route
          path="/user"
          element={<Main profileData={profile} reposData={repos} searchByPage={searchByPage} />}
        />
      </Routes>
    </div>
  );
}

export default App;
