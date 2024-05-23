import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";
import "tui-color-picker/dist/tui-color-picker.css";
import { useNavigate, useParams } from "react-router-dom";

const BoardWrite = () => {
  const { cate } = useParams();
  const [cateTitle, setCateTitle] = useState(""); //게시판제목
  const [title, setTitle] = useState(""); // 제목
  const [content, setContent] = useState(""); // 내용
  const [selectedFiles, setSelectedFiles] = useState([]); // 파일 첨부
  const [fileUrls, setFileUrls] = useState([]); // 파일 URL
  const editorRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (cate !== "") {
      switch (cate) {
        case "notice":
          setCateTitle("공지사항");
          break;
        case "business":
          setCateTitle("사업공고");
          break;
        case "education":
          setCateTitle("교육공고");
          break;
        case "employment":
          setCateTitle("채용공고");
          break;
        case "bid":
          setCateTitle("입찰공고");
          break;
        case "related":
          setCateTitle("유관기관 공고");
          break;
        case "news":
          setCateTitle("융합원 뉴스");
          break;
        case "reference":
          setCateTitle("자료실");
          break;
        case "archive":
          setCateTitle("융합원 아카이브");
          break;
        default:
          return;
      }
    }
  }, [cate]);

  // 파일 첨부 삭제
  const handleFileDelete = (index) => {
    const updatedFiles = [...selectedFiles];
    updatedFiles.splice(index, 1);
    setSelectedFiles(updatedFiles);

    const updatedUrls = [...fileUrls];
    updatedUrls.splice(index, 1);
    setFileUrls(updatedUrls);
  };

  // Editor 파일 업로드 관련 함수
  const onUploadImage = async (blob, callback) => {
    try {
      const formData = new FormData();
      formData.append("image", blob);

      const response = await axios.post(
        "http://localhost:3001/api/post/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      const imageUrl = response.data.imageUrl;
      console.log("Uploaded image URL:", imageUrl); // 이미지 URL
      callback(imageUrl, "alt text");
    } catch (error) {
      console.error("이미지 업로드 중 오류 발생", error);
    }
  };

  // 내용 체크
  const handleContent = () => {
    const editorInstance = editorRef.current.getInstance();
    const htmlContent = editorInstance.getHTML();
    setContent(htmlContent);
  };

  const handleFileSelect = (e) => {
    const files = Array.from(e.target.files);
    const totalFiles = selectedFiles.length + files.length;

    if (totalFiles > 5) {
      alert("첨부파일은 최대 5개까지입니다.");
      return;
    }

    const urls = files.map((file) => URL.createObjectURL(file));

    setSelectedFiles([...selectedFiles, ...files]);
    setFileUrls([...fileUrls, ...urls]);
  };

  // 글 등록 핸들러
  const handleSubmit = async () => {
    if (title === "") {
      alert("제목을 입력해주세요.");
      return;
    } else if (content === "") {
      alert("내용을 입력해주세요.");
      return;
    }

    // 첨부 파일
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("cate", cate);

    selectedFiles.forEach((file, index) => {
      formData.append(`files`, file);
    });

    try {
      const response = await axios.post(
        "http://localhost:3001/api/post/board_write",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      alert(`글 등록이 완료되었습니다.`);

      setTitle("");
      setContent("");
      setSelectedFiles([]);

      navigate(`/board/${cate}`, { state: { cate: cate } });
    } catch (error) {
      console.error(error);
    }
  };

  const handleFileClick = () => {
    document.getElementById("file_input").click();
  };

  return (
    <div className="detail_wrap">
      <div className="detail_back">
        <div className="detail_title_box">{cateTitle} 글쓰기</div>
        <div className="detail_top_box">
          <div className="detail_title">
            <input
              className="detail_input"
              placeholder="제목을 입력하세요."
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            ></input>
          </div>
        </div>
        <div className="detail_contents_box">
          <Editor
            initialValue=" " // content를 Editor의 초기값으로 사용
            height="300px"
            initialEditType="wysiwyg"
            plugins={[colorSyntax]}
            placeholder="내용을 입력하세요"
            ref={editorRef}
            hooks={{
              addImageBlobHook: onUploadImage,
            }}
            onChange={handleContent}
            id="content"
          />
        </div>
        <div className="detail_file_box write">
          <div className="file_title">첨부파일 (최대 5개)</div>
          <div className="file_contents_box">
            <div className="file_row color" onClick={() => handleFileClick()}>
              <div className="file_icon"></div>
              <div className="file_text">사진 및 파일 첨부</div>
              <input
                id="file_input"
                className="file_input"
                type="file"
                accept=".jpg, .jpeg, .png, .pdf"
                onChange={handleFileSelect}
                multiple
              />
            </div>
            {selectedFiles.map((file, index) => (
              <div className="file_row ellipsis" key={index}>
                <div className="file_icon"></div>
                <div className="file_text ellipsis">{file.name}</div>
                <div
                  className="delete_btn"
                  onClick={() => handleFileDelete(index)}
                >
                  X
                </div>
              </div>
            ))}
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

export default BoardWrite;
