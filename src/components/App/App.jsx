import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AirlineForm from '../AirlineForm/AirlineForm';
import AirlinesTable from '../AirlinesTable/AirlinesTable';

function App() {

  const airlines = useSelector(store => store.airlines);
  const planeCount = useSelector(store => store.planeCount);

  const [newAirline, setNewAirline] = useState('');
  const [newPlaneCount, setNewPlaneCount] = useState(0);

  const dispatch = useDispatch();

  const handleAddAirline = (event) => {
    event.preventDefault();
    console.log('in handleSubmit', newAirline);
    dispatch({
      type: 'ADD_AIRLINE',
      payload: [newAirline, newPlaneCount]
    })
    setNewAirline('');
    setNewPlaneCount(0);
  }

  return (
    <div>
      <h1>Redux Airport</h1>
      <AirlineForm
        newAirline={newAirline}
        setNewAirline={setNewAirline}
        handleAddAirline={handleAddAirline}
        newPlaneCount={newPlaneCount}
        setNewPlaneCount={setNewPlaneCount}
      />
      <AirlinesTable 
      airlines={airlines} 
      planeCount={planeCount}/>
    </div>
  );
}

export default App;


