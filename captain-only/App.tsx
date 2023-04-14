import './App.css';
import * as React from 'react';
import AppBody from './App-Body';

export interface UserContextProps {
  setIsAdult: React.Dispatch<React.SetStateAction<boolean>>;
  isAdult: boolean;
}

export const UserContext = React.createContext<UserContextProps>({
  setIsAdult: () => {
    console.log('setIsAdult');
  },
  isAdult: false,
});

export const UserProvider: React.FC = ({ children }) => {
  const [isAdult, setIsAdult] = React.useState(false);

  return (
    <UserContext.Provider value={{ isAdult, setIsAdult }}>
      {children}
    </UserContext.Provider>
  );
};

function App() {
  return <UserProvider>{<AppBody />}</UserProvider>;
}

export default App;
