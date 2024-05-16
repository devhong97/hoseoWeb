import { useNavigate, useParams } from "react-router-dom";

const BoardDetail = () => {
  const { idx } = useParams();
  const navigate = useNavigate();

  return (
    <div className="detail_wrap">
      <div className="detail_back">
        <div className="detail_top_box">
          <div className="detail_title">제목</div>
          <div className="title_sub_box">
            <div className="sub_row">
              <div className="sub_title">작성자</div>
              <div className="sub_text">충남산학융합원</div>
            </div>
            <div className="sub_row">
              <div className="sub_title">작성일</div>
              <div className="sub_text">2024.04.05</div>
            </div>
            <div className="sub_row">
              <div className="sub_title">조회수</div>
              <div className="sub_text">23</div>
            </div>
          </div>
        </div>
        <div className="detail_contents_box">
          내용
        </div>
        <div className="detail_file_box">
          <div className="file_title">첨부파일 <span>2</span></div>
          <div className="file_contents_box">
            <div className="file_row">
              <div className="file_icon"></div>
              <div className="file_text">빅테이터분석전문pdf</div>
            </div>
            <div className="file_row">
              <div className="file_icon"></div>
              <div className="file_text">빅테이터분석전문pdf</div>
            </div>
          </div>
        </div>
        <div className="detail_btn_box">
          <div className="detail_btn color">교육신청하기</div>
          <div className="detail_btn" onClick={() => navigate(-1)}>목록으로</div>
        </div>
      </div>
    </div>
  );
};

export default BoardDetail;
