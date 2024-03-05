import express from "express";
import { deleteUser, getUser, updateUser, getUsers } from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

/*
router.get("/checkauthentication", verifyToken, (req, res, next) => {
    res.send("Hello, user! You are logged in!");
});

router.get("/checkuser/:id", verifyUser, (req, res, next) => {
    res.send("Hello, user. You are logged in and you can delete your account!");
});

router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
    res.send("Hello, Admin. You are logged in and you can delete all accounts!");
});
*/

// CREATE

// router.post("/", createUser);

// UPDATE

router.put("/:id", verifyUser, updateUser);

// DELETE

router.delete("/:id", verifyUser, deleteUser);

// GET

router.get("/:id", verifyUser, getUser);

// GET ALL

router.get("/", verifyAdmin, getUsers);

export default router;
