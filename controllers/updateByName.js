module.exports.updateByName = (req, res, db) => {
  const {
    name,
    distillery,
    gencat,
    subcat,
    region,
    age,
    noage,
    abv,
    proof,
    caskstrength,
  } = req.body;

  const searchName = req.params.name;

  db('whiskey')
    .where({ name: searchName })
    .then(() => {
      let updatedWhiskey = {
        name: name.toLowerCase(),
        distillery: distillery.toLowerCase(),
        gencat: gencat.toLowerCase(),
        subcat: subcat.toLowerCase(),
        region: region.toLowerCase(),
        age: age,
        noage: noage,
        abv: abv,
        proof: proof,
        caskstrength: caskstrength,
      };

      db('whiskey')
        .where({ name: searchName })
        .update(updatedWhiskey, ['name'])
        .then((result) => {
          console.log(result);
          res.json(result);
        })
        .catch((err) => {
          console.log(err);
          res.status(400).json('Error Updating');
        });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('Could not find whiskey');
    });
};
