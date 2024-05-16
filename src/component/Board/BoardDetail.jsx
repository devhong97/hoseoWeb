import { useLocation, useNavigate } from "react-router-dom";

const BoardDetail = () => {
  const location = useLocation();
  const { menuData } = location.state || {};
  const navigate = useNavigate();

  console.log("LIST 데이터:", menuData);

  return (
    <div className="detail_wrap">
      <div className="detail_back">
        {menuData && (
          <div className="detail_top_box">
            <div className="detail_title">{menuData.title}</div>
            <div className="title_sub_box">
              <div className="sub_row">
                <div className="sub_title">작성자</div>
                <div className="sub_text">{menuData.writer}</div>
              </div>
              <div className="sub_row">
                <div className="sub_title">작성일</div>
                <div className="sub_text">{menuData.date}</div>
              </div>
              <div className="sub_row">
                <div className="sub_title">조회수</div>
                <div className="sub_text">{menuData.hit}</div>
              </div>
            </div>
          </div>
        )}
        {menuData && (
          <div className="detail_contents_box">
            {menuData.content.replace(/(<([^>]+)>)/gi, "")}
          </div>
        )}
        <div className="detail_file_box">
          <div className="file_title">
            첨부파일 <span>1</span>
          </div>
          <div className="file_contents_box">
            <div className="file_row">
              <div className="file_icon"></div>
              <div className="file_text">{menuData.img}</div>
            </div>
          </div>
        </div>
        <div className="detail_btn_box">
          <div className="detail_btn color">교육신청하기</div>
          <div className="detail_btn" onClick={() => navigate(-1)}>
            목록으로
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardDetail;
