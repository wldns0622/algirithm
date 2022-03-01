// ANAGRAMS

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const hashStr = {};

  for (let i = 0; i < str1.length; i++) {
    const value = str1[i];
    hashStr[value] ? hashStr[value]++ : (hashStr[value] = 1);
  }

  for (let i = 0; i < str2.length; i++) {
    const value = str2[i];
    if (!hashStr[value]) {
      return false;
    }
    hashStr[value]--;
  }

  return true;
}

module.exports = validAnagram;
