const fibs = (n) => {
  let fibSeq = [0, 1];

  if (n < 3) {
    return n;
  }

  for (let i = 2; i < n; i++) {
    fibSeq.push(fibSeq[i - 1] + fibSeq[i - 2]);
  }

  return fibSeq;
};

console.log(fibs(3));
