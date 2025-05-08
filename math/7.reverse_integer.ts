function reverse(x: number): number {
  let isNegative: boolean = false;
  if (x < 0) {
      isNegative = true;
      x = x * -1;
  }
  
  let rev: number = 0;
  while (x > 0) {
      const tail = x % 10;
      rev = rev * 10 + tail;
      x = Math.floor(x/10); // x / 10 | 0
  }
  return isNegative ? -rev : rev;
};