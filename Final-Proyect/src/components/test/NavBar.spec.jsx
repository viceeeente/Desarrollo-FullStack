import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navbar from '../organisms/Navbar';

jest.mock('../molecules/DropdownMenu', () => {
  return function DropdownMenu() {
    return <div data-testid="dropdown-menu">Dropdown Menu</div>;
  };
});

jest.mock('../molecules/SearchBar', () => {
  return function SearchBar() {
    return <div data-testid="search-bar">Search Bar</div>;
  };
});

jest.mock('../atoms/CartButton', () => {
  return function CartButton() {
    return <button data-testid="cart-button">Cart</button>;
  };
});

jest.mock('../molecules/AuthButton', () => {
  return function AuthButton({ isLoggedIn, onLogout }) {
    return (
      <button data-testid="auth-button" onClick={onLogout}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
    );
  };
});

const localStorageMock = (() => {
  let store = {};
  return {
    getItem: (key) => store[key] || null,
    setItem: (key, value) => {
      store[key] = value.toString();
    },
    removeItem: (key) => {
      delete store[key];
    },
    clear: () => {
      store = {};
    }
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock
});

describe('Navbar', () => {
  let reloadMock;

  beforeEach(() => {
    localStorage.clear();
    
    reloadMock = jest.fn();
    delete window.location;
    window.location = { reload: reloadMock };
    
    jest.clearAllMocks();
  });

  describe('Renderizado básico', () => {
    test('renderiza todos los componentes principales', () => {
      render(<Navbar />);
      
      expect(screen.getByAltText('Logo')).toBeInTheDocument();
      expect(screen.getByTestId('dropdown-menu')).toBeInTheDocument();
      expect(screen.getByTestId('search-bar')).toBeInTheDocument();
      expect(screen.getByTestId('cart-button')).toBeInTheDocument();
      expect(screen.getByTestId('auth-button')).toBeInTheDocument();
    });

    test('renderiza el logo con el id correcto', () => {
      render(<Navbar />);
      const logo = screen.getByAltText('Logo');
      expect(logo).toHaveAttribute('id', 'logo');
    });

    test('renderiza el nav con el id correcto', () => {
      const { container } = render(<Navbar />);
      const nav = container.querySelector('#main-menu');
      expect(nav).toBeInTheDocument();
    });
  });


});