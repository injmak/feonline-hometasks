var arr = fillArray();

console.log('array = ', arr);

var name = prompt('Name to enter?','');

if(findName(name, arr)){
  alert(name + ', you entered successfully.');
}else {
  alert('The name ' + name + ' is absent.');
}

/**
 * Возвращает массив из 5 элементов заполненных именами
 *
 * @return {array} массив имен.
 */
function fillArray(){
  var array=[];
  for(var i = 0; i < 5; i++){
    var name = prompt('Name?','');
    array.push(name);
  }
  return array;
}

/**
 * Возвращает true если в массиве есть имя и false если нет
 *
 * @param {name} name Имя для добавления в массив.
 * @param {array} array Массив.
 * @return {boolean} true или false.
 */
function findName(name, array){
  for(var i = 0; i < array.length; i++){
    if(array[i] !== name) continue;
    return true;
  }
  return false;
}
