//Implement update database entry after database setup
module.exports.updateByName = (req, res, whiskeys) => {
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

  const searchName = req.params.name;
  console.log('name ', name);

  let whiskeyToUpdate = whiskeys.filter((w) => {
    return w.name.toLowerCase() === searchName.toLowerCase();
  });

  if (name) {
    whiskeyToUpdate[0].name = name;
  }
  if (general) {
    whiskeyToUpdate[0].category.general = general;
  }
  if (sub) {
    whiskeyToUpdate[0].category.sub = sub;
  }
  if (region) {
    whiskeyToUpdate[0].region = region;
  }
  if (distillery) {
    whiskeyToUpdate[0].distillery = distillery;
  }
  if (age) {
    whiskeyToUpdate.age = age;
  }
  if (abv) {
    whiskeyToUpdate[0].abv = abv;
  }
  if (proof) {
    whiskeyToUpdate[0].proof = proof;
  }
  if (caskstrength) {
    whiskeyToUpdate[0].caskstrength = caskstrength;
  }

  console.log(whiskeyToUpdate);

  res.json('updating');
};
