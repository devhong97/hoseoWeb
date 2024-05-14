import React, { useState } from "react";

const Login = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // 여기에 로그인 처리 로직을 추가합니다. (예: 서버로 아이디와 비밀번호 전송)
    console.log("아이디:", id);
    console.log("비밀번호:", pw);
    // 로그인 후에 필요한 작업을 수행합니다. (예: 페이지 이동 등)
  };

  const loginHandle = () => {
    alert("로그인이 완료되었습니다.");
  };

  return (
    <div>
      <h2>관리자 로그인</h2>
      <form onSubmit={handleSubmit}>
        <div>
          아이디:
          <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div>
          비밀번호:
          <input
            type="password"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
          />
        </div>
        <button type="submit" onClick={loginHandle}>
          로그인
        </button>
      </form>
    </div>
  );
};

export default Login;
