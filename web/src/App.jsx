import React, { useState } from 'react';
import './App.css';
import TripsTh from './components/TripsTh';
import TripsEn from './components/TripsEn';

function App() {
  const [selects, setSelects] = useState('English');
  return (
    <div>
      <div className='lang'>
			  <select className="form-select" aria-label="multiple select example" value={selects} onChange={e=>setSelects(e.target.value)}>
				   <option selects="English">English</option>
				   <option selects="Thai">Thai</option>
			  </select>
	    </div>
      { selects === 'Thai' && <TripsTh/> }
      { selects === 'English' && <TripsEn/> }
    </div>
  );
}
export default App;
