import React from 'react'

function SearchBox({ searchField, searchChange }) {
    return (
        <div className='pa2'>
            <input 
            className='pa2 ba b--green bg-lightest-blue'
            type='search' 
            placeholder='search robot'
            onChange={searchChange} />
            
        </div>
    )
}

export default SearchBox
