module.exports.getByCat = (req, res, db) => {
  const { category, sub } = req.params;

  db.select('*')
    .from('whiskey')
    .modify((queryBuilder) => {
      if (category !== 'all') {
        let query;
        if (sub) {
          query = { gencat: category, subcat: sub };
        } else {
          query = { gencat: category };
        }
        queryBuilder.where(query);
      }
    })
    .then((result) => {
      if (result.length === 0) {
        res.status(400).json('Could not find whiskey');
      } else {
        console.log(result);
        res.json(result);
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('Could not find whiskey');
    });
};
