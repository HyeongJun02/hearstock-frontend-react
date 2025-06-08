import React from 'react';
import * as Tone from 'tone';
import { sampleData } from '../data/sampleData';
import { convertToSphericalCoords } from '../utils/sphereUtils';

export default function SphereSoundPlayer() {
  const coords = convertToSphericalCoords(sampleData);

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const handlePlay = async () => {
    await Tone.start(); // 사용자 제스처로 오디오 시작

    const synth = new Tone.Synth().toDestination();

    // 사용자 위치 설정
    Tone.Listener.positionX.value = 0;
    Tone.Listener.positionY.value = 0;
    Tone.Listener.positionZ.value = 0;

    for (let i = 0; i < coords.length; i++) {
      const p = coords[i];

      const panner = new Tone.Panner3D({
        positionX: p.x,
        positionY: p.y,
        positionZ: p.z,
      }).toDestination();

      const tempSynth = new Tone.Synth().connect(panner);
      tempSynth.triggerAttackRelease('C5', '8n'); // beep
      await sleep(100); // 500ms 대기
    }
  };

  return (
    <div style={{ textAlign: 'center', margin: '1rem' }}>
      <button onClick={handlePlay} style={{ padding: '10px 20px' }}>
        🔊 재생 (Beep)
      </button>
    </div>
  );
}
