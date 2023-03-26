/**
 * Function unSerialize
 * @param {*} par 
 */
export default function(par) {
    if (!par || typeof par !== 'string')  return {};
    return par.split("&")
        .reduce(function(accum, val) {
            if (val) {
                var splitPairs = val.split('=');
                accum[splitPairs[0]] = splitPairs[1] ? parseJSON(splitPairs[1]) : splitPairs[1];
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