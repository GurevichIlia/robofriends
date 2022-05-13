import React, { BaseSyntheticEvent } from 'react';

const SearchBox = ({ onSearchChange }: { onSearchChange: (e: BaseSyntheticEvent) => void }) => {
  return (
    <div>
      <input
        className='pa3 mb2 ba b--green bg-lightest-blue'
        type="search"
        placeholder="search robots"
        onChange={onSearchChange}
      />
    </div>
  )
}

export default SearchBox