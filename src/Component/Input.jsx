import React from "react";

export default function Input({ bucket, setBucket }) {
  return (
    <>
      <input
        value={bucket}
        onChange={e => setBucket(e.target.value)}
        placeholder="내용을 입력하세요."
        type="text"
      />
    </>
  );
}
