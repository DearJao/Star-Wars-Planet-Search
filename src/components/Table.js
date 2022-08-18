import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Table() {
  const { planets, filters: {
    nameFilter,
    filterByNumericValues,
  } } = useContext(PlanetsContext);

  const planetsFilter = planets
    .filter((planet) => planet.name.toLowerCase().includes(nameFilter.toLowerCase()))
    // cógigo do filtro para o {filterByNumericValues} foi adapatado de um código achado na internet internet
    .filter((planet) => filterByNumericValues
      .every(({ column, comparison, value }) => {
        if (comparison === 'maior que') {
          return +planet[column] > +value;
        }
        if (comparison === 'menor que') {
          return +planet[column] < +value;
        }
        return +planet[column] === +value;
      }));

  return (
    <div className="App">
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {planetsFilter.map((planet) => (
            <tr key={ planet.name }>
              <td>{planet.name}</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.diameter}</td>
              <td>{planet.climate}</td>
              <td>{planet.gravity}</td>
              <td>{planet.terrain}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.population}</td>
              <td>{planet.films}</td>
              <td>{planet.created}</td>
              <td>{planet.edited}</td>
              <td>{planet.url}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
