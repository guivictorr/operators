import { render, screen } from '@testing-library/react';
import Map from '.';

describe('<Map />', () => {
  it('should render without any marker', () => {
    render(<Map />);

    expect(
      screen.getByRole('link', {
        name: /a js library for interactive maps/i
      })
    ).toBeInTheDocument();
  });

  it('should render with the marker in correct place', () => {
    const place = {
      id: '1',
      name: 'Nancy',
      slug: 'nancy',
      icon: {
        url: 'https://media.graphcms.com/NKMylkmKSqclzyYkS0su'
      },
      location: {
        latitude: 48.68,
        longitude: 6.18
      }
    };

    const place2 = {
      id: '2',
      name: 'Paris',
      slug: 'paris',
      icon: {
        url: 'https://media.graphcms.com/NKMylkmKSqclzyYkS0su'
      },
      location: {
        latitude: 52.2,
        longitude: 6.18
      }
    };

    render(<Map places={[place, place2]} />);

    expect(screen.getByTitle(/nancy/i)).toBeInTheDocument();
    expect(screen.getByTitle(/paris/i)).toBeInTheDocument();
  });
});
