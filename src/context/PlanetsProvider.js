import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

function PlanetsProvider({ children }) {
  const [planets, setPlanets] = useState([]);

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

  return (
    <PlanetsContext.Provider value={ { planets } }>
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default PlanetsProvider;
