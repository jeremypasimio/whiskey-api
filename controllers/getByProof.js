module.exports.getByProof = (req, res, db) => {
  const comp = req.params.comp;
  const proof = parseFloat(req.params.proof);

  let queryOp;

  switch (comp) {
    case 'e':
      queryOp = '=';
      break;
    case 'gt':
      queryOp = '>';
      break;
    case 'gte':
      queryOp = '>=';
      break;
    case 'lt':
      queryOp = '<';
      break;
    case 'lte':
      queryOp = '<=';
      break;
    default:
      console.log('No results');
  }

  db.select('*')
    .from('whiskey')
    .where('proof', queryOp, proof)
    .then((result) => {
      if (result.length === 0) {
        res.status(400).json('No Results');
      } else {
        console.log(result);
        res.json(result);
      }
    });
};
