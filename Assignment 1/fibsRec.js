function fibsRec(n) {
  if (n <= 1) {
    return [0, 1].slice(0, n + 1);
  }

  const seq = fibsRec(n - 1);
  seq.push(seq[n - 1] + seq[n - 2]);
  return seq;
}
