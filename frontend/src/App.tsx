import React, { useState, useEffect } from 'react';
import { SearchBox } from './components/search-box/SearchBox';

import './App.css'

function App() {
  const [searchTerms, setSearchTerms] = useState('');
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [debouncedTerms, setDebouncedTerms] = useState<string>('');

  // Debounce the search term
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedTerms(searchTerms);
    }, 500);

    return () => clearTimeout(handler);
  }, [searchTerms]);
  
  const handleSearchTermsChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerms(event.target.value);
  };

  useEffect(() => {
    const fetchSearchResults = async () => {
      var allItems: string[] = [];

      if (searchTerms.length > 0) {
        allItems = ["Result 1", "Result 2", "Result 3"]; // Fallback for demo purposes
      }

      return allItems;
    }
    setSearchResults([]); // Clear previous results
    fetchSearchResults().then((items) => {  
      setSearchResults(prev => [...prev, ...items]);
    }
    ).catch((error) => {
      console.error('Error fetching search results:', error);
    }
  );
  }, [debouncedTerms]);

  return (
      <div>
        <SearchBox onSearchTermsChanged={handleSearchTermsChanged} results={searchResults} />
      </div>
  )
}

export default App
