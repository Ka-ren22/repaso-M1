// ------------------EJERCICIO I-----------------------------//
/**
 * Escribe una function llamada BinaryToDecimal que acepte string numerico
 * y una base.
 * La funcion deberia retornar un numero entero.
 * La idea es tomar un numero binario y "pasarlo" a un numero entero.
 * La formula para convertir un numero binario en decimal es: N * B ^ I
 * Donde N es el numero B es la base e I es el indice.
 * Digamos que tenemos el binario "101" la formulara seria asi:
 * 1 * 2 ^ 2  +  0 * 2 ^ 1  +  1 * 2 ^ 0
 * @param {Array} arr1 - esto es un array.
 * @param {Array} arr1 - esto es un array.
 * @returns {boolean} - deberia retornar true o false.
 */

function BinaryToDecimal(binary, base) {
  let decimal = 0;

  for (let i = 0; i < binary.length; i++) {
    decimal = decimal + binary[i] * base ** (binary.length - 1 - i);
  }

  return decimal;
}

// ------------------EJERCICIO II----------------------------//

/**
 * Escribe una function llamada same que acepte dos arrays.
 * La funcion deberia retornar true si cada valor del primer array es
 * igual al cuadrado de valor del segundo array.
 * La frecuencia debe ser la misma.
 * @param {Array} arr1 - esto es un array.
 * @param {Array} arr1 - esto es un array.
 * @returns {boolean} - deberia retornar true o false.
 */

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i] ** 2) {
        return false;
      }
    }
    return true;
  }
}

// ------------------EJERCICIO III---------------------------//
/**
 * Dado dos strings, escribe una function para determinar si el
 * segundo string es un anagrama de el primero.
 * Deberia retornar true si cada letra en el primer string se encuentra
 * en el segundo string.
 * Un anagrama consiste en crear una palabra a partir de la
 * reordenación de las letras de otra palabra.
 * Como cinema y iceman.
 * @param {string} first - esto es un string.
 * @param {string} second - esto es un string.
 * @returns {boolean} - deberia retornar true o false.
 */

function validAnagram(first, second) {
  if (first.length !== second.length) return false;

  let newStr1 = first.split("").sort().join("");
  let newStr2 = second.split("").sort().join("");
  if (newStr1 === newStr2) return true;
  else return false;
}

// ------------------EJERCICIO IV---------------------------//
/**
 * Escribe una function llamada sumZero que acepte un array de numeros
 * enteros ordenado. La function deberia encontrar el primer par de
 * numeros que sumados den 0. Retornar un array que incluya los dos
 * numeros encontrados o undefined si el par no existe..
 * @param {Array} arr1 - esto es un array.
 * @returns {Array || undefined} - deberia retornar un array o undefined.
 */

function sumZero(arr) {
  for (i = 0; i < arr.length - 1; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) return [arr[i], arr[j]];
    }
  }
  return undefined;
}

// ------------------EJERCICIO V------------------------------//
/**
 * Escribe una funcion que reciba un array y un numero.
 * Deberia retornar true si dos numeros sumados dentro del array 
 * es igual al num pasado.

 * @param {Array} arr1 - esto es un array.
 * @returns {Array || undefined} - deberia retornar un array o undefined.
 */

function averagePair(arr, num) {
  arr = arr.sort(function (a, b) {
    return a - b;
  });
  let i = 0;
  let j = arr.length - 1;
  while (arr[i] + arr[j] !== num && i < j) {
    if (arr[i] + arr[j] < num) i++;
    if (arr[i] + arr[j] > num) j--;
  }
  if (arr[i] + arr[j] === num) {
    return true;
  } else {
    return false;
  }
}

// ------------------EJERCICIO VI------------------------------//
/**
 * Escribe una funcion llamada recursiveRange que reciba un numero y 
 * sume todos los numeros desde 0 hasta el numero dado.
 * Debe retornar esa suma.

 * recursiveRange(6) // 0 + 1 + 2 + 3 + 4 + 5 + 6 = 21

 * @param {Array} arr1 - esto es un array.
 * @returns {Array || undefined} - deberia retornar un array o undefined.
 */

function recursiveRange(num) {
  if (num === 0) return 0;

  return recursiveRange(num - 1) + num;
}

// ------------------EJERCICIO VII------------------------------//
/**
 * Escribe una funcion llamada productOfArray que reciba un array y 
 * mutiplique cada elemento con el siguiente.
 * Debe retornar el total de la multiplicacion de todos los elementos.

 * @param {Array} arr - esto es un array.
 * @returns {Number} - deberia retornar un number.
 */

function productOfArray(arr) {
  if (arr.length === 1) return arr[0];
  const [first, ...rest] = arr;

  return first * productOfArray(rest);
}

// ------------------EJERCICIO VIII------------------------------//
/**
 * Escribe una funcion llamada factorial. Debe retornar el factorial 
 * de un numero.
 * Factoriar es cuando multiplicamos un numeros por todos los que estan 
 * debajo de el.

 * @param {Number} num - esto es number.
 * @returns {Number} - deberia retornar un number.
 */

function factorial(num) {}

// ------------------EJERCICIO IX------------------------------//
/**
 * Escribe una funcion llamada powers que reciba una base y un exponente.
 * Debera retornar la base por el exponente. Similar a como funciona 
 * Math.pow();
 * No deberia fijarme los casos negativos

 * @param {Array} arr1 - esto es un array.
 * @returns {Array || undefined} - deberia retornar un array o undefined.
 */

function power(base, exp) {}

// ------------------EJERCICIO X------------------------------//
/**
 * Escribe una funcion llamada reverse que acepte un string.
 * Debe retornar el string a la inversa.

 * @param {String} str - esto es un string.
 * @returns {String} - deberia retornar un string.
 */

function reverse(str) {}

// ------------------EJERCICIO XI------------------------------//
/**
 * Escribe una funcion llamada isPalindrome que reciba un string.
 * Debe retornar true si la string es un palindromo.
 * Osea si se lee igual de derecha a izquierda, como neuquen.

 * @param {String} str - esto es un string.
 * @returns {String} - deberia retornar un string.
 */

function isPalindrome(str) {}
