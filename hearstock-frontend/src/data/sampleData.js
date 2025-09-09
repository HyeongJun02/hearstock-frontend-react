export const sampleData = [
  { date: "2024-07-01", price: 1300 },
  { date: "2024-07-02", price: 1250 },
  { date: "2024-07-03", price: 1200 },
  { date: "2024-07-04", price: 1150 },
  { date: "2024-07-05", price: 1100 }, // 📉 급락 구간

  { date: "2024-07-06", price: 1140 },
  { date: "2024-07-07", price: 1180 },
  { date: "2024-07-08", price: 1230 },
  { date: "2024-07-09", price: 1290 },
  { date: "2024-07-10", price: 1350 }, // 📈 급반등

  { date: "2024-07-11", price: 1345 },
  { date: "2024-07-12", price: 1340 },
  { date: "2024-07-13", price: 1338 },
  { date: "2024-07-14", price: 1342 },
  { date: "2024-07-15", price: 1345 }, // ➖ 박스권 횡보

  { date: "2024-07-16", price: 1360 },
  { date: "2024-07-17", price: 1380 },
  { date: "2024-07-18", price: 1410 },
  { date: "2024-07-19", price: 1450 },
  { date: "2024-07-20", price: 1490 }, // 📈 재차 상승

  { date: "2024-07-21", price: 1475 },
  { date: "2024-07-22", price: 1460 },
  { date: "2024-07-23", price: 1440 },
  { date: "2024-07-24", price: 1425 },
  { date: "2024-07-25", price: 1435 }, // 📉 약한 조정

  { date: "2024-07-26", price: 1440 },
  { date: "2024-07-27", price: 1450 },
  { date: "2024-07-28", price: 1445 },
  { date: "2024-07-29", price: 1430 },
  { date: "2024-07-30", price: 1720 },
];

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
