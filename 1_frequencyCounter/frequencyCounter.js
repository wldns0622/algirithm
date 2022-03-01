function same(arr1, arr2) {
  // 길이가 서로 다를때는 리턴
  if (arr1.length !== arr2.length) {
    return false;
  }

  const frequencyCounter1 = {};
  const frequencyCounter2 = {};

  // arr1의 값을 해싱
  arr1.forEach((value) => {
    frequencyCounter1[value] = (frequencyCounter1[value] || 0) + 1;
  });

  // arr2의 값을 해싱
  arr2.forEach((value) => {
    frequencyCounter2[value] = (frequencyCounter2[value] || 0) + 1;
  });

  for (let key in frequencyCounter1) {
    // fr1 키의 제곱이 fr2에 없다면
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    // fr1키의 값이 fr2에 key 제곱 값과 다르다면
    if(frequencyCounter1[key] !== frequencyCounter2[key ** 2]) {
      return false;
    }
  }

  return true;
}

module.exports = same;