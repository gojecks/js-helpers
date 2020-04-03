  /**
   * string to hashCode
   * @param {*} code 
   */
  export default function(code) {
      var hash = 0,
          i, chr, len;
      if (!code || code.length === 0) return hash;
      for (i = 0, len = code.length; i < len; i++) {
          chr = code.charCodeAt(i);
          hash = ((hash << 5) - hash) + chr;
          hash |= 0; // Convert to 32bit integer
      }

      return hash;
  }