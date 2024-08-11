import React from 'react'

function SortBar() {
  return (
    <div className='sort-bar'>
      <div className='sort'>
        <h3>
          SORT-BAR
        </h3>
      </div>
      <button onClick={() => handleSort('health')}>Sort by Health</button>
      <button onClick={() => handleSort('damage')}>Sort by Damage</button>
      <button onClick={() => handleSort('armor')}>Sort by Armor</button>
    </div>
  )
}

export default SortBar