// ANAGRAMS

function validAnagram(str1, str2) {
  if(str1.length !== str2.length) {
    return false;
  }

  const hashStr1 = {};
  const hashStr2 = {};

  for(let value of str1) {
    hashStr1[value] = (hashStr1[value] || 0) + 1;
  }
  for(let value of str2) {
    hashStr2[value] = (hashStr2[value] || 0) + 1;
  }

  for(let key in hashStr1) {
    if(!(key in hashStr2)) {
      return false;
    }

    if(hashStr1[key] !== hashStr2[key]) {
      return false;
    }
  }

  return true;
}


module.exports = validAnagram;