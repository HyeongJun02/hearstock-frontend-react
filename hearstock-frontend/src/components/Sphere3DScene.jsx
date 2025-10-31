import React, { useEffect, useState } from 'react';
import './Sphere3DScene.css';

// ✅ three.js 관련 모듈은 클라이언트 환경에서만 import
let Canvas, OrbitControls, Line;
if (typeof window !== 'undefined') {
  const fiber = require('@react-three/fiber');
  const drei = require('@react-three/drei');
  Canvas = fiber.Canvas;
  OrbitControls = drei.OrbitControls;
  Line = drei.Line;
}

function Point({ position, color = 'grey', isActive }) {
  return (
    <mesh position={position}>
      <sphereGeometry args={[isActive ? 0.05 : 0.03, 24, 24]} />
      <meshStandardMaterial
        color={color}
        emissive={isActive ? color : 'black'}
        emissiveIntensity={isActive ? 0.6 : 0}
        roughness={0.4}
        metalness={0.2}
      />
    </mesh>
  );
}

export default function Sphere3DScene({ points = [], currentIndex = 0 }) {
  const [isClient, setIsClient] = useState(false);

  // ✅ 브라우저 환경에서만 렌더링하도록 설정
  useEffect(() => {
    setIsClient(typeof window !== 'undefined');
  }, []);

  const linePoints = points.map((p) => [p.x, p.y, p.z]);

  if (!isClient) {
    // SSR 환경(Vercel 빌드 등)에서는 아무것도 렌더링하지 않음
    return null;
  }

  return (
    <div className="sphere3d-container">
      <div className="canvas-wrapper">
        <Canvas camera={{ position: [2, 2, 2], fov: 60 }}>
          {/* ✨ 조명 */}
          <ambientLight intensity={0.7} />
          <directionalLight position={[3, 5, 2]} intensity={1.2} />
          <pointLight position={[0, 0, 3]} intensity={0.8} />

          <OrbitControls enablePan enableZoom enableRotate />

          {/* 점 + 선 */}
          {points.map((p, idx) => (
            <Point
              key={idx}
              position={[p.x, p.y, p.z]}
              color={idx === currentIndex ? '#ff1744' : '#90a4ae'}
              isActive={idx === currentIndex}
            />
          ))}

          <Line
            points={linePoints}
            color="#29b6f6"
            lineWidth={2}
            dashed={false}
          />

          <axesHelper args={[1.5]} />
        </Canvas>
      </div>

      <div className="axis-legend">
        <p>
          <span className="axis-dot x" /> X축 (🟠)
        </p>
        <p>
          <span className="axis-dot y" /> Y축 (🟢)
        </p>
        <p>
          <span className="axis-dot z" /> Z축 (🔵)
        </p>
      </div>
    </div>
  );
}
