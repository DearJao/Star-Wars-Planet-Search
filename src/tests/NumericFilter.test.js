import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

describe('verify all unitary/integration test in the Numeric filter form', () => {
  it('verify input collumn "menor que"', async () => {
    render(<App />);
    await waitFor(() => expect(fetch).toHaveBeenCalled());

    const colunmFilter = screen.getByTestId('column-filter');
    const comparisonFilter = screen.getByTestId('comparison-filter');
    const valueFilter = screen.getByTestId('value-filter');
    const btn = screen.getByRole('button', { name: /filtrate/i });

    userEvent.selectOptions(colunmFilter, 'rotation_period');
    userEvent.selectOptions(comparisonFilter, 'maior que');
    userEvent.type(valueFilter, '26');
    userEvent.click(btn);

    userEvent.selectOptions(colunmFilter, 'diameter');
    userEvent.selectOptions(comparisonFilter, 'menor que');
    userEvent.type(valueFilter, '5000');
    userEvent.click(btn);

    // expect(screen.getByText(/endor/i)).toBeInTheDocument();

    userEvent.selectOptions(colunmFilter, 'orbital_period');
    userEvent.selectOptions(comparisonFilter, 'igual a');
    userEvent.type(valueFilter, '312');
    userEvent.click(btn);

    // expect(screen.getByText(/naboo/i)).toBeInTheDocument();
  });
});

// it('', async () => {
//   render(<App />)
//   await waitFor(() => expect(fetch).toHaveBeenCalled());
// })
