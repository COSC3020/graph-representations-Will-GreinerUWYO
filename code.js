function convertToAdjList(adjMatrix) {
    // need to convert adjMatrix to adjList
    // adjMatrix is [][] where [][] are u,v row = u column = v
    // adjList is a list of lists where each value in the list is a directed edge between two nodes.
    
    // iterate through adjmatrix n times, where n is number of nodes
    // for each 1, add to the relevant linked list, for one of the numbers

    // each vertex need its own vertice, which I will make using a linked list for each row index.
    let adjList = [];
    for (let row = 0; row < adjMatrix.length; row++) {
        // add a new array to the adjList
        let newRow = [];
        for (let column = 0; column < adjMatrix.length; column++) {
            if (adjMatrix[row][column] === 1) {
                newRow.push(column);
            }
        }
        adjList[row] = newRow;
    }

    return adjList;
}
