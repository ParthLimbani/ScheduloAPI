import { generateToken } from "../../util/auth.util.js";
import User from "./user.model.js"
import bcrypt from "bcryptjs";

const userSignUp = async (userData) => {
    let user = await User.findOne({email: userData.email});
    if(user) {
        throw new Error("User Already Exists.");
    }

    const salt = await bcrypt.genSalt(10);
    userData.password = await bcrypt.hash(userData.password, salt);

    user = new User(userData);

    await user.save();

    const token = await generateToken({ userId: user._id, role: user.role });

    return {user, token};
}

const userLogin = async(userData) => {
    let user = await User.findOne({email: userData.email});
    if(!user) {
        throw new Error("User Does not exist.");
    }

    const isValid = await bcrypt.compare(userData.password, user.password);

    if(!isValid) {
        throw new Error("User Does not exist.");
    }

    const token = await generateToken({ userId: user._id, role: user.role });

    return {user, token};
}


const userCancelBooking = async(professorData, userId) => {
    let professorBookings = await Professor.findOne({
        userId,
        day: professorData.day,
    });

    for(let i=0; i<professorBookings.startTime.length; i++) {
        if(professorBookings.startTime[i] === professorData.startTime && professorBookings.isBooked === false) {
            throw new Error("TimeSlot Never Booked.");
        }
        else {
            professorBookings.isBooked[i] = false;
        }
    }
}


export const userService = {userSignUp, userLogin, userCancelBooking}