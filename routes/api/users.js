const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
//Load User model
const User = require("../../models/User");
// @route GET/api/users/test
// @desc test user
// @access public
router.get("/test", (req, res) => res.json({ msg: "User Works!" }));

// @route GET/api/users/register
// @desc register user
// @access public
router.post("/register", (req, res) => {
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      let newUser = new User({
        fullname: req.body.fullname,
        email: req.body.email,

        password: req.body.password
      });
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});
module.exports = router;
