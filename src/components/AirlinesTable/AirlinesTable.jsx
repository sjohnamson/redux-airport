import React from 'react';


export default function AirlinesTable({airlines}) {

  return <table>
    <thead>
      <tr>
        <th>Airlines</th>
      </tr>
    </thead>
    <tbody>
      {airlines.map((airline, i) => {
        console.log('airline in map: ', airlines);
        return (
          <tr key={i}>
            <td>{airline}</td>
          </tr>
        );
      })}
    </tbody>
  </table>;
}
