import React from 'react';

export default function AirlineForm({ newAirline, setNewAirline, handleSubmit }) {

  return <form onSubmit={handleSubmit}>
    <input
      type='text'
      placeholder='Airline Name'
      value={newAirline}
      onChange={(event) => setNewAirline(event.target.value)}
    />
    <button type='submit'>
      Add Airline
    </button>
  </form>;
}
