import React, { useState } from 'react';
import './App.css';

function App() {
  const [query, setQuery] = useState('');
  const [advice, setAdvice] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = async () => {
    if (query) {
      const response = await fetch('http://localhost:5000/get_advice', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      });
      const data = await response.json();
      setAdvice(data.advice);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Investment Advice System</h1>
        <div className="input-container">
          <input
            type="text"
            value={query}
            onChange={handleInputChange}
            placeholder="Ask about your investment..."
          />
          <button onClick={handleSubmit}>Get Advice</button>
        </div>
        <div className="advice-container">
          {advice && (
            <div>
              <h2>Advice:</h2>
              <p>{advice}</p>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;

