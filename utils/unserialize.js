/**
 * Function unSerialize
 * @param {*} par 
 */
export default function(par) {
    return (par || '').split("&")
        .reduce(function(accum, val) {
            if (val) {
                var splitPairs = val.split('=');
                accum[splitPairs[0]] = JSON.parse(splitPairs[1]);
            }
            return accum;
        }, {});
}