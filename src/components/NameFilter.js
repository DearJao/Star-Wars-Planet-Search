import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function NameFilter() {
  const { filters: { nameFilter }, setNameFilter } = useContext(PlanetsContext);
  return (
    <div>
      <form className="name-input">
        <input
          className="text-box"
          data-testid="name-filter"
          type="text"
          name="description"
          id="name-filter"
          value={ nameFilter }
          onChange={ (event) => setNameFilter(event.target.value) }
        />
      </form>
    </div>
  );
}

export default NameFilter;
