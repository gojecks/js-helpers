import extend from './extend';
/**
 * 
 * @param {*} item 
 * @param {*} deep 
 */
export default function(item, deep) {
    var type = {};
    if (Object.prototype.toString.call(item) === '[object Array]') {
        type = [];
    }

    if (item && item.nodeType) return item.cloneNode(true); // Node
    if (typeof item === 'object' && !deep) return item;
    if (item instanceof Date) return new Date(item.getTime());
    if (item instanceof RegExp) return new RegExp(item);
    if (typeof item !== "object") return item;

    if (deep) {
        var ret;
        try {
            ret = JSON.parse(JSON.stringify(item))
        } catch (e) {
            ret = extend(true, item);
        }

        return ret;
    }

    return extend(type, item);
}