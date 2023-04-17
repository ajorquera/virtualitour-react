import { render } from '@testing-library/react';
import Header, { Props } from './Header';

const props: Props = {
  title: 'Title',
};

test('should render component', () => {
  const { container } = render(<Header {...props} />);
  expect(container).toBeInTheDocument();
});
