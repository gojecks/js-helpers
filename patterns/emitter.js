export default function() {
    var _events = [];
    return {
        broadcast: function(name, arg) {
            var nextFn = _events[name] || function() {};
            nextFn.apply(nextFn, arg);
        },
        subscribe: function(name, fn) {
            _events[name] = fn;
            return this;
        },
        destroy: function(name) {
            _events[name] = null;
        }
    };
}