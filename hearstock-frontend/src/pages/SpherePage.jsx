import React from 'react';
import SphereCoordsViewer from '../components/SphereCoordsViewer';
import Sphere3DScene from '../components/Sphere3DScene';
import SphereSoundPlayer from '../components/SphereSoundPlayer';

export default function SpherePage() {
  return (
    <div style={{ padding: '1rem' }}>
      <h2 style={{ textAlign: 'center' }}>Sphere 좌표 결과</h2>
      <Sphere3DScene />
      <SphereSoundPlayer />
      <p>x: orange</p>
      <p>y: green</p>
      <p>z: blue</p>
      <SphereCoordsViewer />
    </div>
  );
}
