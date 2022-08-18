import React from 'react';
import './App.css';
import Filter from './components/Filter';
import Header from './components/Header';
import List from './components/Table';
import PlanetsProvider from './context/PlanetsProvider';

function App() {
  return (
    <main>
      <PlanetsProvider>
        <Header />
        <Filter />
        <List />
      </PlanetsProvider>
    </main>
  );
}

export default App;
