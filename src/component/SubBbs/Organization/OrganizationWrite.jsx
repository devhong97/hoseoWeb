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
        "https://ciuc.or.kr:8443/api/post/organization_write",
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
      navigate(`/organization/${category}`, { state: { category: category } });
    } catch (error) {
      console.error("데이터 전송 중 오류 발생:", error);
    }
  };

  return (
    <div className="detail_wrap">
      <div className="detail_back">
        <div className="detail_title_box">직원정보 등록</div>
        <div className="detail_top_box member">
          <div className="detail_title member">
            <div className="input_label">이름</div>
            <input
              className="detail_input member"
              placeholder="이름을 입력하세요."
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>
          <div className="detail_title member">
            <div className="input_label">직위</div>
            <input
              className="detail_input member"
              placeholder="직위를 입력하세요."
              type="text"
              id="spot"
              value={spot}
              onChange={(e) => setSpot(e.target.value)}
            ></input>
          </div>
          <div className="detail_title member">
            <div className="input_label">업무</div>
            <input
              className="detail_input member"
              placeholder="업무를 입력하세요."
              type="text"
              id="work"
              value={work}
              onChange={(e) => setWork(e.target.value)}
            ></input>
          </div>
          <div className="detail_title member">
            <div className="input_label">전화번호</div>
            <input
              className="detail_input member"
              placeholder="전화번호를 입력하세요."
              type="number"
              id="tel"
              value={tel}
              onChange={(e) => setTel(e.target.value)}
            ></input>
          </div>
          <div className="detail_title member">
            <div className="input_label">이메일</div>
            <input
              className="detail_input member"
              placeholder="이메일을 입력하세요."
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
        </div>

        <div className="detail_btn_box">
          <div className="detail_btn color" onClick={handleSubmit}>
            작성완료
          </div>
          <div className="detail_btn" onClick={() => navigate(-1)}>
            취소
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizationWrite;
