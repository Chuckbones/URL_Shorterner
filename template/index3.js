import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [originalUrl, setOriginalUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleUrlChange = (event) => {
    setOriginalUrl(event.target.value);
  };

  const shortenUrl = () => {
    axios.post('YOUR_BACKEND_URL', { originalUrl })
      .then(response => {
        const { shortUrl } = response.data;
        setShortUrl(shortUrl);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="container my-5">
      <h1 className="text-center">URL Shortener</h1>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter your URL"
          value={originalUrl}
          onChange={handleUrlChange}
        />
        <div className="input-group-append">
          <button className="btn btn-primary" onClick={shortenUrl}>Shorten</button>
        </div>
      </div>
      {shortUrl && (
        <div className="alert alert-success" role="alert">
          Your shortened URL:
          <br />
          <a href={shortUrl} target="_blank" rel="noopener noreferrer">{shortUrl}</a>
        </div>
      )}
    </div>
  );
}

export default App;
