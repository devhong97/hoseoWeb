import React, { useState, useRef } from "react";
import axios from "axios";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";
import "tui-color-picker/dist/tui-color-picker.css";

const BoardWrite = () => {
  const [title, setTitle] = useState(""); // 제목
  const [content, setContent] = useState(""); // 내용
  const [selectedFile, setSelectedFile] = useState(null); // 파일 첨부
  const [fileUrl, setFileUrl] = useState(""); // 파일 URL
  const editorRef = useRef(null);

  // 파일 첨부 삭제
  const handleFileDelete = () => {
    setSelectedFile(null); // 파일 선택 상태 초기화
    setFileUrl(""); // 파일 URL 초기화
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

  // 파일 선택 핸들러
  const handleFileSelect = (e) => {
    setSelectedFile(e.target.files[0]);
    const fileURL = URL.createObjectURL(e.target.files[0]);
    setFileUrl(fileURL);
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

    if (selectedFile) {
      formData.append("file", selectedFile, selectedFile.name);
    } else {
      formData.append("file", ""); // 파일이 없는 경우 빈 값을 추가합니다.
    }

    try {
      const response = await axios.post(
        "http://localhost:3001/api/post/notice_write",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      alert(`글 등록이 완료되었습니다.`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div>
        <div>제목</div>
        <input
          type="text"
          id="title"
          placeholder="제목을 입력해주세요."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <div>내용</div>
        <div className="table_contents w100">
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
      </div>
      <div>
        <div>첨부 파일</div>
        <input
          type="file"
          accept=".jpg, .jpeg, .png, .pdf"
          onChange={handleFileSelect}
        />
        {selectedFile && (
          <div className="table_contents w100">
            <img
              style={{ width: "150px", height: "150px" }}
              className="table_img"
              src={fileUrl}
              alt="첨부 이미지"
            />
            <button onClick={handleFileDelete}>삭제</button>
          </div>
        )}
      </div>
      <button onClick={handleSubmit}>등록</button>
    </div>
  );
};

export default BoardWrite;
