function getEmptyArray(N, M) {
  let arr = new Array(N);
  for (let i = 0; i < N; i++) {
    arr[i] = new Array(M);
    for (let j = 0; j < M; j++) {
      arr[i][j] = 0;
    }
  }

  return arr;
}

export default function LevenshteinDistance(str1, str2) {
  let dp = getEmptyArray(str1.length + 1, str2.length + 1);

  for (let i = 0; i < str1.length + 1; i++) {
    for (let j = 0; j < str2.length + 1; j++) {
      if (Math.min(i, j) == 0) {
        dp[i][j] = Math.max(i, j);
      } else {
        let add = str1[i - 1] != str2[j - 1] ? 1 : 0;
        dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1);
        dp[i][j] = Math.min(dp[i][j], dp[i - 1][j - 1] + add);
      }
    }
  }

  return dp[str1.length][str2.length];
}
