module.exports = function check(str, bracketsConfig) {
  let bracketsIn = [];
  let bracketsOut = [];
  bracketsConfig.forEach((el) => {
    bracketsIn.push(el[0]);
    bracketsOut.push(el[1]);
  });
  let st = [];
  for (let i = 0; i < str.length; i++) {
    const chIn = bracketsIn.indexOf(str[i]);
    const chOut = bracketsOut.indexOf(str[i]);
    if (chIn != -1) {
      if (chIn == chOut) {
        if (st.length > 0 && st[st.length - 1] == bracketsIn[chIn]) {
          st.pop();
        } else {
          st.push(str[i]);
        }
      } else {
        st.push(str[i]);
      }
    } else if (chOut != -1) {
      if (st.length == 0 || st.pop() != bracketsIn[chOut]) {
        return false;
      }
    }
  }

  return st.length == 0;
};
