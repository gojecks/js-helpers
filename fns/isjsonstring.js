  /**
   * 
   * @param {*} str 
   */
  export default function(str) {
      return (str && typeof str === 'string' && ("{[".indexOf(str.charAt(0)) > -1) && ("}]".indexOf(str.charAt(str.length - 1)) > -1));
  }