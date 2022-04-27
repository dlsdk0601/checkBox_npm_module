import { useEffect, useRef, useState } from "react";

const arr = [];

// export default function useCheckBox(checkObj) {
//   const [checkArr, setCheckArr] = useState(arr);
//   const { id, isAll, length } = checkObj;
//   const [all, setAll] = useState(false);

//   //첫 배열 전부 false 때리기
//   useEffect(() => {
//     setCheckArr((prev) => {
//       const boolArr = new Array(length).fill(false);
//       return boolArr;
//     });
//   }, []);

//   //항상 전체 동의 감지하기
//   useEffect(() => {
//     let validation = true;
//     checkArr.forEach((value) => {
//       validation = validation && value;
//     });

//     if (validation) {
//       setAll((prev) => true);
//     } else {
//       setAll((prev) => false);
//     }
//   }, [checkArr]);

//   //전체 동의 클릭
//   const allClick = () => {
//     const bool = !all;
//     const arr = new Array(length).fill(bool ? true : false);
//     setCheckArr((prev) => arr);
//     setAll((prev) => (bool ? true : false));
//   };

//   //동의 클릭
//   const checkHandle = (e) => {
//     const {
//       target: {
//         dataset: { index: num },
//       },
//     } = e;
//     console.log(e.target);

//     if (+num !== -1) {
//       setCheckArr((prev) => {
//         const prevArr = [...prev];
//         const newArr = prevArr.map((item, index) => {
//           return +num === index ? !item : item;
//         });
//         return newArr;
//       });
//     } else {
//       allClick();
//     }
//   };

//   return [all, checkArr, checkHandle];
//   // return checkArr;
// }

export default function useClick(obj) {
  const { id, isAll, length } = obj;
  const element = useRef([]);
  const [checkArr, setCheckArr] = useState([]);
  useEffect(() => {
    const isID = checkArr.some((item) => item.id === id);

    if (!isID) {
      const boolArr = new Array(length).fill(false);
      const newObj = {
        id,
        all: false,
        boolArr,
      };
      setCheckArr((prev) => {
        const newArr = [...prev, newObj];
        return newArr;
      });
    }
  }, [element, id]);

  const onClick = (e) => {
    const {
      target: {
        dataset: { index: num },
      },
    } = e;

    const {
      target: { id },
    } = e;

    const item = checkArr.find((item) => item.id === +id);
    const len = item.boolArr.length;

    if (+num === -1) {
      if (e.target.checked) {
        console.log("체크");
        item.boolArr = new Array(len).fill(true);
        item.all = true;
      } else {
        item.boolArr = new Array(len).fill(false);
        item.all = false;
      }
    } else {
      console.log(e.target);
      console.log(element.current);
    }
  };

  return [element, onClick];
  // return checkArr.find((item) => item.id === id);
}
