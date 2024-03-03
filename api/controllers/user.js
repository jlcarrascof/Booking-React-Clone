import User from "../models/User.js";

export const createUser = async (req, res, next) => {

    const newUser = new User(req.body);

    try {
        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
    } catch (err) {
        next(err);
    }

};

export const updateHotel = async (req, res, next) => {

    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, 
            { $set: req.body }, { new: true });
        res.status(200).json(updatedHotel);
    } catch (err) {
        next(err);
    }

};

export const deleteHotel = async (req, res, next) => {

    try {
        await Hotel.findByIdAndDelete(req.params.id);
        res.status(200).json("Hotel has been deleted...");
    } catch (err) {
        next(err);
    }

};

export const getHotel = async (req, res, next) => {

    try {
        const hotel = await Hotel.findById(req.params.id);
        res.status(200).json(hotel);
    } catch (err) {
        next(err);
    }

};

export const getHotels = async (req, res, next) => {

    try {
        const hotel = await Hotel.find();
        res.status(200).json(hotel);
    } catch (err) {
        next(err);
    }

};
