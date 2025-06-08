export const convertToSphericalCoords = (data) => {
  const prices = data.map((d) => d.price);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);

  return data.map((d, i) => {
    const theta = (i / (data.length - 1)) * 2 * Math.PI;
    const normalized = (d.price - minPrice) / (maxPrice - minPrice);
    const phi = (1 - normalized) * Math.PI;

    const x = Math.sin(phi) * Math.cos(theta);
    const y = Math.sin(phi) * Math.sin(theta);
    const z = Math.cos(phi);

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
