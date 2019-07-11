const express = require("express");
const router = express.Router();

// @route GET/api/users/test
// @desc test user
// @access public
router.get("/test", (req, res) => res.json({ msg: "User Works!" }));

module.exports = router;
