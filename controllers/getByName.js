module.exports.getByName = (req, res, whiskeys) => {
  console.log('method reached');
  const { name } = req.params;
  console.log(name);

  const result = whiskeys.filter((w) => {
    if (w.name.toLowerCase() === name.toLowerCase()) {
      console.log(w);
      return w;
    }
  });

  res.json(result);
};
