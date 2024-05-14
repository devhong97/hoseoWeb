import React from "react";
import { useParams } from "react-router-dom";

const EducationDetail = () => {
  const { category } = useParams();

  // 각 category에 따라 다른 JSX 출력
  let content = null;
  switch (category) {
    case "management":
      content = <p>직원 정보1의 상세 내용</p>;
      break;
    case "enterprise":
      content = <p>직원 정보2의 상세 내용</p>;
      break;
    case "resources":
      content = <p>직원 정보3의 상세 내용</p>;
      break;
    case "founded":
      content = <p>직원 정보4의 상세 내용</p>;
      break;
    default:
      content = <p>잘못된 카테고리입니다.</p>;
  }

  return (
    <div>
      <h2>Education Detail</h2>
      <p>category: {category}</p>
      {content} {/* 조건부 렌더링 */}
    </div>
  );
};

export default EducationDetail;
