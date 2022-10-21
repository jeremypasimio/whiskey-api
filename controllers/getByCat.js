module.exports.getByCat = (req, res, whiskeys) => {
  const { category, sub } = req.params;
  let result;

  if (category === 'all') {
    return res.json(whiskeys);
  } else if (sub) {
    result = whiskeys.filter((w) => {
      if (
        w.category.general.toLowerCase() === category.toLowerCase() &&
        w.category.sub.toLowerCase() === sub.toLowerCase()
      ) {
        console.log(w);
        return w;
      }
    });
  } else {
    result = whiskeys.filter((w) => {
      if (w.category.general.toLowerCase() === category.toLowerCase()) {
        console.log(w);
        return w;
      }
    });
  }

  res.json(result);
};
