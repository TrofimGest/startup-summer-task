import { useState } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import getUser from './services/api';

function App() {
  const [username, setUsername] = useState('');
  const [profile, setProfile] = useState();

  async function fetchUser() {
    const response = await getUser(username);
    setProfile(response);
  }

  const handleEnter = (e) => {
    if (e.keyCode === 13) {
      fetchUser(username);
    }
  };

  return (
    <div className="App">
      <Header username={username} setUsername={setUsername} handleEnter={handleEnter} />
      <Main data={profile} />
    </div>
  );
}

export default App;
