const express = require("express");
const router = express.Router();

const { create, index } = require("../controllers/orderController.js");
const { verifyToken } = require("../middlewares/verifyToken.js");

router.post("/create", verifyToken, create);
router.get("/index", verifyToken, index);

module.exports = router;