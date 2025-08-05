Array.prototype.square = function () {
    const length = this.length;
    const results = new Array(length);
  
    for (let i = 0; i < length; i++) {
      results[i] = this[i] * this[i];
    }
  
    return results;
  };


  const result=[-2].square(); // [4]
const result2=[1, 2, 3, 4].square(); // [1, 4, 9, 16]