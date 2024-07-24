import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

const BoardDetail = () => {
  const location = useLocation();
  // const { cate } = useParams();
  // const { menuData, data } = location.state || {};
  const { menuData } = location.state || {};
  const [data, setdata] = useState("");
  const navigate = useNavigate();
  const { decodeS1 } = useAuth();
  let { idx, cate } = useParams();

  useEffect(() => {
    getDetail();
  }, []);

  const getDetail = () => {
    axios
      .get(`http://localhost:3001/api/get/board_detail?cate=${cate}&idx=${idx}`)
      .then((response) => {
        console.log("!!!!!!!!!!", response);
        const data = response.data[0];
        setdata(data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  function formatDate(isoString) {
    const date = new Date(isoString);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // 월은 0부터 시작하므로 +1 해준 후 두 자리로 맞춤
    const day = date.getDate().toString().padStart(2, "0");
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }

  console.log("menuData:", menuData);
  console.log("data:", data);

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
      return menuData.content;
    } else if (data && data.content) {
      return data.content;
    } else {
      return "";
    }
  };

  const getAttachmentCount = () => {
    let count = 0;
    for (let i = 1; i <= 5; i++) {
      if (menuData && menuData[`img${i}`]) {
        count++;
      } else if (data && data[`img${i}`]) {
        count++;
      }
    }
    return count;
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

  // console.log("LIST 데이터:", menuData);
  // console.log("HOME 데이터:", data);

  const boardEdit = () => {
    console.log(cate);
    navigate(`/board/${cate}/modify`, {
      state: {
        menuData: menuData || {}, // menuData가 undefined일 경우 빈 객체로 설정
        data: data || {},
        img1: menuData?.img1,
        img2: menuData?.img2,
        img3: menuData?.img3,
        img4: menuData?.img4,
        img5: menuData?.img5,
      },
    });
  };

  const boardDel = async () => {
    const confirmDelete = window.confirm(`해당 게시글을 삭제하시겠습니까?`);
    if (!confirmDelete) {
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3001/api/post/board_delete",
        {
          idx: menuData.idx,
          cate: cate,
        }
      );
      alert("게시글이 삭제되었습니다.");
      navigate(`/board/${cate}`, { state: { cate: cate } });
    } catch (error) {
      console.error("Error fetching list:", error);
    }
  };

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
                <div className="sub_text">{formatDate(getDate())}</div>
              </div>
              <div className="sub_row">
                <div className="sub_title">조회수</div>
                <div className="sub_text">{getHit()}</div>
              </div>
            </div>
          </div>
        )}

        <div
          className="contents_text_bbs"
          dangerouslySetInnerHTML={{
            __html: getContent(),
          }}
        ></div>

        <div className="detail_file_box">
          <div className="file_title">
            첨부파일 <span>{getAttachmentCount()}</span>
          </div>
          <div className="file_contents_box">
            {getImg().length > 0 ? (
              getImg().map((img, index) => (
                <div
                  className="file_row"
                  key={index}
                  onClick={(event) => handleDownload(event.target.textContent)}
                >
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
          {/* <div className="detail_btn color">교육신청하기</div> */}

          <div
            className="detail_btn color"
            onClick={() => navigate(`/board/${cate}`, { state: { cate } })}
          >
            목록으로
          </div>
          {decodeS1() === "admin" && (
            <Fragment>
              <div className="detail_btn short" onClick={() => boardEdit()}>
                수정
              </div>
              <div className="detail_btn short" onClick={() => boardDel()}>
                삭제a
              </div>
            </Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

export default BoardDetail;
