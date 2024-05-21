import React, { useState } from "react";
import Axios from "axios";
import { useAuth } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useAuth(); // 로그인 시 데이터
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  // form태그 부분
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios.post(
        "http://101.101.216.95:3001/api/post/login",
        {
          id: id,
          password: pw,
        }
      );
      const { success, S1 } = response.data;
      if (success) {
        login(S1);
        alert(`[ ${id} ]님 환영합니다.`);
        navigate("/");
      } else {
        alert("로그인에 실패했습니다.");
      }
    } catch (error) {
      console.error("로그인 실패:", error);
      setError(true);
    }
  };
  return (
    <div className="login_wrap">
      <div className="login_back">
        <div className="login_title">관리자 로그인</div>
        <form onSubmit={handleSubmit}>
          <div className="login_row">
            <div className="input_title">아이디</div>
            <input
              className="login_input"
              placeholder="ID"
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </div>
          <div className="login_row">
            <div className="input_title">비밀번호</div>
            <input
              placeholder="PASSWORD"
              className="login_input"
              type="password"
              value={pw}
              onChange={(e) => setPw(e.target.value)}
            />
          </div>
          <button type="submit" className="submit_btn">로그인</button>
        </form>
        {error && (
          <div className="error_text">
            아이디 또는 비밀번호가 일치하지 않습니다.
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
