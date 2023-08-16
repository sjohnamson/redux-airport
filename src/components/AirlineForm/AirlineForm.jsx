import React from 'react';

export default function AirlineForm({ newAirline, setNewAirline, handleAddAirline, newPlaneCount, setNewPlaneCount }) {

  return <form onSubmit={handleAddAirline}>
    <div>
      <input
        type='text'
        placeholder='Airline Name'
        value={newAirline}
        onChange={(event) => setNewAirline(event.target.value)}
      />
      <button type='submit'>
        Add Airline
      </button>
    </div>
    <div>
      <input
        type='number'
        placeholder='Number of Planes'
        value={newPlaneCount}
        onChange={(event) => setNewPlaneCount(event.target.value)}
      />
    </div>

  </form>;
}
