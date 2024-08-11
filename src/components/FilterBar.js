import React from 'react';

function FilterBar({ handleFilter }) {
  const botClasses = ['Support', 'Medic', 'Assault', 'Defender', 'Captain', 'Witch'];

  return (
    <div className="filter-bar">
      {botClasses.map((botClass) => (
        <label key={botClass}>
          <input
            type="checkbox"
            onChange={(e) => handleFilter(botClass, e.target.checked)}
          />
          {botClass}
        </label>
      ))}
    </div>
  );
}

export default FilterBar;
