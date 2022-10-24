module.exports.getByName = (req, res, db) => {
  const { name } = req.params;
  console.log(name);

  db.select('*')
    .from('whiskey')
    .where('name', '=', name)
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
