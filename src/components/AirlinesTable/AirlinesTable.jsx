import React from 'react';


export default function AirlinesTable({ airlines, planeCount }) {

  return <table>
    <thead>
      <tr>
        <th>Airlines</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        {airlines?.map((airline, i) => {
          console.log('airline in map: ', airlines);
          return (
            <td key={i}>{airline}</td>
          );
        })}
        {planeCount?.map((planes, i) => {
          console.log('planes in map: ', planes);
          return (
            <td key={i}>{planeCount}</td>
          );
        })}
      </tr>
    </tbody>
  </table>;
}
