import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const searchImages = async () => {
    try {
      const response = await axios.get(
        `https://api.pexels.com/v1/search?query=${query}`,
        {
          headers: {
            Authorization: 'd2C7r2kVE4KsTsOi6DCALaZGU8nfedRXa7lB9jP1oaLiOxUIVES0TIVg',
          },
        }
      );

      setResults(response.data.photos);
    } catch (error) {
      console.error('API request error:', error);
    }
  };

  return (
    <div class="search__inps">
      <input class="input__plc"
        type="text"
        placeholder="Search for images..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button class="input__btn" onClick={searchImages}>Search</button>
      <div>
        {results.map((photo) => (
          <img class="images" key={photo.id} src={photo.src.small} alt={photo.url} />
        ))}
      </div>
    </div>
  );
}

export default App;
