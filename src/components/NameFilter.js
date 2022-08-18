import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function NameFilter() {
  const { filters: { nameFilter }, setNameFilter } = useContext(PlanetsContext);
  return (
    <div>
      <form className="name-input">
        <label htmlFor="name-filter">
          <input
            className="text-box"
            data-testid="name-filter"
            type="text"
            name="description"
            id="name-filter"
            value={ nameFilter }
            onChange={ (event) => setNameFilter(event.target.value) }
          />
        </label>
      </form>
    </div>
  );
}

export default NameFilter;
