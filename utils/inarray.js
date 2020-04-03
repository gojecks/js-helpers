import isString from './isstring';
import isArray from './isarray';
/**
 * 
 * @param {*} needle 
 * @param {*} haystack 
 */
export default function(needle, haystack) {
    return (isString(haystack) || isArray(haystack)) && haystack.indexOf(needle) > -1;
}