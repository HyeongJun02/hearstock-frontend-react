import React from 'react';
import { sampleData } from '../data/sampleData';
import { convertToSphericalCoords } from '../utils/sphereUtils';

export default function SphereCoordsViewer() {
  const coords = convertToSphericalCoords(sampleData);

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Sphere Coordinates from JSON</h2>
      <table border="1" cellPadding="4" cellSpacing="0">
        <thead>
          <tr>
            <th>Date</th>
            <th>Price</th>
            <th>x</th>
            <th>y</th>
            <th>z</th>
            <th>θ (rad)</th>
            <th>φ (phi)</th>
          </tr>
        </thead>
        <tbody>
          {coords.map((point, idx) => (
            <tr key={idx}>
              <td>{point.date}</td>
              <td>{point.price}</td>
              <td>{point.x}</td>
              <td>{point.y}</td>
              <td>{point.z}</td>
              <td>{point.theta}</td>
              <td>{point.phi}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
