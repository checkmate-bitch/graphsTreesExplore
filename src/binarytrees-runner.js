import BinaryTree from "./binarytrees";

const btree = new BinaryTree(10);
console.log(btree);

btree.insertChild(5);
btree.insertChild(6);
btree.insertChild(20);
btree.insertChild(15);

console.log("\n-----------in-order traverse-------------\n");
console.log(btree.inOrderTraversal());
