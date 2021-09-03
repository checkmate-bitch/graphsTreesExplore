class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
  insertChild(value) {
    const child = new Tree(value);
    this.children.push(child);
    return child;
  }

  // Depth-First Traversal = dfs
  // Breadth-First Traversal = bfs
  // in-order = ino
  // pre-order = pre
  // post-order = pos
  static traverse(tree, traverseType = "dfs", printFn = console.log) {
    if (!tree) printFn("Empty Tree!!");
    if (traverseType === "ino") traversePreOrder(tree);
  }

  traversePreOrder(tree) {}

  contains(searchValue) {}

  static size(tree) {}

  static find(tree, value) {}

  insert(parentTree, value) {}

  remove(value) {
    if (this.value === value) {
      delete this;
    }
    const child = this.children.find((child) => child.value === value);
    return this.children.splice(this.children.indexOf(child), 1);
  }

  reorder(node1, node2) {}
}

export default Tree;
