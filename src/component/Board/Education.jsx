import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

const Education = () => {
  const navigate = useNavigate();
  const { decodeS1 } = useAuth();
  const s1 = decodeS1();

  const movePage = (category) => {
    navigate(`/education/${category}`, { state: { category: s1 } });
  };

  return (
    <div>
      <div>Education</div>
      <div>
        <button onClick={() => movePage("management")}>직원 정보1</button>
        <br />
        <button onClick={() => movePage("enterprise")}>직원 정보2</button>
        <br />
        <button onClick={() => movePage("resources")}>직원 정보3</button>
        <br />
        <button onClick={() => movePage("founded")}>직원 정보4</button>
      </div>
    </div>
  );
};

export default Education;
