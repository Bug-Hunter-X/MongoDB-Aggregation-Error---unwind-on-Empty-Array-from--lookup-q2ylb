```javascript
// Improved MongoDB aggregation pipeline to handle cases where no matches are found
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
    $unwind: {
      path: '$joinedData',
      preserveNullAndEmptyArrays: true
    }
  }
]);
```