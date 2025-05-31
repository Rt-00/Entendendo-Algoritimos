var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function is_seller(name) {
    return name.endsWith("m");
}
function breadth_first_search(graph, start) {
    var queue = __spreadArray([], graph["you"], true);
    var verified = new Set();
    while (queue.length > 0) {
        var person = queue.shift();
        if (!verified.has(person)) {
            console.log("Verifiying ".concat(person));
            if (is_seller(person)) {
                console.log("".concat(person, " is seller"));
                return true;
            }
            else {
                queue.push.apply(queue, (graph[person] || []));
                verified.add(person);
            }
        }
    }
    return false;
}
var graph = {
    you: ["alice", "bob", "claire"],
    bob: ["anuj", "peggy"],
    alice: ["peggy"],
    claire: ["thom", "jonny"],
    anuj: [],
    peggy: [],
    thom: [],
    jonny: [],
};
breadth_first_search(graph, "you");
