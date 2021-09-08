import BinaryTree from "./binarytrees";

const btree = new BinaryTree(10);
console.log(btree);

btree.insertChild(5);
btree.insertChild(6);
btree.insertChild(20);
btree.insertChild(15);
btree.insertChild(24);
btree.insertChild(27);
btree.insertChild(13);
btree.insertChild(12);
btree.insertChild(14);
btree.insertChild(11);

console.log("\n-----------in-order traverse-------------\n");
console.log(btree.inOrderTraversal());

console.log("\n-----------size-------------\n");
console.log(btree.size());

console.log("\n-----------contains-------------\n");
console.log(btree.contains(15));

console.log("\n-----------depth-------------\n");
console.log(btree.depth());
