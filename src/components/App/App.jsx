import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AirlineForm from '../AirlineForm/AirlineForm';
import AirlinesTable from '../AirlinesTable/AirlinesTable';

function App() {

  const airlines = useSelector(store => store.airlines);

  const [newAirline, setNewAirline] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('in handleSubmit', newAirline);
    dispatch({
      type: 'ADD_AIRLINE',
      payload: newAirline
    })
    // setNewAirline('')
  }

  return (
    <div>
      <h1>Redux Airport</h1>
      <AirlineForm
        newAirline={newAirline}
        setNewAirline={setNewAirline}
        handleSubmit={handleSubmit}
      />
      <AirlinesTable airlines={airlines} />
    </div>
  );
}

export default App;


