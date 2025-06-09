import React from 'react';
import SphereCoordsViewer from '../components/SphereCoordsViewer';
import Sphere3DScene from '../components/Sphere3DScene';
import SphereSoundPlayer from '../components/SphereSoundPlayer';
import Sphere2DGraph from '../components/Sphere2DGraph';

import { sampleData } from '../data/sampleData';
import { convertToSphericalCoords } from '../utils/sphereUtils';

export default function SpherePage() {
  const points = convertToSphericalCoords(sampleData);
  return (
    <div style={{ padding: '1rem' }}>
      <h2 style={{ textAlign: 'center' }}>Sphere 좌표 결과</h2>
      <Sphere3DScene points={points}/>
      <SphereSoundPlayer />
      <Sphere2DGraph points={points} />
      <SphereCoordsViewer />
    </div>
  );
}
