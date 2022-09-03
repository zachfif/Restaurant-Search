import React, { useState } from 'react';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';


function App() {
  const [businesses, setBusinesses] = useState([]);

  return (
     <div className="App">
          <h1>Best Eats</h1>
          <h2>Find What Your're Craving</h2>
          <SearchBar setBusinesses={setBusinesses} />
          <BusinessList businesses={businesses} />
      </div>
    );
  }

  export default App