 /**
  * 
  * @param {*} obj 
  */
 export default function(obj) {
     return typeof obj === 'object' && obj instanceof Object && Object.prototype.toString.call(obj) === '[object Object]';
 };