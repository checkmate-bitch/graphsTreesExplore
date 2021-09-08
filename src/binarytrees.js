class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insertChild(value) {
    const child = this.createNode(value);
    this.insertNodeInTree(child);
    return child;
  }

  createNode(value) {
    return new BinaryTree(value);
  }

  insertNodeInTree(child) {
    if (child.value <= this.value) {
      if (!this.left) {
        this.left = child;
        return true;
      } else this.left.insertNodeInTree(child);
    } else {
      if (!this.right) {
        this.right = child;
        return true;
      } else this.right.insertNodeInTree(child);
    }

    return false;
  }

  // left, root, right
  inOrderTraversal(func = console.log) {
    if (this.left) this.left.inOrderTraversal(func);
    func(this.value);
    if (this.right) this.right.inOrderTraversal(func);
  }

  // root, left, right
  preOrderTraversal(func = console.log) {
    func(this.value);
    if (this.left) this.left.inOrderTraversal(func);
    if (this.right) this.right.inOrderTraversal(func);
  }

  // left, right, root
  postOrderTraversal(func = console.log) {
    if (this.left) this.left.inOrderTraversal(func);
    if (this.right) this.right.inOrderTraversal(func);
    func(this.value);
  }

  contains(val) {
    let isContains = false;
    this.inOrderTraversal((nodeVal) => {
      if (val === nodeVal) isContains = true;
    });
    return isContains;
  }

  size() {
    let size = 0;
    this.inOrderTraversal(() => size++);
    return size;
  }

  depth() {
    if (!this) return 0;

    return (
      1 +
      Math.max(
        this.left ? this.left.depth() : 0,
        this.right ? this.right.depth() : 0
      )
    );
  }

  remove(node) {}

  reOrder(x, y) {}
}

export default BinaryTree;
