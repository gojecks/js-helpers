/**
 * converts  valid JSON string to an Object
 * values of each key can be determined by the replacerObj
 *  It can only generate one level JSON not multi-dimensional 
 * 
 * @param {*} str 
 * @param {*} replacerObj 
 * 
 * @return Object (new Object)
 */
export default function(str, replacerObj) {
    var newObj;
    var splitedStr = str.match(new RegExp("\\" + str.charAt(0) + "(.*?)" + "\\" + str.charAt(str.length - 1)));
    var newObj = (("{" === str.charAt(0)) ? {} : []);
    splitedStr = (splitedStr && splitedStr[1] || '').split(',');
    replacerObj = replacerObj || {};

    for (var j in splitedStr) {
        var xSplitedStr = splitedStr[j].split(':');
        //set the value to the key Object
        newObj[xSplitedStr.shift()] = replacerObj[xSplitedStr.join(':')] || xSplitedStr.pop();
    }

    return newObj;
}