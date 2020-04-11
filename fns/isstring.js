  /**
   * 
   * @param {*} str 
   */
  export default function(str) {
      return typeof str === 'string' && new String(str) instanceof String;
  }