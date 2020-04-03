  /**
   * 
   * @param {*} arr 
   */
  export default function(arr) {
      return arr.reduce(function(all, item, index) {
          if (arr.indexOf(arr[index]) === index) {
              all.push(item)
          }
          return all;
      }, []);
  }