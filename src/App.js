import './App.css';
import { useState } from 'react';

function App() {
  const BASE_URL = 'https://app-connerapi-dev.azurewebsites.net';

  const ACTIVE_URL = BASE_URL;

  const [apiResponse, setApiResponse] = useState({});

  function callResume() {
    fetch(`${ACTIVE_URL}/resume`)
      .then(response => response.json())
      .then(data => setApiResponse(data))
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  function callWorkXp() {
    fetch(`${ACTIVE_URL}/workexperience`)
      .then(response => response.json())
      .then(data => setApiResponse(data))
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  function callProjects() {
    fetch(`${ACTIVE_URL}/projects`)
      .then(response => response.json())
      .then(data => setApiResponse(data))
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  function callStory() {
    fetch(`${ACTIVE_URL}/story`)
      .then(response => response.json())
      .then(data => setApiResponse(data))
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  return (
    <div className="App">
      <div className="header">
        <h1 className='welcome'>Welcome to the ConnerAPI</h1>
        <p className='welcome-description'>Here, you can find all things "Conner" (the full-stack dev you've dreamed of). Click the buttons below to call the API, and finally be introduced to the candidate you've been waiting for.</p>
      </div>
      
      <ul className="api-options">
      <li className='api-option-item'>
          <h4>Get My Story</h4>
          <button onClick={callStory}>Story</button>
        </li>
        <li className='api-option-item'>
          <h4>Get Full Resume</h4>
          <button onClick={callResume}>Resume</button>
        </li>
        <li className='api-option-item'>
          <h4>Get Work Experience</h4>
          <button onClick={callWorkXp}>Work</button>
        </li>
        <li className='api-option-item'>
          <h4>Get Projects</h4>
          <button onClick={callProjects}>Projects</button>
        </li>
      </ul>

      <div className='api-result'>
        {apiResponse && <pre className='json-response'>{JSON.stringify(apiResponse, null, 2)}</pre>}
      </div>
    </div>
  );
}

export default App;
