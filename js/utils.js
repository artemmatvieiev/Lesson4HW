/**
* Функция filter создаёт новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции.
*
* @function filter
* @param {Array} arr
* @param {Function} callback
* @return {Array} results
*/
const filter = function (arr, callback) {
	let results = []
	for (let index in arr) {
		 if (callback(arr[index], index, arr)) {
				results.push(arr[index])
			}
	}
	return results
}

/**
* Функция find возвращает значение в массиве, если элемент удовлетворяет условию проверяющей функции. В противном случае возвращается undefined.
*
* @function find
* @param {Array} arr
* @param {Function} callback
* @return {} results
*/
const find = function (arr, callback) {
	let results 
	for (let index in arr) {
		 if (callback(arr[index], index, arr)) {
				results = arr[index]
			  break
			} else {
					results = undefined
				}
	}
	return results
}

/**
* Функция join вобъединяет все элементы массива в строку.
*
* @function join
* @param {Array} arr
* @param {Function} callback
* @return {String} results
*/
const join = function (arr, separator = ",") {
	let results = ""
	for (let index in arr) {
		if (index < (arr.length - 1)) results += arr[index] + separator
		else { results += arr[index] }
	}
	return results
}


/**
* Функция map создаёт новый массив с результатом вызова указанной функции для каждого элемента массива.
*
* @function map
* @param {Array} arr
* @param {Function} callback
* @return {Array} results
*/
const map = function (arr, callback) {
	let results = []
	for (let index in arr) {
		results.push(callback(arr[index], index, arr)) 
	}
	return results
}
/**
* Функция reduce применяет функцию к аккумулятору и каждому значению массива (слева-направо), сводя его к одному значению.
*
* @function reduce
* @param {Array} arr
* @param {Function} callback
* @param {} startValue
* @return {} results
*/
const reduce = function(arr, callback, startValue) {
  let result = startValue
  for (let index in arr) {
    result = callback(result,  arr[index], index, arr)
  }
  return result;
}

/**
* Функция concat возвращает новый массив, состоящий из массива, на котором он был вызван, соединённого с другими массивами и/или значениями, переданными в качестве аргументов.
*
* @function concat
* @param {Array} arr
* @param {Array} arr2
* @return {Array} result
*/
const concat = function(arr, arr2) {
  let result = []
  for (let index in arr) {
    result.push(arr[index]) 
  }
	for (let index2 in arr2) {
		result.push(arr2[index2])
  }	
  return result;
}

/**
* Функция reverse на месте обращает порядок следования элементов массива. Первый элемент массива становится последним, а последний — первым.
*
* @function reverse
* @param {Array} arr
* @return {Array} arr2
*/
const reverse = function(arr) {
	let arr2 = []
	for(let index in arr) {
		arr2.length = arr.length
		arr2[arr2.length-1-index] = arr[index]
	}
	return arr2
}

/**
* Функция slice возвращает новый массив, содержащий копию части исходного массива.
*
* @function slice
* @param {Array} arr
* @return {Array} result
*/
const slice = function(arr, begin, end = arr.length - 1) {
	let result = []
	for(let index in arr) {
		if((index >= begin)&&(index < end))
			result.push(arr[index])
	}
	return result
}