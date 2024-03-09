import React from "react";

export default function List({ bucket, setBucket }) {
  const handleDeleteBtn = id => {
    const updatedBucket = bucket.filter(item => item.id !== id);
    setBucket(updatedBucket);
  };

  return (
    <ul>
      {bucket.map(item => (
        <li key={item.id}>
          {item.content}
          <button onClick={() => handleDeleteBtn(item.id)}>삭제</button>
        </li>
      ))}
    </ul>
  );
}
