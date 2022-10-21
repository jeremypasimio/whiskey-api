module.exports.getByAge = (req, res, whiskeys) => {
  const { comp, age } = req.params;

  let results;

  switch (comp) {
    case 'e':
      results = whiskeys.filter((w) => {
        return ~~w.age === ~~age;
      });
      break;
    case 'gt':
      results = whiskeys.filter((w) => {
        return ~~w.age > ~~age;
      });
      break;
    case 'gte':
      results = whiskeys.filter((w) => {
        return ~~w.age >= ~~age;
      });
      break;
    case 'lt':
      results = whiskeys.filter((w) => {
        return ~~w.age < ~~age;
      });
      break;
    case 'lte':
      results = whiskeys.filter((w) => {
        return ~~w.age <= ~~age;
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
