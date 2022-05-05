import { useState } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import getUser from './services/api';

function App() {
  const [username, setUsername] = useState('');

  async function fetchUser() {
    const response = await getUser(username);
    return response;
  }

  const handleEnter = (e) => {
    if (e.keyCode === 13) {
      fetchUser(username);
    }
  };

  return (
    <div className="App">
      <Header username={username} setUsername={setUsername} handleEnter={handleEnter} />
      <Main data={() => fetchUser()} />
    </div>
  );
}

export default App;
