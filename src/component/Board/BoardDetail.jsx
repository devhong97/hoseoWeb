import { useLocation, useNavigate } from "react-router-dom";

const BoardDetail = () => {
  const location = useLocation();
  const { menuData, data } = location.state || {};
  const navigate = useNavigate();

  const handleDownload = (fileName) => {
    const link = document.createElement("a");
    window.open(`http://localhost:3001/api/download/${fileName}`, "_blank");
    link.setAttribute("download", fileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getTitle = () => {
    if (menuData && menuData.title) {
      return menuData.title;
    } else if (data && data.title) {
      return data.title;
    } else {
      return "";
    }
  };

  const getWriter = () => {
    if (menuData && menuData.writer) {
      return menuData.writer;
    } else if (data && data.writer) {
      return data.writer;
    } else {
      return "";
    }
  };

  const getDate = () => {
    if (menuData && menuData.date) {
      return menuData.date;
    } else if (data && data.date) {
      return data.date;
    } else {
      return "";
    }
  };

  const getHit = () => {
    if (menuData && menuData.hit) {
      return menuData.hit;
    } else if (data && data.hit) {
      return data.hit;
    } else {
      return "";
    }
  };

  const getContent = () => {
    if (menuData && menuData.content) {
      return menuData.content.replace(/(<([^>]+)>)/gi, "");
    } else if (data && data.content) {
      return data.content.replace(/(<([^>]+)>)/gi, "");
    } else {
      return "";
    }
  };

  const getImg = () => {
    const images = [];
    for (let i = 1; i <= 5; i++) {
      if (menuData && menuData[`img${i}`]) {
        images.push(menuData[`img${i}`]);
      } else if (data && data[`img${i}`]) {
        images.push(data[`img${i}`]);
      }
    }
    return images;
  };

  console.log("LIST 데이터:", menuData);
  console.log("HOME 데이터:", data);

  return (
    <div className="detail_wrap">
      <div className="detail_back">
        {getTitle() && (
          <div className="detail_top_box">
            <div className="detail_title">{getTitle()}</div>
            <div className="title_sub_box">
              <div className="sub_row">
                <div className="sub_title">작성자</div>
                <div className="sub_text">{getWriter()}</div>
              </div>
              <div className="sub_row">
                <div className="sub_title">작성일</div>
                <div className="sub_text">{getDate()}</div>
              </div>
              <div className="sub_row">
                <div className="sub_title">조회수</div>
                <div className="sub_text">{getHit()}</div>
              </div>
            </div>
          </div>
        )}
        {getContent() && (
          <div className="detail_contents_box">{getContent()}</div>
        )}
        <div className="detail_file_box">
          <div className="file_title">
            첨부파일 <span>1</span>
          </div>
          <div
            className="file_contents_box"
            onClick={(event) => handleDownload(event.target.textContent)}
          >
            {getImg().length > 0 ? (
              getImg().map((img, index) => (
                <div className="file_row" key={index}>
                  <div className="file_icon"></div>
                  <div className="file_text">{img}</div>
                </div>
              ))
            ) : (
              <div className="file_row">
                <div className="file_text" style={{ paddingRight: "10px" }}>
                  첨부파일이 존재하지 않습니다.
                </div>
              </div>
            )}
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
