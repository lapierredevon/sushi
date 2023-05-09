const ordersService = require("../orders/orders.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const hasProperties = require("../errors/hasProperties");
const checkForProperties = hasProperties("receipt");

const VALID_PROPERTIES = ["receipt"];

const validPropertiesCheck = (req, res, next) => {
  const { data = {} } = req.body;
  console.log("validPropertiesCheck", data);
  const properties = Object.keys(data).filter(
    (element) => !VALID_PROPERTIES.includes(element)
  );

  if (properties.length) {
    next({
      status: 400,
      message: `missing ${properties} property`,
    });
  } else {
    console.log("validPropertiesCheck", "made it to next");
    next();
  }
};

const ordersNotEmpty = (req, res, next) => {
  const { receipt = {} } = req.body.data;
  console.log("made it to ordersNotEmpty", receipt);
  if (receipt.length <= 0) {
    next({
      status: 400,
      message: `Order can not be empty`,
    });
  }
  next();
};

const create = async (req, res, next) => {
  const { receipt } = ({} = req.body.data);
  const postOrder = await ordersService.create({
    receipt: JSON.stringify(receipt),
  });

  console.log("Check post order data", postOrder);
  res.status(204).json({ data: postOrder });
};

module.exports = {
  create: [
    checkForProperties,
    validPropertiesCheck,
    ordersNotEmpty,
    asyncErrorBoundary(create),
  ],
};
