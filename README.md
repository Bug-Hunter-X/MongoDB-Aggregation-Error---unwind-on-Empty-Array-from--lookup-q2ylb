# MongoDB Aggregation Error: Handling $unwind on Empty Arrays
This repository demonstrates an uncommon error in MongoDB aggregations: using the `$unwind` operator on an empty array resulting from a `$lookup` that yields no matches.

The `bug.js` file contains code that will produce this error. The `bugSolution.js` provides a solution to this issue. This problem can be difficult to debug because it doesn't always appear, only when no related documents are found.