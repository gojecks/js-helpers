  /**
   * 
   * @param {*} val 
   */
  export default function(val) {
      if (val && typeof val === 'object') {
          return Object.keys(val).length === 0;
      }

      return !val || val === '';
  }