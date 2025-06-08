export const convertToSphericalCoords = (data) => {
  const prices = data.map((d) => d.price);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);

  return data.map((d, i) => {
    const thetaRange = 60; // 좌우 60도
    const phiRange = 60; // 상하 60도

    const thetaStart = (90 - thetaRange) * (Math.PI / 180);
    const thetaEnd = (90 + thetaRange) * (Math.PI / 180);
    const phiStart = (90 - phiRange) * (Math.PI / 180);
    const phiEnd = (90 + phiRange) * (Math.PI / 180);

    // θ: 시간 흐름을 구의 앞쪽 반만 사용 (0 ~ π)
    const theta = (i / (data.length - 1)) * Math.PI;

    // φ: 가격 정규화 (최고가일수록 위쪽에 배치)
    const normalized = (d.price - minPrice) / (maxPrice - minPrice);
    const phi = (1 - normalized) * Math.PI;

    // 구면좌표 → 데카르트 좌표계
    const temp = Math.sin(phi);
    const x = Math.cos(theta) * temp;
    const y = Math.cos(phi);
    const z = Math.sin(theta) * temp;

    return {
      date: d.date,
      price: d.price,
      x: Number(x.toFixed(4)),
      y: Number(y.toFixed(4)),
      z: Number(z.toFixed(4)),
      theta: Number(theta.toFixed(4)),
      phi: Number(phi.toFixed(4)),
    };
  });
};
