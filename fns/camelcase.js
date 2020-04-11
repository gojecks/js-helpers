/**
 * 
 * @param {*} str 
 */
export default function(str) {
    return str(/^([A-Z])|[\s-_](\w)/g, function(match, p1, p2, offset) {
        if (p2) { return p2.toUpperCase(); }
        return p1.toLowerCase();
    });
}