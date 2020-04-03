/*
  Custom Events (QUEUE and STACKS)
*/
export default function() {
    var _queues = [];
    return {
        push: function(fn) {
            if (typeof fn == 'function') {
                _queues.push(fn);
            }

            return this;
        },
        pop: function() {
            var nextFn = _queues.shift() || function() {};
            nextFn.apply(nextFn, arguments);
            return this;
        }
    };
};