function convertToAdjList(adjMatrix) {
    // need to convert adjMatrix to adjList
    // adjMatrix is [][] where [][] are u,v row = u column = v
    // adjList is link lists where vertex is head, tail is attached nodes.
    
    // iterate through adjmatrix n times, where n is number of nodes
    // for each 1, add to the relevant linked list, for one of the numbers

    // each vertex need its own vertice, which I will make using a linked list for each row index.
    let adjList = [];
    for (let row = 0; row < adjMatrix.length; row++) {
        // add a new linked list to the adjList with a header of the row value
        let newRow = new LinkedList();
        for (let column = 0; column < adjMatrix.length; column++) {
            if (adjMatrix[row][column] === 1) {
                newRow.add(column);
            }
        }
        adjList[row] = newRow;
    }



    return adjList;
}

function LinkedList() { 
    this.length = 0; 
    this.head = null; 
  
    var Node = function(element){
      this.element = element; 
      this.next = null; 
    }; 
  
    this.add = function(element){
      var node = new Node(element);
      if(this.head === null){
          this.head = node;
      } else {
          var currentNode = this.head;
  
          while(currentNode.next){
              currentNode  = currentNode.next;
          }
  
          currentNode.next = node;
      }
  
      this.length++;
    }; 
  
}
