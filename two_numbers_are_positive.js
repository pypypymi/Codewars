function twoArePositive(a, b, c) {
  // Happy Coding
  let array = [a,b,c];
  let result1 = array.filter(v => v>0)
  let result2 = array.filter(v => v<0)
  return result1.length==2 && result2.length==1 ? true : false;
}
