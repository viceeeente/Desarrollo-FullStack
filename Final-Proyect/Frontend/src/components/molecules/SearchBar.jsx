import React from 'react';


export default function SearchBar() {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Buscar productos..." />
      <button>🔍</button>
    </div>
  );
}