module.exports.getByDist = (req, res, db) => {
  const { distillery } = req.params;
  console.log(distillery);

  db.select('*')
    .from('whiskey')
    .where({ distillery: distillery })
    .then((result) => {
      if (result.length === 0) {
        res.status(400).json('Distillery not found');
      } else {
        console.log(result);
        res.json(result);
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('Distillery not found');
    });
};
