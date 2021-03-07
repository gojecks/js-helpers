import camelCase from './camelcase';
/**
 * convert a string to pascalCase
 * test-user = TestUser
 * @param {*} str 
 */
export default function(str) {
    return str.charAt(0).toUpperCase() + camelCase(str.substring(1));
}