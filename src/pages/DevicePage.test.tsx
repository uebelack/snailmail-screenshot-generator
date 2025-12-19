import { render } from '@testing-library/react';
import DevicePage from './DevicePage';

jest.mock('react-router-dom', () => ({ useParams: () => ({ deviceKey: 'iphone67' }) }));

it('should render', () => {
  render(<DevicePage />);
});
