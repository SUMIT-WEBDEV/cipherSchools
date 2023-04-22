const router = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../Models/Users");

router.post("/register", async (req, res) => {
  try {
    //generate new password
    console.log("no user Added");
    console.log(req.body);

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    //create new user
    const newUser = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      interest: req.body.interest,
      email: req.body.email,
      phone: req.body.phone,
      password: hashedPassword,
    });

    //save user and respond
    const user = await newUser.save();

    res.status(200).json(user);
    console.log("new user Added");
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(404).json("user not found");

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    !validPassword && res.status(400).json("wrong password");

    res.status(200).json(user);
    console.log("Logged in");
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE PASSWORD
router.put("/updatePassword/:userId", async (req, res) => {
  try {
    //find user by ID
    const user = await User.findById(req.params.userId);
    console.log(user);

    //check if user exists
    !user && res.status(404).json("user not found");

    //check if old password is correct
    const validPassword = await bcrypt.compare(
      req.body.oldPassword,
      user.password
    );
    !validPassword && res.status(400).json("wrong password");

    //generate new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.newPassword, salt);

    //update user password
    user.password = hashedPassword;
    await user.save();

    res.status(200).json("password updated");
  } catch (err) {
    res.status(500).json(err);
    console.log("err");
    console.log(err);
  }
});

// Get the user
router.get("/:id", (req, res) => {
  User.findById(req.params.id)
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

module.exports = router;
