import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Input from "./Input";

export default function Form({ bucket, setBucket }) {
  const [content, setContent] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    console.log("hi");

    const id = uuidv4();
    const newContent = {
      id,
      content,
      isDone: false,
    };

    setBucket([newContent, ...bucket]);
    setContent("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <Input bucket={content} setBucket={setContent} />
      <button>+</button>
    </form>
  );
}
