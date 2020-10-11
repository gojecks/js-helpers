export default function(list, index) {
    if (index >= list.length - 1) {
        return list.pop();
    } else {
        return list.splice(index, 1)[0];
    }
}