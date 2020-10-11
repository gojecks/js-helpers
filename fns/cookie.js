/**
 * 
 * @param {*} name 
 * @param {*} value 
 * @param {*} options 
 */
export default function(name, value) {
    if (typeof value != "undefined") {
        setCookie.apply(null, arguments);
    } else {
        return getCookie(name);
    }
};


/**
 * 
 * @param {*} name 
 * @param {*} value 
 * @param {*} options 
 */
function setCookie(name, value, options) {
    options = options || {};
    if (value === null) {
        value = "";
        options.expires = -1
    }
    var expires = "",
        isNumberExpires = typeof options.expires === 'number';
    if (options.expires && (isNumberExpires || options.expires.toUTCString)) {
        var date;
        if (isNumberExpires) {
            date = new Date();
            date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000))
        } else {
            date = options.expires
        }
        expires = "; expires=" + date.toUTCString()
    }
    var path = options.path ? "; path=" + (options.path) : "";
    var domain = options.domain ? "; domain=" + (options.domain) : "";
    var secure = options.secure ? "; secure" : "";
    document.cookie = [name, "=", encodeURIComponent(value), expires, path, domain, secure].join("")
}

/**
 * 
 * @param {*} name 
 */
function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie != "") {
        var cookies = document.cookie.split(";");
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) == (name + "=")) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break
            }
        }
    }
    return cookieValue
}