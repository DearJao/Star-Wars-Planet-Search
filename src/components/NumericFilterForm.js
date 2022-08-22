import React, { useContext, useState, useEffect } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function NumericFilterForm() {
  const { filters: { filterByNumericValues },
    setFilterByNumericValues } = useContext(PlanetsContext);

  const [NumericFilter, setNumericFilter] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });

  const columnOptions = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const unusedFilters = columnOptions.filter(
    (column) => !filterByNumericValues.some((element) => column === element.column),
  );

  useEffect(() => {
    setNumericFilter((prev) => ({ ...prev, column: unusedFilters[0] }));
  }, [filterByNumericValues]);

  const { column, comparison, value } = NumericFilter;
  return (
    <div>
      <form>
        <select
          className="numeric-filter"
          data-testid="column-filter"
          name="column"
          id="column"
          value={ column }
          onChange={ ({ target }) => setNumericFilter({
            ...NumericFilter, column: target.value }) }
        >
          {unusedFilters.map((columnOption) => (
            <option key={ columnOption } value={ columnOption }>
              {columnOption}
            </option>
          ))}
        </select>

        <select
          className="numeric-filter"
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
          className="numeric-filter"
          data-testid="value-filter"
          type="number"
          name="value"
          id="value-filter"
          value={ value }
          onChange={ ({ target }) => setNumericFilter({
            ...NumericFilter, value: target.value }) }
        />

        <button
          className="btn-filter"
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
