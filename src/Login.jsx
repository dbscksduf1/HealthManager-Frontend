import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await fetch("http://localhost:9090/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.text();

      if (res.ok) {
        console.log("로그인 성공:", data);
        localStorage.setItem("token", data);
        navigate("/home");
      } else {
        alert("로그인 실패: " + data);
      }
    } catch (error) {
      console.error("로그인 오류:", error);
      alert("서버 오류 발생");
    }
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f3f4f6",
      }}
    >
      <div
        style={{
          padding: 30,
          borderRadius: 10,
          background: "white",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          width: 350,
          textAlign: "center",
        }}
      >
        <h1 style={{ marginBottom: 30 }}>로그인</h1>

        <input
          placeholder="아이디"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{
            width: "100%",
            padding: 12,
            marginBottom: 15,
            borderRadius: 6,
            border: "1px solid #ccc",
          }}
        />

        <input
          placeholder="비밀번호"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: 12,
            marginBottom: 20,
            borderRadius: 6,
            border: "1px solid #ccc",
          }}
        />

        <button
          onClick={handleLogin}
          style={{
            width: "100%",
            padding: 12,
            background: "#4f46e5",
            color: "white",
            border: "none",
            borderRadius: 6,
            cursor: "pointer",
            fontSize: 16,
          }}
        >
          로그인
        </button>
      </div>
    </div>
  );
}

export default Login;
