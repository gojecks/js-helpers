/**
 * credit to  CMCDragonkai for the idea
 * @param {*} $boolValue 
 */
export default function($boolValue) {
    return ({
        'true': true,
        '1': true,
        'on': true,
        'yes': true,
        'false': false,
        '0': false,
        'off': false,
        'no': false,
        'null': null,
        'undefined': undefined
    })[$boolValue];
}