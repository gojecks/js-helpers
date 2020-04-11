import isstring from './isstring';
import isarray from './isarray';
/**
 * 
 * @param {*} needle 
 * @param {*} haystack 
 */
export default function(needle, haystack) {
    return (isstring(haystack) || isarray(haystack)) && haystack.indexOf(needle) > -1;
}