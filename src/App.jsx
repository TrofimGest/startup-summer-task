import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Start from './components/Start/Start';
import getUser from './services/api';

function App() {
  const [username, setUsername] = useState('');
  const [profile, setProfile] = useState();
  const history = useNavigate();

  async function fetchUser() {
    const response = await getUser(username);
    setProfile(response);
    history('/user');
  }

  const handleEnter = (e) => {
    if (e.keyCode === 13) {
      fetchUser(username);
    }
  };

  return (
    <div className="App">
      <Header username={username} setUsername={setUsername} handleEnter={handleEnter} />
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/user" element={<Main data={profile} />} />
      </Routes>
    </div>
  );
}

export default App;
