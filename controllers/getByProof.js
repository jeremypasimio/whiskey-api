module.exports.getByProof = (req, res, whiskeys) => {
  const { comp, proof } = req.params;
  console.log('comp op ', comp);

  let results;

  switch (comp) {
    case 'e':
      results = whiskeys.filter((w) => {
        return ~~w.proof === ~~proof;
      });
      break;
    case 'gt':
      results = whiskeys.filter((w) => {
        return ~~w.proof > ~~proof;
      });
      break;
    case 'gte':
      results = whiskeys.filter((w) => {
        return ~~w.proof >= ~~proof;
      });
      break;
    case 'lt':
      results = whiskeys.filter((w) => {
        return ~~w.proof < ~~proof;
      });
      break;
    case 'lte':
      results = whiskeys.filter((w) => {
        return ~~w.proof <= ~~proof;
      });
      break;
    default:
      console.log('No results');
  }

  if (results) {
    res.json(results);
  } else {
    res.json('No results found');
  }
};
