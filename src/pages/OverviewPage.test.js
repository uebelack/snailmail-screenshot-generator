import React from 'react';
import { render } from '@testing-library/react';
import OverviewPage from './OverviewPage';

jest.mock('react-router-dom', () => ({ Link: () => (<div />) }));

it('should render', () => {
  render(<OverviewPage />);
});
