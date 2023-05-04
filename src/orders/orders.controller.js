const ordersService = require("../orders/orders.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const hasProperties = require("../errors/hasProperties");
const checkForProperties = hasProperties("receipt");

const VALID_PROPERTIES = ["receipt"];

const validPropertiesCheck = (req, res, next) => {
  const { data = {} } = req.body;
  const properties = Object.keys(data).filter(
    (element) => !VALID_PROPERTIES.includes(element)
  );

  if (properties.length) {
    next({
      status: 400,
      message: `missing ${properties} property`,
    });
  } else {
    next();
  }
};

const ordersNotEmpty = (req, res, next) => {
  const { receipt = {} } = req.body.data;

  if (receipt.length <= 0) {
    next({
      status: 400,
      message: `Order can not be empty`,
    });
  }
};

const create = async (req, res, next) => {
  const postOrder = await ordersService.create(req.body.data);
  res.status(204).json({ data: postOrder });
};

module.exports = {
  create: [
    validPropertiesCheck,
    checkForProperties,
    ordersNotEmpty,
    asyncErrorBoundary(create),
  ],
};
