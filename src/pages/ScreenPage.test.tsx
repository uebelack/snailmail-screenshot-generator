import { render } from '@testing-library/react';
import ScreenPage from './ScreenPage';

jest.mock('react-router-dom', () => ({ useParams: () => ({ deviceKey: 'iphone67', screenKey: 'overview', language: 'en-US' }) }));

it('should render', () => {
  render(<ScreenPage />);
});
