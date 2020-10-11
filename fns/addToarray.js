export default function(list, item, index) {
    if (index >= list.length) {
        list.push(item);
    } else {
        list.splice(index, 0, item);
    }
}