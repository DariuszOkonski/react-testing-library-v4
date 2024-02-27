import { render } from '@testing-library/react';
import SummaryForm from '../summary/SummaryForm';
import { expect } from 'vitest';

test('first test', () => {
  render(<SummaryForm />);
  expect(true).toBe(true);
});
