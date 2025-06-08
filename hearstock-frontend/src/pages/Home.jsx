import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; // 따로 스타일 분리해도 되고 App.css에 넣어도 됨

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1 className="home-title">📊 데이터 시각화 메인</h1>
      <button className="nav-button" onClick={() => navigate('/sphere')}>
        Sphere 좌표 보기
      </button>
    </div>
  );
}

export default Home;
