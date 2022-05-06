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

// export default function useClick(obj) {
//   const { id, isAll, length } = obj;
//   const element = useRef([]);
//   const [checkArr, setCheckArr] = useState([]);
//   useEffect(() => {
//     const isID = checkArr.some((item) => item.id === id);

//     if (!isID) {
//       const boolArr = new Array(length).fill(false);
//       const newObj = {
//         id,
//         all: false,
//         boolArr,
//       };
//       setCheckArr((prev) => {
//         const newArr = [...prev, newObj];
//         return newArr;
//       });
//     }
//   }, [element, id]);

//   const onClick = (e) => {
//     const {
//       target: {
//         dataset: { index: num },
//       },
//     } = e;

//     const {
//       target: { id },
//     } = e;

//     const item = checkArr.find((item) => item.id === +id);
//     const len = item.boolArr.length;

//     if (+num === -1) {
//       if (e.target.checked) {
//         console.log("체크");
//         item.boolArr = new Array(len).fill(true);
//         item.all = true;
//       } else {
//         item.boolArr = new Array(len).fill(false);
//         item.all = false;
//       }
//     } else {
//       console.log(e.target);
//       console.log(element.current);
//     }
//   };

//   return [element, onClick];
//   // return checkArr.find((item) => item.id === id);
// }

export default function useTest(checkObj) {
  const inputEl = useRef([]);

  const [checkArr, setCheckArr] = useState({});
  const { id, isAll, length } = checkObj;
  const [all, setAll] = useState(false);

  // console.log("checkArr===");
  // console.log(checkArr);
  // console.log("all===");
  // console.log(all);
  //첫 배열 전부 false 때리기
  useEffect(() => {
    setCheckArr((prev) => {
      const savedData = localStorage.getItem("checkBox") || "{}";
      const boolArr = new Array(length).fill(false);
      const obj = {
        [id]: boolArr,
        ...JSON.parse(savedData),
      };
      localStorage.setItem("checkBox", JSON.stringify(obj));
      return obj;
    });
  }, []);

  useEffect(() => {
    if (isAll) {
      setCheckArr((prev) => {
        const oldArr = [...prev[id]];
        const newArr = oldArr.map((item, index) =>
          index === 0 ? !item : item
        );

        const obj = {
          ...prev,
          [id]: newArr,
        };
        localStorage.setItem("checkBox", JSON.stringify(obj));
        return obj;
      });
    }
  }, [isAll]);

  const onClick = (e) => {
    const {
      target: { checked },
    } = e;
    const {
      target: {
        dataset: { index: dataNum },
      },
    } = e;

    let isAll = true;
    setCheckArr((prev) => {
      const oldArr = [...prev[id]];
      const newArr = oldArr.map((item, index) => {
        let res;

        if (index === +dataNum) {
          res = !item;
        } else {
          res = item;
        }

        if (index !== 0) {
          isAll = isAll && res;
        }

        return res;
      });

      setAll((prev) => isAll);

      const obj = {
        ...prev,
        [id]: newArr,
      };
      localStorage.setItem("checkBox", JSON.stringify(obj));
      return obj;
    });
  };

  const ref = (el) => {
    // console.log("el==");
    // console.log(el);
    // if (el) {
    //   const index = +el.dataset.index;
    //   const name = el.name;
    //   const objectkeys = Object.keys(checkArr);
    //   const length = objectkeys.length;
    //   let num = 0;

    //   for (let i = 0; i < length; i++) {
    //     if (index === 0 && typeof el !== "number" && objectkeys[i] === name) {
    //       console.log("el==");
    //       console.log(el);
    //       console.log("num===");
    //       console.log(num);
    //       inputEl.current.push(el);
    //       // num++;
    //     }
    //   }
    // }
    if (el) {

      // 여기서 부터 다시 시작
      const old = localStorage.getItem("inputEl") || "[]";
      const jsonOld = JSON.parse(old);
      const arr = [...jsonOld];
      arr.push(el);
      localStorage.setItem("inputEl", JSON.stringify(arr));
      return (inputEl.current = arr);
    }
  };
  console.log(inputEl.current);

  return {
    onClick,
    id,
    ref,
  };
}
