import React, { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loginAccess, setLoginAccess] = useState(false); // 로그인 여부
  const [id, setId] = useState(""); // 로그인 시 ID
  const navigate = useNavigate();

  //로그인(로드 시) 초기데이터
  useEffect(() => {
    const storedAccess = Cookies.get("Access");
    if (storedAccess === "true") {
      setLoginAccess(true);
      const storedS1 = Cookies.get("S1");

      if (storedS1) setId(storedS1);
    }
  }, []);

  //로그인
  const login = (idToken) => {
    setLoginAccess(true);
    setId(idToken);

    // 세션 쿠키 설정 (브라우저 종료 시 삭제되지 않도록 만료 기간 설정)
    Cookies.set("Access", true);
    Cookies.set("S1", idToken);
  };

  //로그아웃
  const logout = () => {
    setLoginAccess(false);
    setId("");
    Cookies.remove("Access");
    Cookies.remove("S1");
    alert("로그아웃 되었습니다.");
    navigate("/");
  };

  // JWT 토큰 디코딩
  const decodeS1 = () => {
    try {
      if (id) {
        return jwtDecode(id).id;
      }
      return null;
    } catch (error) {
      console.error("ID 디코딩 에러:", error);
      return null;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        loginAccess, // 로그인여부
        login, // 로그인 시 토큰값 저장
        logout, // 로그아웃 시 토큰값 삭제
        id, //로그인 시 아이디

        decodeS1,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

//다른 컴포넌트에서 사용할 useAuth(이름변경가능)
export const useAuth = () => {
  return useContext(AuthContext);
};
