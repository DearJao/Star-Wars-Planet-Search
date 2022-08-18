import React from 'react';
import './App.css';
import NameFilter from './components/NameFilter';
import Header from './components/Header';
import Table from './components/Table';
import PlanetsProvider from './context/PlanetsProvider';

function App() {
  return (
    <main>
      <PlanetsProvider>
        <Header />
        <NameFilter />
        <Table />
      </PlanetsProvider>
    </main>
  );
}

export default App;
