import isArray from './isarray';
import isObject from './isobject';
import isFunction from './isfunction';
/**
 * @Function serialize object to string
 * @Argument (OBJECT)
 * @param {*} obj
 * @return Query Param eg(foo=bar&bar=foo)
 */
export default function serialize(obj) {
    if (!obj) return;
    var param = [];
    /**
     * 
     * @param {*} prefix 
     * @param {*} dn 
     */
    function buildParams(prefix, dn) {
        if (isArray(dn)) {
            dn.forEach(function(n) {
                if ((/\[\]$/).test(prefix)) {
                    add(prefix, n);
                } else {
                    buildParams(prefix + "[" + (isObject(n) ? prefix : "") + "]", n)
                }
            });
        } else if (isObject(dn)) {
            for (var name in dn) {
                buildParams(prefix + "[" + name + "]", dn[name]);
            }
        } else {
            add(prefix, dn);
        }
    }

    /**
     * 
     * @param {*} key 
     * @param {*} value 
     */
    function add(key, value) {
        value = isFunction(value) ? value() : (value === "" ? "" : value);
        param[param.length] = encodeURIComponent(key) + '=' + encodeURIComponent(value);
    };


    return Object.keys(obj)
        .map(function(key) { return buildParams(key, obj[key]); })
        .join("&")
        .replace(/%20/g, '+');
}