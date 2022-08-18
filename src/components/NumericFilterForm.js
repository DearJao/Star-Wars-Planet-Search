import React, { useContext, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function NumericFilterForm() {
  const { filters: { filterByNumericValues },
    setFilterByNumericValues } = useContext(PlanetsContext);

  const [NumericFilter, setNumericFilter] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });

  const { column, comparison, value } = NumericFilter;
  return (
    <div>
      <form className="column-filter">
        <select
          className="column-filter"
          data-testid="column-filter"
          name="column"
          id="column"
          value={ column }
          onChange={ ({ target }) => setNumericFilter({
            ...NumericFilter, column: target.value }) }
        >
          <option value="rotation_period">rotation_period</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="surface_water">surface_water</option>
          <option value="population">population</option>
        </select>

        <select
          className="comparison-filter"
          data-testid="comparison-filter"
          name="comparison"
          id="comparison"
          value={ comparison }
          onChange={ ({ target }) => setNumericFilter({
            ...NumericFilter, comparison: target.value }) }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>

        <input
          className="value-box"
          data-testid="value-filter"
          type="number"
          name="value"
          id="value-filter"
          value={ value }
          onChange={ ({ target }) => setNumericFilter({
            ...NumericFilter, value: target.value }) }
        />

        <button
          type="button"
          data-testid="button-filter"
          onClick={ () => setFilterByNumericValues([
            ...filterByNumericValues, NumericFilter]) }
        >
          filtrate
        </button>
      </form>
    </div>
  );
}

export default NumericFilterForm;
