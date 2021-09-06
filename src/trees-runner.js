import Tree from "./trees";

const tree = new Tree(10);
console.log(tree);

const child1 = tree.insertChild(20);
const child2 = tree.insertChild(40);
const child3 = tree.insertChild(30);
const child4 = tree.insertChild(100);
console.log(tree);

child2.insertChild(100);
child2.insertChild(200);
child2.insertChild(300);
child3.insertChild(700);
child4.insertChild(500);
child4.insertChild(600);

console.log("\n-----dfs traverse---");
Tree.traverse(tree, "  ");

console.log(tree.remove(20));
console.log(tree);

console.log("\n-----dfs traverse---");
Tree.traverse(tree, "  ");
