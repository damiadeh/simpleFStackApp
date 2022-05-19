import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

function App() {
  const [value, setValue] = useState("")
  const [loading, setLoading] = useState(false)

  const checkNumber = () => {
    if (!Number.isInteger(parseInt(value))) {
      alert("Error: Input a valid integer" + value);
      setValue("")
    } else {
      setLoading(true)
      fetch(`http://127.0.0.1:5000/test/${value}`, {
        'Content-Type': 'application/json',
        //for test purpose only
        'Access-Control-Allow-Origin': '*',
        'credentials': 'same-origin'
      })
        .then(response => {
          response.json().then(response=>{
            alert(`SUCCESS: API returned ${response.output} for input - ${value}`)
          })
          setLoading(false)
        })
        .catch(data => alert("Oops!! Something went wrong"));
    }

  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Check the correspondent of your number
        </p>
        <input value={value} onChange={e => setValue(e.target.value)} />
        <button disabled={loading} onClick={checkNumber}>{loading ? "Checking..." : "Check"}</button>
      </header>
    </div>
  );
}

export default App;
