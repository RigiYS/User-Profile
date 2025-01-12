const userController = require("../controllers/user-controller");
const express = require("express");
const router = express.Router();
const userAuth = require("../middleware/user-auth")

router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUserById);
router.post('/', userController.addUser);
router.put("/:id", userController.updateUserById);
router.delete("/:id", userController.deleteUserById);

module.exports = router;