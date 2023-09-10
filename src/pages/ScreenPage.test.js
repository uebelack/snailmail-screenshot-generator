import React from 'react';
import { render } from '@testing-library/react';
import ScreenPage from './ScreenPage';

jest.mock('react-router-dom', () => ({ useParams: () => ({ deviceKey: 'iphone67' }) }));

it('should render', () => {
  render(<ScreenPage />);
});
