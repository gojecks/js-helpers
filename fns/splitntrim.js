/**
 * 
 * @param {*} str 
 * @param {*} regexp 
 * @return values[]
 */
export default function(str, regexp) {
    return (str || '').split(regexp).map(function(val) {
        return val.trim();
    });
}