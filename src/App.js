import styled from "styled-components";
// import useCheckBox from "./hooks/CheckBox";
import useClick from "./hooks/CheckBox";
import { useEffect, useRef, useState } from "react";

function App() {
  const checkObj = {
    id: 1,
    isAll: true,
    length: 3,
  };
  const bbbb = {
    id: 2,
    isAll: true,
    length: 2,
  };
  // const [all, checkArr, checkHandle] = useCheckBox(checkObj);
  const [aaa, onClick] = useClick(checkObj);

  return (
    <Wrapper>
      <Form>
        <Label name="input1">
          <input
            ref={(el) => (aaa.current[0] = el)}
            onClick={onClick}
            data-index={-1}
            id={1}
            name="input1"
            type="checkbox"
            value="전체동의"
          />
          전체동의
        </Label>
        <Label name="input2">
          <input
            ref={(el) => (aaa.current[1] = el)}
            name="input2"
            onClick={onClick}
            id={1}
            type="checkbox"
            value="동의1"
          />{" "}
          동의1
        </Label>
        <Label name="input3">
          <input
            ref={(el) => (aaa.current[2] = el)}
            name="input3"
            onClick={onClick}
            id={1}
            type="checkbox"
            value="동의2"
          />{" "}
          동의2
        </Label>
        <Label name="input4">
          <input
            ref={(el) => (aaa.current[3] = el)}
            id={1}
            onClick={onClick}
            name="input4"
            type="checkbox"
            value="동의3"
          />{" "}
          동의3
        </Label>
      </Form>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  max-width: 500px;
  height: 100vh;
  margin: 0 auto;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding-top: 20px;
`;

const Label = styled.label`
  font-size: 26px;
  margin-bottom: 10px;
`;

const Input = styled.input``;

export default App;
