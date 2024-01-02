import React from 'react'

const Search = ({searchValue,setSearchValue}) => {
  return (
    <div>
        <input 
        type="text" 
        className='rounded mx-5' 
        placeholder="Search a country..."
        value={searchValue}
        onChange={(e)=>setSearchValue(e.target.value)}
      
        
        />
    </div>
  )
}

export default Search