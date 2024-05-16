import { useParams } from "react-router-dom";

const BoardDetail = () => {
  const { idx } = useParams();

  return (
    <div>
      <h2>글 상세 페이지</h2>
      <p>글 번호: {idx}</p>
      {/* 상세 정보를 표시하는 내용 */}
    </div>
  );
};

export default BoardDetail;
