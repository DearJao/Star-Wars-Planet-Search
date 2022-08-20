import React from 'react';
import App from '../App';
import mockData from "../../cypress/mocks/testData";
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

beforeEach(() => {
  jest.spyOn(global, "fetch").mockImplementationOnce(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockData),
    })
  );
});
afterEach(() => {
  jest.resetAllMocks();
});

describe('verify all unitary/integration test in the Name filter form', () => {
  it('verify if exist an input to search for planets name', async () => {
    render(<App />);

    await waitFor(() => expect(fetch).toHaveBeenCalled());

    const inputName = screen.getByTestId('name-filter')
    userEvent.type(inputName, /tatooine/i);
    const tablePlanetName = screen.getByText(/tatooine/i);


    expect(inputName).toBeInTheDocument();
    expect(tablePlanetName).toBeInTheDocument();
  })

  // it('', async () => {
  //   render(<App />)
  //   await waitFor(() => expect(fetch).toHaveBeenCalled());
  // })
})
