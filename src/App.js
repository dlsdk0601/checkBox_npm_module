import styled from "styled-components";
// import useCheckBox from "./hooks/CheckBox";
import useClick from "./hooks/CheckBox";
import { useEffect, useRef, useState } from "react";
import useTest from "./hooks/CheckBox";

function App() {
  const checkObj = {
    id: "input1",
    isAll: true,
    length: 4,
  };
  const bbbb = {
    id: "input2",
    isAll: true,
    length: 4,
  };
  const aaa = useTest(checkObj);
  const bbb = useTest(bbbb);

  return (
    <Wrapper>
      <Form>
        <Label name="input1">
          <input
            {...aaa}
            data-index={0}
            name="input1"
            type="checkbox"
            value="전체동의"
          />
          전체동의
        </Label>
        <Label name="input2">
          <input
            {...aaa}
            data-index={1}
            name="input2"
            type="checkbox"
            value="동의1"
          />{" "}
          동의1
        </Label>
        <Label name="input3">
          <input
            {...aaa}
            data-index={2}
            name="input3"
            type="checkbox"
            value="동의2"
          />{" "}
          동의2
        </Label>
        <Label name="input4">
          <input
            {...aaa}
            data-index={3}
            name="input4"
            type="checkbox"
            value="동의3"
          />{" "}
          동의3
        </Label>
      </Form>
      <Form>
        <Label name="input1">
          <input
            {...bbb}
            data-index={0}
            name="input1"
            type="checkbox"
            value="전체동의"
          />
          전체동의
        </Label>
        <Label name="input2">
          <input
            {...bbb}
            data-index={1}
            name="input2"
            type="checkbox"
            value="동의1"
          />{" "}
          동의1
        </Label>
        <Label name="input3">
          <input
            {...bbb}
            data-index={2}
            name="input3"
            type="checkbox"
            value="동의2"
          />{" "}
          동의2
        </Label>
        <Label name="input4">
          <input
            {...bbb}
            data-index={3}
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
