  /**
   * 
   * @param {*} to 
   * @param {*} from 
   */
  function copyFrom(to, from) {
      for (var key in to) {
          if (from.hasOwnProperty(key)) {
              if (typeof to[key] === "object") {
                  to[key] = copyFrom(to[key], from[key]);
              } else {
                  to[key] = from[key];
              }
          }
      }

      return to;
  }

  export default copyFrom;