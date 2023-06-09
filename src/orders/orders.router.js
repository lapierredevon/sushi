const router = require("express").Router();
const controller = require("./orders.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router.route("/").post(controller.create).all(methodNotAllowed);

router.route("/:orderId").get(controller.read).all(methodNotAllowed);

module.exports = router;
