import './App.css';
import * as React from 'react';
import AppBody from './App-Body';

import Earth from '../src/epcot/activity3/Earth';
import Jupiter from '../src/epcot/activity3/Jupiter';
import Saturn from '../src/epcot/activity3/Saturn';
import Mars from '../src/epcot/activity3/Mars';

import UserToogle from './UserToggle';

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
  return (
    <UserProvider>
      <Instructions />
      <UserToogle />
      <Routes>
        <Route path={CONFIG.ROUTE.ROOT} element={<DisneyWorld/>}/>

        <Route path={CONFIG.ROUTE.ANIMAL_KINGDOM} element={<AnimalKingdom/>}/>
        <Route path={CONFIG.ROUTE.ANIMAL_KINGDOM_A1} element={<AnimalKingdomActivity1/>}/>
        <Route path={CONFIG.ROUTE.ANIMAL_KINGDOM_A2} element={<AnimalKingdomActivity2/>}/>
        <Route path={`${CONFIG.ROUTE.ANIMAL_KINGDOM_A3}/*`} element={<AnimalKingdomActivity3/>}/>

        <Route path={CONFIG.ROUTE.BLIZZARD_BEACH} element={<BlizzardBeach/>}/>
        <Route path={CONFIG.ROUTE.BLIZZARD_BEACH_A1} element={<BlizzardBeachActivity1/>}/>
        <Route path={CONFIG.ROUTE.BLIZZARD_BEACH_A2} element={<BlizzardBeachActivity2/>}/>
        <Route path={`${CONFIG.ROUTE.BLIZZARD_BEACH_A3}/*`} element={<BlizzardBeachActivity3/>}/>

        <Route path={CONFIG.ROUTE.EPCOT} element={<Epcot/>}/>
        <Route path={CONFIG.ROUTE.EPCOT_A1} element={<EpcotActivity1/>}/>
        <Route path={CONFIG.ROUTE.EPCOT_A2} element={<EpcotActivity2/>}/>
        <Route path={`${CONFIG.ROUTE.EPCOT_A3}/*`} element={<EpcotActivity3/>}/>
        <Route path={CONFIG.ROUTE.EPCOT_EARTH} element={<Earth />} />
        <Route path={CONFIG.ROUTE.EPCOT_MARS} element={<Mars />} />
        <Route path={CONFIG.ROUTE.EPCOT_JUPITER} element={<Jupiter />} />
        <Route path={CONFIG.ROUTE.EPCOT_SATURN} element={<Saturn />} />

        <Route path={CONFIG.ROUTE.MAGIC_KINGDOM} element={<MagicKingdom/>}/>
        <Route path={CONFIG.ROUTE.MAGIC_KINGDOM_A1} element={<MagicKingdomActivity1/>}/>
        <Route path={CONFIG.ROUTE.MAGIC_KINGDOM_A2} element={<MagicKingdomActivity2/>}/>
        <Route path={`${CONFIG.ROUTE.MAGIC_KINGDOM_A3}/*`} element={<MagicKingdomActivity3/>}/>

        <Route path={CONFIG.ROUTE.ANY} element={<DisneyWorld/>}/>


      </Routes>
    </UserProvider>
  )
}

export default App;
