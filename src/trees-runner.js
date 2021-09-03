import Tree from "./trees";

const tree = new Tree(10);
console.log(tree);

tree.insertChild(20);
tree.insertChild(40);
tree.insertChild(30);
tree.insertChild(100);
console.log(tree);

console.log(tree.remove(20));
console.log(tree);
