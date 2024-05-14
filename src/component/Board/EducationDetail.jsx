import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const EducationDetail = () => {
  const { category } = useParams();
  const [data, setData] = useState([]);

  //교육 상세데이터
  const categoryDataSet = (category) => {
    axios
      .get(`http://localhost:3001/api/education/${category}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    categoryDataSet(category);
  }, [category]);

  // 각 카테고리별 테이블 내용
  const renderTable = () => {
    return (
      <div>
        <div>
          <div >직원정보 등록</div>
        </div>
        <div>
          <input type="text" placeholder="검색..." />
        </div>
        <table>
          <thead>
            <tr>
              <th>이름</th>
              <th>직위</th>
              <th>업무</th>
              <th>전화번호</th>
              <th>이메일</th>
            </tr>
          </thead>
          <tbody>
            {data.map((employee, index) => (
              <tr key={index}>
                <td>{employee.name}</td>
                <td>{employee.spot}</td>
                <td>{employee.work}</td>
                <td>{employee.tel}</td>
                <td>{employee.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  let content = null;

  switch (category) {
    case "management":
      content = renderTable();
      break;
    case "enterprise":
      content = renderTable();
      break;
    case "resources":
      content = renderTable();
      break;
    case "founded":
      content = renderTable();
      break;
    default:
      content = <p>잘못된 카테고리입니다.</p>;
  }

  return <div>{content}</div>;
};

export default EducationDetail;
