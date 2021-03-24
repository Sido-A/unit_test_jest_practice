const chunkArr = (arr, len) => {
  // Initial chunked arr
  const chunkedArr = [];

  arr.forEach((val) => {
    // Get last value of arr
    const last = chunkedArr[chunkedArr.length - 1];

    if (!last || last.length === len) {
      chunkedArr.push([val]);
    } else {
      last.push(val);
    }
  });

  return chunkedArr;
};

module.exports = chunkArr;
