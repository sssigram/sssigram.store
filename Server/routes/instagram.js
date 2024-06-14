const express = require("express");
const instagramController = require("../controller/instagram");

const router = express.Router();

router.post("/", instagramController.create);

exports.router = router;
