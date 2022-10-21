//TODO implement add item to database after database setup
module.exports.addWhiskey = (req, res, whiskeys) => {
  const {
    name,
    general,
    sub,
    region,
    distillery,
    age,
    abv,
    proof,
    caskstrength,
  } = req.body;

  const newWhiskey = {
    id: 13,
    name: name,
    category: {
      general: general,
      sub: sub,
    },
    region: region,
    distillery: distillery,
    age: age,
    abv: abv,
    proof: proof,
    caskstrength: caskstrength,
  };

  whiskeys.push(newWhiskey);
  res.json(newWhiskey);
};
