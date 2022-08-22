import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from '../App';
import mockData from '../../cypress/mocks/testData';
import '@testing-library/jest-dom';

beforeEach(() => {
  jest.spyOn(global, 'fetch').mockImplementationOnce(() => Promise.resolve({
    json: () => Promise.resolve(mockData),
  }));
});
afterEach(() => {
  jest.resetAllMocks();
});

describe('verify all unitary/integration test in the Table', () => {
  it('verify if table list have the informations about StarWars planets', async () => {
    render(<App />);
    await waitFor(() => expect(fetch).toHaveBeenCalled());

    const headerTable = screen.getByRole('table');
    const nameTable = screen.getByText(/name/i);
    const climate = screen.getByText(/arid/i);

    expect(headerTable).toBeInTheDocument();
    expect(nameTable).toBeInTheDocument();
    expect(climate).toBeInTheDocument();
  });

  // it('', async () => {
  //   render(<App />)
  //   await waitFor(() => expect(fetch).toHaveBeenCalled());
  // })
});
