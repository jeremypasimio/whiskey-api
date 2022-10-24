module.exports.addWhiskey = (req, res, db) => {
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

  db.insert({
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
  })
    .into('whiskey')
    .returning('name')
    .then((result) => {
      console.log(result);
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('Error adding whiskey');
    });
};
