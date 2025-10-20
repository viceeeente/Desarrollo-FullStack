import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navbar from '../organisms/Navbar';

// Mock de los componentes hijos
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

// Mock del localStorage
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
    // Limpiar localStorage antes de cada test
    localStorage.clear();
    
    // Mock de window.location.reload
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

  describe('Estado de autenticación - Usuario NO logueado', () => {
    test('no muestra mensaje de bienvenida cuando no hay usuario', () => {
      render(<Navbar />);
      const greeting = screen.queryByText(/¡Bienvenido/i);
      expect(greeting).not.toBeInTheDocument();
    });

    test('muestra greeting vacío cuando no está logueado', () => {
      const { container } = render(<Navbar />);
      const greeting = container.querySelector('#greeting');
      expect(greeting).toHaveTextContent('');
    });
  });

  describe('Estado de autenticación - Usuario logueado', () => {
    test('muestra mensaje de bienvenida cuando el usuario está logueado', () => {
      localStorage.setItem('userName', 'Juan Pérez');
      localStorage.setItem('isLoggedIn', 'true');

      render(<Navbar />);
      
      expect(screen.getByText('¡Bienvenido, Juan Pérez!')).toBeInTheDocument();
    });

    test('muestra el nombre correcto del usuario desde localStorage', () => {
      localStorage.setItem('userName', 'María García');
      localStorage.setItem('isLoggedIn', 'true');

      render(<Navbar />);
      
      expect(screen.getByText('¡Bienvenido, María García!')).toBeInTheDocument();
    });

    test('no muestra bienvenida si isLoggedIn es false aunque haya userName', () => {
      localStorage.setItem('userName', 'Test User');
      localStorage.setItem('isLoggedIn', 'false');

      render(<Navbar />);
      
      expect(screen.queryByText(/¡Bienvenido/i)).not.toBeInTheDocument();
    });
  });

  describe('Funcionalidad de Logout', () => {
    test('limpia localStorage al hacer logout', () => {
      localStorage.setItem('userName', 'Test User');
      localStorage.setItem('isLoggedIn', 'true');

      render(<Navbar />);
      
      const authButton = screen.getByTestId('auth-button');
      fireEvent.click(authButton);

      expect(localStorage.getItem('userName')).toBeNull();
      expect(localStorage.getItem('isLoggedIn')).toBeNull();
    });

    test('recarga la página al hacer logout', () => {
      localStorage.setItem('userName', 'Test User');
      localStorage.setItem('isLoggedIn', 'true');

      render(<Navbar />);
      
      const authButton = screen.getByTestId('auth-button');
      fireEvent.click(authButton);

    });
  });

  describe('useEffect - Carga inicial de datos', () => {
    test('carga datos del localStorage al montar el componente', () => {
      localStorage.setItem('userName', 'Usuario Test');
      localStorage.setItem('isLoggedIn', 'true');

      render(<Navbar />);

      expect(screen.getByText('¡Bienvenido, Usuario Test!')).toBeInTheDocument();
    });

    test('maneja correctamente cuando localStorage está vacío', () => {
      render(<Navbar />);
      
      const { container } = render(<Navbar />);
      const greeting = container.querySelector('#greeting');
      expect(greeting).toHaveTextContent('');
    });
  });

  describe('Integración con componentes hijos', () => {
    test('pasa la prop isLoggedIn correctamente a AuthButton', () => {
      localStorage.setItem('isLoggedIn', 'true');
      
      render(<Navbar />);
      
      const authButton = screen.getByTestId('auth-button');
      expect(authButton).toHaveTextContent('Logout');
    });

    test('pasa la función handleLogout a AuthButton', () => {
      localStorage.setItem('userName', 'Test');
      localStorage.setItem('isLoggedIn', 'true');

      render(<Navbar />);
      
      const authButton = screen.getByTestId('auth-button');
      fireEvent.click(authButton);

      expect(localStorage.getItem('isLoggedIn')).toBeNull();
    });
  });
});