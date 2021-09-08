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
  static traverse(tree, spacer = "-", func = console.log) {
    if (!tree) func("Empty Tree");
    func(spacer, tree);
    spacer += spacer;
    tree.children.forEach((child) => Tree.traverse(child, spacer, func));
  }

  contains(searchValue) {
    let result = false;
    Tree.traverse(
      this,
      "",
      (spacer, tree) => (result = result || searchValue === tree.value)
    );
    return result;
  }

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

  static find(tree, value) {
    let node = null;
    Tree.traverse(tree, "", (spacer, leaf) => {
      if (leaf.value === value) {
        return (node = leaf);
      }
    });
    return node;
  }

  insert(parentTree, value) {
    let tree = Tree.find(this, parentTree.value);
    if (tree) tree.insertChild(value);
    return tree;
  }

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
