const mergeSort = (arr) => {
  if (arr.length < 2) return arr;

  const m = Math.floor(arr.length / 2);
  const lArr = arr.slice(0, m);
  const rArr = arr.slice(m);

  return merge(mergeSort(lArr), mergeSort(rArr));
};

const merge = (lArr, rArr) => {
  const tempArr = [];

  while (lArr.length && rArr.length) {
    lArr[0] <= rArr[0]
      ? tempArr.push(lArr.shift())
      : tempArr.push(rArr.shift());
  }
  return [...tempArr, ...lArr, ...rArr];
};

let arr = [3, 7, 8, 5, 4, 2, 6, 1, 5, -2];
console.log(mergeSort(arr));
