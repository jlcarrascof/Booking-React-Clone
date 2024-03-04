import express from "express";
import { createUser, deleteUser, getUser, updateUser, getUsers } from "../controllers/user.js";
import { verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

router.get("/checkauthentication", verifyToken, (req, res, next) => {
    res.send("Hello, user! You are logged in!");
});

router.get("/checkuser/:id", verifyUser, (req, res, next) => {
    res.send("Hello, user. You are logged in and you can delete your account!");
});

// CREATE

router.post("/", createUser);

// UPDATE

router.put("/:id", updateUser);

// DELETE

router.delete("/:id", deleteUser);

// GET

router.get("/:id", getUser);

// GET ALL

router.get("/", getUsers);

export default router;
