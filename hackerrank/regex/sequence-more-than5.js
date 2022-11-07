function sumStrings(a,b) { 
    if(/^[0-9]+$/.test(a) && /^[0-9]+$/.test(b)){
        return (parseInt(a)+parseInt(b)) + ''
    }
  }

console.log( sumStrings('12','456'))