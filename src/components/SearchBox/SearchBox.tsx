import React from 'react';

const SearchBox = ({ onSearchChange }: any) => {
  return (
    <div>
      <input
        type="search"
        placeholder="search robots"
        onChange={onSearchChange}
      />
    </div>
  )
}

export default SearchBox