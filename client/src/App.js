import axios from 'axios';
import './App.css';

function App() {

  const apiCall = () => {
    axios.get('http://localhost:3000')
      .then(res => {
        console.log('working');
      })
      .catch(err => {
        console.log(err);
      })
  }
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={apiCall}>Make Api Call</button>
      </header>
    </div>
  );
}

export default App;
