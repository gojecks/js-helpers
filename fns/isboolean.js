  /**
   * 
   * @param {*} bool 
   */
  export default function(bool) {
      return Object.prototype.toString.call(bool) === '[object Boolean]';
  }