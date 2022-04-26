import { useEffect, useState } from "react";

const arr = [];

export default function useCheckBox(checkObj) {
  const [checkArr, setCheckArr] = useState(arr);
  const { id, isAll, length } = checkObj;
  const [all, setAll] = useState(false);

  //첫 배열 전부 false 때리기
  useEffect(() => {
    setCheckArr((prev) => {
      const boolArr = new Array(length).fill(false);
      const obj = {
        id,
        boolArr,
        all: false,
      };
      const newArr = [...prev, obj];

      // return allFalse;
      return newArr;
    });
  }, []);

  //항상 전체 동의 감지하기
  useEffect(() => {
    let validation = true;
    checkArr.forEach((value) => {
      validation = validation && value;
    });

    if (validation) {
      setAll((prev) => true);
    } else {
      setAll((prev) => false);
    }
  }, [checkArr]);

  //전체 동의 클릭
  const allClick = () => {
    const bool = !all;
    const arr = new Array(length).fill(bool ? true : false);
    setCheckArr((prev) => arr);
    setAll((prev) => (bool ? true : false));
  };

  //동의 클릭
  const checkHandle = (e) => {
    const {
      target: {
        dataset: { index: num },
      },
    } = e;

    if (+num !== -1) {
      setCheckArr((prev) => {
        const prevArr = [...prev];
        const newArr = prevArr.map((item, index) => {
          return +num === index ? !item : item;
        });
        return newArr;
      });
    } else {
      allClick();
    }
  };

  // return [all, checkArr, checkHandle];
  return checkArr;
}

// [
//   {id: 1, isAll: false, checkArr: []},
//   {id: 2, isAll: false, checkArr: []},
//   {id: 3, isAll: false, checkArr: []},
// ]
