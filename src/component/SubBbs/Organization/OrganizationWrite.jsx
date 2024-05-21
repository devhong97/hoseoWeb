import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const OrganizationWrite = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [spot, setSpot] = useState("");
  const [work, setWork] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://101.101.216.95:3001/api/post/organization_write",
        {
          category,
          name,
          spot,
          work,
          tel,
          email,
        }
      );
      console.log(response.data);
      const getCategoryName = (category) => {
        switch (category) {
          case "management":
            return "[경영혁신실]";
          case "enterprise":
            return "[기업지원실]";
          case "resources":
            return "[인재개발실]";
          case "founded":
            return "[창업지원실]";
          default:
            return "";
        }
      };
      alert(`${getCategoryName(category)} ${name} 직원등록이 완료되었습니다.`);
    } catch (error) {
      console.error("데이터 전송 중 오류 발생:", error);
    }
  };

  return (
    <div>
      <h2>직원등록</h2>
      <div>
        <label htmlFor="name">이름</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="spot">직위</label>
        <input
          type="text"
          id="spot"
          value={spot}
          onChange={(e) => setSpot(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="work">업무</label>
        <input
          type="text"
          id="work"
          value={work}
          onChange={(e) => setWork(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="tel">전화번호</label>
        <input
          type="text"
          id="tel"
          value={tel}
          onChange={(e) => setTel(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">이메일</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button onClick={handleSubmit}>등록</button>
    </div>
  );
};

export default OrganizationWrite;
