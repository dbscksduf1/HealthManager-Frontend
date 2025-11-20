import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Join from "./pages/Join";
import Main from "./pages/Main";
import Bmi from "./pages/Bmi";
import MyInfo from "./pages/Myinfo";       
import Settings from "./pages/Settings";   

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 로그인 & 회원가입 */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />

        {/* 메인 기능 페이지 */}
        <Route path="/main" element={<Main />} />
        <Route path="/bmi" element={<Bmi />} />

        {/* 🔥 새로 만든 페이지 추가 */}
        <Route path="/myinfo" element={<MyInfo />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;