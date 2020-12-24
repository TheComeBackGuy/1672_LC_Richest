import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>1672. Richest Customer Wealth
</h1>
<div>
LeetCode Problems</div>
`;
/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  let answer = 0;
  accounts.forEach((balance) => {
    const totaled = balance.reduce((a, b) => a + b, 0);
    if (totaled > answer) {
      answer = totaled;
    }
  });
  return answer;
};

maximumWealth([
  [1, 2, 3],
  [3, 2, 1]
]);
/*
var maximumWealth = function (accounts) {
  let answer = 0;
  accounts.forEach((balance) => {
    const totaled = balance.reduce((a, b) => a + b, 0);
    if (totaled > answer) {
      answer = totaled;
    }
  });
  return answer;
};
*/
