  /**
   * 
   * @param {*} val 
   */
  export default function(val) {
      if (val && typeof val === 'object') {
          return Object.values(val).length < 1;
      }

      return !val || val === '';
  }