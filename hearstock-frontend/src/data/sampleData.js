export const sampleData = (() => {
  const data = [];
  const baseDate = new Date();
  const total = 30;

  let price = 1000; // 시작 가격

  for (let i = 0; i < total; i++) {
    const date = new Date(baseDate);
    date.setDate(date.getDate() - (total - 1 - i));

    // 구간별 추세 설정
    if (i < 10) {
      // 1~10: 상승
      price += Math.random() * 10 + 5; // +5 ~ +15
    } else if (i < 20) {
      // 11~20: 하락
      price -= Math.random() * 10 + 5; // -5 ~ -15
    } else {
      // 21~30: 상승
      price += Math.random() * 10 + 5;
    }

    // 약간의 노이즈 추가
    const noise = (Math.random() - 0.5) * 10; // -5 ~ +5

    data.push({
      date: date.toISOString().slice(0, 10),
      price: Math.floor(price + noise),
    });
  }

  return data;
})();

// 극단적인 데이터 ver
// export const sampleData = (() => {
//   const data = [];
//   const baseDate = new Date();
//   const total = 30;

//   // 의도적으로 극단적인 패턴 설계
//   const pattern = [
//     ...Array(5).fill(1000), // 기준선
//     ...Array(5).fill(1300), // 매우 높은 값 (위 극대)
//     ...Array(5).fill(700), // 매우 낮은 값 (아래 극대)
//     ...Array(5).fill(1200), // 높은 값 (위)
//     ...Array(5).fill(800), // 낮은 값 (아래)
//     ...Array(5).fill(1000), // 기준선 복귀
//   ];

//   for (let i = 0; i < total; i++) {
//     const date = new Date(baseDate);
//     date.setDate(date.getDate() - (total - 1 - i));

//     // 약간의 노이즈 추가
//     const noise = (Math.random() - 0.5) * 10; // -5 ~ +5
//     const price = pattern[i] + noise;

//     data.push({
//       date: date.toISOString().slice(0, 10),
//       price: Math.floor(price),
//     });
//   }

//   return data;
// })();
