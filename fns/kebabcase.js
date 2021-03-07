export default function(str) {
    return str.split('').map(function(char, idx) {
        if (/[A-Z]/.test(char)) {
            return ('-' != str[idx - 1]) ? '-' + char.toLowerCase() : char.toLowerCase()
        }

        return char;
    }).join('');
};