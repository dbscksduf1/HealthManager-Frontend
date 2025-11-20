import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import api from "../api";
import { page, card, btn, colors } from "../styles/preset";

function Main() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("로그인이 필요합니다.");
      navigate("/");
    }
  }, []);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const res = await api.get("/user/me");
        setUser(res.data);
      } catch (e) {
        console.error("유저 정보 불러오기 오류:", e);
      }
    };
    loadUser();
  }, []);

  return (
    <div style={page}>
      <Navbar />

      <div style={{ marginTop: 50 }}> {/* Navbar 공간 확보 */}
        <div style={card}>
          <h1 style={{ marginBottom: 10, color: colors.green }}>
            HealthManager
          </h1>

          {user ? (
            <p style={{ marginBottom: 25, color: "#333" }}>
              <b>{user.username}</b>님 환영합니다!  
              <br />
              나이: {user.age}세
            </p>
          ) : (
            <p style={{ marginBottom: 25 }}>로딩중...</p>
          )}

          <p style={{ color: "#555", marginBottom: 30 }}>
            BMI 계산 / 운동 루틴 / 식단 루틴 추천 서비스
          </p>

          <div style={btnGroup}>
            <button style={btn} onClick={() => navigate("/bmi")}>
              BMI 계산
            </button>

            <button
              style={btn}
              onClick={() => navigate("/myinfo")}
            >
              내 정보
            </button>

            <button
              style={btn}
              onClick={() => navigate("/settings")}
            >
              설정
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const btnGroup = {
  display: "flex",
  flexDirection: "column",
  gap: 12,
};

export default Main;
