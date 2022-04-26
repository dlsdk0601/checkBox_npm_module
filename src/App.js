import styled from "styled-components";
import useCheckBox from "./hooks/CheckBox";
import { useRef, useState } from "react";

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
  const aaa = useCheckBox(checkObj);
  const bbb = useCheckBox(bbbb);

  console.log("aaa===");
  console.log(aaa);
  console.log(bbb);
  console.log("aaa===");
  console.log(aaa);

  return (
    <Wrapper>
      {/* <Form>
        <Label name="input1">
          <input
            checked={all}
            onClick={checkHandle}
            data-index={-1}
            name="input1"
            type="checkbox"
            value="전체동의"
          />
          전체동의
        </Label>
        <Label name="input2">
          <input
            checked={checkArr[0]}
            onClick={checkHandle}
            name="input2"
            data-index={0}
            type="checkbox"
            value="동의1"
          />{" "}
          동의1
        </Label>
        <Label name="input3">
          <input
            checked={checkArr[1]}
            onClick={checkHandle}
            name="input3"
            data-index={1}
            type="checkbox"
            value="동의2"
          />{" "}
          동의2
        </Label>
        <Label name="input4">
          <input
            checked={checkArr[2]}
            onClick={checkHandle}
            data-index={2}
            name="input4"
            type="checkbox"
            value="동의3"
          />{" "}
          동의3
        </Label>
      </Form> */}
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
