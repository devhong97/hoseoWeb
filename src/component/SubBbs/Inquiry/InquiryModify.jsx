import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";
import "tui-color-picker/dist/tui-color-picker.css";
import { useLocation, useNavigate } from "react-router-dom";

const InquiryModify = () => {
  const location = useLocation();
  const { inquiryList, img1, img2, img3, img4, img5 } = location.state || {};
  const [title, setTitle] = useState(inquiryList.title || ""); // 제목
  const [content, setContent] = useState(inquiryList.content || ""); // 내용
  const [selectedFiles, setSelectedFiles] = useState([]); // 파일 첨부
  const [fileUrls, setFileUrls] = useState([]); // 파일 URL
  const editorRef = useRef(null);
  const navigate = useNavigate();
  const cate = "inquiry";

  // 메뉴 데이터가 변경될 때마다 초기값 설정
  useEffect(() => {
    setTitle(inquiryList.title || "");
    setContent(inquiryList.content || "");
  }, [inquiryList]);

  // 파일 첨부 삭제
  const handleFileDelete = (index) => {
    const updatedFiles = [...selectedFiles];
    updatedFiles.splice(index, 1);
    setSelectedFiles(updatedFiles);

    const updatedUrls = [...fileUrls];
    const deletedFileName = updatedUrls[index]; // 삭제된 파일 이름 가져오기
    updatedUrls.splice(index, 1);
    setFileUrls(updatedUrls);

    // 파일을 삭제한 후에는 이미지 URL 배열의 순서를 조정
    const newFileUrls = updatedUrls.map((url) => {
      if (url === deletedFileName) {
        return ""; // 삭제된 파일은 빈 문자열로 대체
      }
      return url;
    });
    console.log("Updated Selected Files:", updatedFiles);
    console.log("Updated File URLs:", updatedUrls);
  };

  // 파일 URL 설정
  useEffect(() => {
    const images = [];
    for (let i = 1; i <= 5; i++) {
      if (inquiryList && inquiryList[`img${i}`]) {
        images.push(inquiryList[`img${i}`]);
      } else if (eval(`img${i}`)) {
        images.push(eval(`img${i}`));
      }
    }
    setFileUrls(images);
  }, [inquiryList, img1, img2, img3, img4, img5]);

  // Editor 파일 업로드 관련 함수
  const onUploadImage = async (blob, callback) => {
    try {
      const formData = new FormData();
      formData.append("image", blob);

      const response = await axios.post(
        "http://101.101.216.95:3001/api/post/upload",
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

    const newSelectedFiles = [...selectedFiles];
    const newFileUrls = [...fileUrls];

    const existingFileCount = fileUrls.filter((url) =>
      url.startsWith("img")
    ).length;

    files.forEach((file, index) => {
      newSelectedFiles.push(file);
      const newFileIndex = existingFileCount + index + 1;
      const fileName = file.name; // 원본 이미지 파일 이름 가져오기
      newFileUrls.push(fileName); // 파일 이름으로 추가
    });

    setSelectedFiles(newSelectedFiles);
    setFileUrls(newFileUrls);

    console.log("새로운 파일 선택 시 상태:", newFileUrls);
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

    const formData = new FormData();
    formData.append("idx", inquiryList.idx);
    formData.append("category", cate);
    formData.append("title", title);
    formData.append("content", content);

    // 이미지 URL을 FormData에 추가
    for (let i = 0; i < fileUrls.length; i++) {
      formData.append(`img${i + 1}`, fileUrls[i]);
    }

    try {
      // 이미지를 업로드하고 저장
      await Promise.all(
        selectedFiles.map(async (file) => {
          if (!file.name.startsWith("blob")) {
            formData.append(`files`, file);
            return;
          }
          const imageFormData = new FormData();
          imageFormData.append("image", file);
          const response = await axios.post(
            "http://101.101.216.95:3001/api/post/upload",
            imageFormData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );
          formData.append(`files`, response.data.imageUrl);
        })
      );

      // 게시글 수정 요청
      const response = await axios.post(
        "http://101.101.216.95:3001/api/post/inquiry_modify",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      alert(`글 수정이 완료되었습니다.`);

      setTitle("");
      setContent("");
      setSelectedFiles([]);
      navigate(`/board/${cate}`, {
        state: { cate: cate },
      });
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
            initialValue={content} // content를 Editor의 초기값으로 사용
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
            {fileUrls.map((url, index) => (
              <div className="file_row ellipsis" key={index}>
                <div className="file_icon"></div>
                <div className="file_text ellipsis">{url}</div>
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
        </div>
        <div className="detail_btn_box">
          <div className="detail_btn" onClick={() => navigate(-1)}>
            취소
          </div>
        </div>
      </div>
    </div>
  );
};

export default InquiryModify;
