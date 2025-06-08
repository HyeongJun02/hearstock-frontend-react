export const sampleData = Array.from({ length: 30 }, (_, i) => {
  const date = new Date();
  date.setDate(date.getDate() - (29 - i));

  return {
    date: date.toISOString().slice(0, 10),
    price: Math.floor(Math.random() * 1000 + 1000),
  };
});
