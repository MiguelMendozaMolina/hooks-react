import React, { useContext } from 'react';

interface ThemeContextType {
  theme: string;
  // Define mas propiedades del contexto si es necesario
}

const ThemeContext = React.createContext<ThemeContextType>({ theme: 'light'});

const ThemedButton: React.FC = () => {
  const {theme} = useContext(ThemeContext);

  return (
    <button style= {{ background: theme === 'dark' ? 'black' : 'white'}}>
      I am styled by theme context!
    </button>
  );
}

export default ThemedButton;