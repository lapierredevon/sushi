const sushiService = require("./sushi.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

const list = async (req, res, next) => {
  const recallMenu = await sushiService.list();
  res.json({ data: recallMenu });
};

module.exports = {
  list: asyncErrorBoundary(list),
};
