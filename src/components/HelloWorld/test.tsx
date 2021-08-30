import { render, screen } from '@testing-library/react';

import HelloWorld from '.';

describe('<HelloWorld />', () => {
  it('should render the heading', () => {
    const { container } = render(<HelloWorld />);

    expect(
      screen.getByRole('heading', { name: /hello world/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
