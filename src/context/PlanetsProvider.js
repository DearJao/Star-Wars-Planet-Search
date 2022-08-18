import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

function PlanetsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [nameFilter, setNameFilter] = useState('');
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);

  useEffect(() => {
    const allPlanets = async () => {
      const response = await fetch(URL);
      const data = await response.json();
      const { results } = data;
      const planetsFilter = results.map((planet) => {
        delete planet.residents;
        return planet;
      });
      setPlanets(planetsFilter);
    };
    allPlanets();
  }, []);

  const providerValue = {
    planets,
    filters: {
      nameFilter,
      filterByNumericValues,
    },
    setNameFilter,
    setFilterByNumericValues,
  };

  return (
    <PlanetsContext.Provider value={ providerValue }>
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default PlanetsProvider;
