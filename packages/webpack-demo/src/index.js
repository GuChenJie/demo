// import _ from "lodash";
import numRef from "./ref.json";

export function numToWord(num) {
  return numRef.reduce(
    // numRef,
    (accum, ref) => {
      return ref.num === num ? ref.word : accum;
    },
    ""
  );
}

export function wordToNum(word) {
  return numRef.reduce(
    // numRef,
    (accum, ref) => {
      return ref.word === word && word.toLowerCase() ? ref.num : accum;
    },
    -1
  );
}
