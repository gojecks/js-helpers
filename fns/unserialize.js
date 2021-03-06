/**
 * Function unSerialize
 * @param {*} par 
 */
export default function(par) {
    return (par || '').split("&")
        .reduce(function(accum, val) {
            if (val) {
                var splitPairs = val.split('=');
                accum[splitPairs[0]] = parseJSON(splitPairs[1]);
            }
            return accum;
        }, {});

    /**
     * 
     * @param {*} str 
     */
    function parseJSON(str) {
        try {
            str = JSON.parse(str);
        } catch (e) {}

        return str;
    }
}