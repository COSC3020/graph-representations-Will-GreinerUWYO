# Graph Representations

Implement a function that converts an adjacency matrix to an adjacency list for
a directed unweighted graph using the template in `code.js`. Test your new
function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`. Now, the test code
does contain the solution, so you can have a look at it if you get stuck, but
try not to peek before attempting to solve it on your own.

## Runtime Analysis

What is the runtime complexity of the conversion that you implemented? Does it
depend on the number of vertices, the number of edges, or both?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

The runtime complexity of this conversion is $O(n^2)$ because the for loop runs once for each row and column. Each node has a row and a column, so the number of rows = number of nodes.
This is based soley on the number of vertices, nothing here is based on number of edges.

## Bonus

Implement a function to convert an adjacency list to an adjacency matrix and
analyze it as above.

## Sources and Plagarism Statement
Some of these sources are not used, but I used them during my initial work on the problem using LinkedLists
Used the following videos from the YouTube channel BroCode to help me with my understanding of the datastructures at play [Graphs](https://www.youtube.com/watch?v=-VgHk7UMPP4) and [2D Arrays](https://www.youtube.com/watch?v=SmJNeJuLmVo)
Used this video from freeCodeCamp.org [LinkedList](https://www.youtube.com/watch?v=9YddVVsdG5A) to give me my LinkedList implementation.
Also used this source [GeeksforGeeks](https://www.geeksforgeeks.org/comparison-between-adjacency-list-and-adjacency-matrix-representation-of-graph/) to help with my implementation of adjacency graphs.

Spoke to Lily Brongo and Lars in class to help show me that LinkedLists were not the right way to approach this problem. I refactored it to being a list and it then worked.
I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.

