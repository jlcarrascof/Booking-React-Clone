import express from "express";
import Hotel from "../models/hotel.js";
import { createError } from "../utils/error.js";
import { createHotel, updateHotel } from "../controllers/hotel.js";

const router = express.Router();

// CREATE

router.post("/", createHotel);

// UPDATE

router.put("/:id", updateHotel);

// DELETE

router.delete("/:id", async (req, res) => {

    try {
        await Hotel.findByIdAndDelete(req.params.id);
        res.status(200).json("Hotel has been deleted...");
    } catch (err) {
        res.status(500).json(err);
    }

});

// GET

router.get("/:id", async (req, res) => {
    try {
        const hotel = await Hotel.findById(req.params.id);
        res.status(200).json(hotel);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET ALL

router.get("/", async (req, res, next) => {
    try {
        const hotel = await Hotel.find();
        res.status(200).json(hotel);
    } catch (err) {
        next(err);
    }
});

export default router;
