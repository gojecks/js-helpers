/**
 * 
 * @param {*} arr
 * @param {*} cur 
 * @param {*} prev 
 */
export default function moveItemInArray(arr, from, to){
    if (!(arr instanceof Array)) return;
    // simple movement
    arr.splice(to, 0, arr.splice(from, 1)[0]);
}