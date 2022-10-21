module.exports.getByAbv = (req, res, whiskeys) => {
  const { comp, abv } = req.params;
  console.log('comp op ', comp);

  let results;

  switch (comp) {
    case 'e':
      results = whiskeys.filter((w) => {
        return ~~w.abv === ~~abv;
      });
      break;
    case 'gt':
      results = whiskeys.filter((w) => {
        return ~~w.abv > ~~abv;
      });
      break;
    case 'gte':
      results = whiskeys.filter((w) => {
        return ~~w.abv >= ~~abv;
      });
      break;
    case 'lt':
      results = whiskeys.filter((w) => {
        return ~~w.abv < ~~abv;
      });
      break;
    case 'lte':
      results = whiskeys.filter((w) => {
        return ~~w.abv <= ~~abv;
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
