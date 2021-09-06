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

  // dfs
  static traverse(tree, spacer = "-", printFn = console.log) {
    if (!tree) printFn("Empty Tree");
    printFn(spacer, tree);
    spacer += spacer;
    tree.children.forEach((child) => Tree.traverse(child, spacer, printFn));
  }

  contains(searchValue) {}

  static size(tree) {
    let size = 0;
    Tree.traverse(tree, "", () => size++);
    return size;
  }

  static depth(tree) {
    if (!tree) return 0;
    else if (tree.children.length === 0) return 1;
    return 1 + Math.max(...tree.children.map((child) => Tree.depth(child)));
  }

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
