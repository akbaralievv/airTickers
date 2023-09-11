import './css/app.css';
import Filter from './components/filter/Filter';
import Tickets from './components/tickets/Tickets';
import { createContext, useState } from 'react';

export const FilterContext = createContext('');
function App() {
  const [alignment, setAlignment] = useState('rub');
  const [checked, setChecked] = useState([true, false, false, false]);
  return (
    <main className="wrapper">
      <div className="inner">
        <FilterContext.Provider value={{ alignment, setAlignment, checked, setChecked }}>
          <Filter />
          <Tickets />
        </FilterContext.Provider>
      </div>
    </main>
  );
}

export default App;
