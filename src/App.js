import './App.css';
import React from 'react';
import PlanetsProvider from './context/PlanetsProvider';
import Header from './components/Header';
import NameFilter from './components/NameFilter';
import Table from './components/Table';
import NumericFilterForm from './components/NumericFilterForm';

function App() {
  return (
    <main>
      <PlanetsProvider>
        <Header />
        <NameFilter />
        <NumericFilterForm />
        <Table />
      </PlanetsProvider>
    </main>
  );
}

export default App;
