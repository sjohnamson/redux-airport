import React from 'react';

export default function AirlineForm({newAirline, setNewAirline, dispatch}) {

  return <form>
    <input
      type='text'
      placeholder='Airline Name'
      value={newAirline}
      onChange={(event) => setNewAirline(event.target.value)} 
      />
    <button onClick={() => dispatch({ type: 'ADD_AIRLINE', payload: newAirline })}>Add Airline</button>
  </form>;
}
