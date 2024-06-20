exports.create = (req, res) => {
  res.status(200).json(JSON.stringify(req.body));
};
