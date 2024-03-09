import React, { useState } from "react";
import styled from "styled-components";
import Form from "./Component/Form";
import List from "./Component/List";

export default function App() {
  const [bucket, setBucket] = useState([]);

  return (
    <Done>
      <div>
        <Form bucket={bucket} setBucket={setBucket} />
        <List bucket={bucket} setBucket={setBucket} />
      </div>
    </Done>
  );
}

const Done = styled.div`
  background-image: url("/design/벚꽃배경1.jpg"); /* Assuming "design" folder is in the public folder */
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh; /* Add a height to ensure the background covers the entire viewport */
`;
