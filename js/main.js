function pow(num, degree) {
    return (degree == 1) ? num : (num * pow(num, degree - 1));
  }

  let num = 3;
  let degree = 2;
console.log(`${num} ^ ${degree} = `, pow(num, degree));