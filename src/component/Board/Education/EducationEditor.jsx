import React, { useState, useEffect } from "react";
import axios from "axios";

const EducationEditor = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  // 글 작성 혹은 수정 시 제목과 내용 입력
  const handleChange = (e) => {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } else if (e.target.name === "content") {
      setContent(e.target.value);
    }
  };

  // 글 등록 또는 수정 요청 보내기
  const handleSubmit = async () => {
    if (isEditing) {
      // 수정 요청
      try {
        await axios.put(`http://localhost:3001/api/education/${editId}`, {
          title,
          content,
        });
        // 수정 완료 후 상태 초기화
        setIsEditing(false);
        setEditId(null);
        setTitle("");
        setContent("");
      } catch (error) {
        console.error("글 수정 실패:", error);
      }
    } else {
      // 등록 요청
      try {
        await axios.post("http://localhost:3001/api/education", {
          title,
          content,
        });
        // 등록 완료 후 상태 초기화
        setTitle("");
        setContent("");
      } catch (error) {
        console.error("글 등록 실패:", error);
      }
    }
  };

  // 글 삭제 요청 보내기
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/api/education/${id}`);
      // 삭제 완료 후 상태 초기화
      setTitle("");
      setContent("");
    } catch (error) {
      console.error("글 삭제 실패:", error);
    }
  };

  // 수정 모드로 전환하기
  const handleEdit = (id, title, content) => {
    setIsEditing(true);
    setEditId(id);
    setTitle(title);
    setContent(content);
  };

  return (
    <div>
      <input
        type="text"
        name="title"
        value={title}
        placeholder="제목"
        onChange={handleChange}
      />
      <textarea
        name="content"
        value={content}
        placeholder="내용"
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>{isEditing ? "수정" : "등록"}</button>
      <button onClick={() => handleDelete(editId)}>삭제</button>
      {/* 수정 모드에서만 보이는 버튼 */}
      {isEditing && <button onClick={() => setIsEditing(false)}>취소</button>}
    </div>
  );
};

export default EducationEditor;
