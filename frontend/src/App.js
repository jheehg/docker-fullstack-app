import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [list, setList] = useState([]);
  const [value, setValue] = useState('');

  const onChangeHandler = (e) => {
    setValue(e.target.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    axios
      .post('/api/value', { value })
      .then((response) => {
        if (response.data.success) {
          setList([...list, response.data]);
        }
      })
      .catch((err) => {
        alert('오류 발생');
        console.err(err);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="container">
          <ul>{list && list.map((list) => <li>{list.value}</li>)}</ul>
          <form className="example" onSubmit={onSubmitHandler}>
            <input
              type="text"
              placeholder="type here"
              value={value}
              onChange={onChangeHandler}
              style={{ height: '25px', fontSize: '20px' }}
            />
            <button type="submit" style={{ height: '32px', fontSize: '20px' }}>
              Submit
            </button>
          </form>
        </div>
      </header>
    </div>
  );
}

export default App;
