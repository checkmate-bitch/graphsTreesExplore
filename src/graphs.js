class Graph {
  constructor() {
    this.nodes = [];
    this.adjList = {};
  }

  addNode(node) {
    this.nodes.push(node);
    this.adjList[node] = [];
  }

  addEdge(node1, node2) {
    this.adjList[node1].push(node2);
    this.adjList[node2].push(node1);
  }

  removeNode(node) {
    // Remove the node from all edge lists
    Object.values(this.adjList).forEach(edgeList => {
      const edgeListIndex = edgeList.indexOf(node);
      if (edgeListIndex > -1) {
        edgeList.splice(edgeListIndex, 1);
      }
    });

    // Remove the node from the node list
    const nodeListIndex = this.nodes.indexOf(node);
    if (nodeListIndex > -1) {
      delete this.adjList[node];
      return this.nodes.splice(nodeListIndex, 1);
    }

    return false;
  }

  removeEdge(node1, node2) {
    const indexOfNode2 = this.adjList[node1] && this.adjList[node1].indexOf(node2);
    const indexOfNode1 = this.adjList[node2] && this.adjList[node2].indexOf(node1);

    const badIndices = this.adjList[node1] === undefined || this.adjList[node2] === undefined;

    if (badIndices) {
      return 'Please pass in valid indices';
    } else {
      this.adjList[node1].splice(indexOfNode2, 1);
      this.adjList[node2].splice(indexOfNode1, 1);
    }
  }

  depthFirstTraversal(startingNode, func = console.log) {
    if (startingNode === undefined) {
      return 'No starting node was provided';
    }
    let nodeStack = [];
    let visitedArr = [];

    nodeStack.push(startingNode);
    visitedArr[startingNode] = true;

    while (nodeStack.length) {
      const current = nodeStack.pop();
      const neighbors = this.adjList[current];
      func(current);

      neighbors.forEach(neighbor => {
        if (!visitedArr[neighbor]) {
          nodeStack.push(neighbor);
          visitedArr[neighbor] = true;
        }
      });
    }
  }

  breadthFirstTraversal(startingNode, func = console.log) {
    if (startingNode === undefined) {
      return 'No starting node was provided';
    }

    let nodeStack = [];
    let visitedArr = [];

    nodeStack.push(startingNode);
    visitedArr[startingNode] = true;

    while (nodeStack.length) {
      const current = nodeStack.shift();
      const neighbors = this.adjList[current];
      func(current);

      neighbors.forEach(neighbor => {
        if (!visitedArr[neighbor]) {
          nodeStack.push(neighbor);
          visitedArr[neighbor] = true;
        }
      });
    }
  }
}

let jamil = new Graph();
jamil.addNode(1);
jamil.addNode(2);
jamil.addNode(3);
jamil.addNode(4);
jamil.addNode(5);
jamil.addNode(99);
jamil.addNode(6);
jamil.addNode(7);
jamil.addNode(8);
jamil.addNode(9);
jamil.addEdge(1, 2);
jamil.addEdge(1, 3);
jamil.addEdge(1, 4);
jamil.addEdge(1, 5);
jamil.addEdge(1, 6);
jamil.addEdge(6, 7);
jamil.addEdge(6, 8);
jamil.addEdge(6, 9);
jamil.addEdge(99, 4);

let akeem = new Graph();
akeem.addNode(1);
akeem.addNode(2);
akeem.addNode(3);
akeem.addNode(4);
akeem.addNode(5);
akeem.addNode(6);
akeem.addNode(7);
akeem.addNode(8);
akeem.addNode(9);

akeem.addEdge(1, 2);
akeem.addEdge(2, 3);
akeem.addEdge(3, 4);
akeem.addEdge(4, 5);
akeem.addEdge(1, 6);
akeem.addEdge(6, 7);
akeem.addEdge(7, 8);
akeem.addEdge(8, 9);

// console.log('before delete', jamil);
// jamil.removeEdge(1, 8);
// console.log('after removal', jamil);
// console.log('DFS', jamil.depthFirstTraversal(1));
// console.log('BFS', akeem.breadthFirstTraversal(1));
// jamil.removeNode(3);
// console.log('after delete', jamil);
// jamil.addNode(3);

export default Graph;