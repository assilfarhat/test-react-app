export function look(Tab, id) {
    let result = Tab.find(obj => obj.id === id);
    if (result) {
        return result;
    } else {
        return null;
    }
}