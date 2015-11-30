value = parseFloat(prompt('value?',''));
p = parseInt(prompt('p?',''));

console.log('pow(value,-n)=',pow(value, p));


/**
 * Возвращает value в степени n
 *
 * @param {number} value Число для возведения в степень.
 * @param {number} n Показатель степени, натуральное число.
 * @return {number} value в степени n.
 */
function pow(value, n){
  if(value === 0){
    return 0;
  }

  if(n > 0){
    return value * pow(value, --n);
  }else if (n < 0) {
    return (1 / value) * pow(value, ++n);
  }

  return 1;
}
