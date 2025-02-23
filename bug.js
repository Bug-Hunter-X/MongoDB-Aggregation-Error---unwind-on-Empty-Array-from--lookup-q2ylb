```javascript
// Assuming you have a MongoDB connection established

db.collection('myCollection').aggregate([
  {
    $lookup: {
      from: 'anotherCollection',
      localField: 'foreignKey',
      foreignField: '_id',
      as: 'joinedData'
    }
  },
  {
    $unwind: '$joinedData' // This line can cause an error if there are no matches
  }
])
```