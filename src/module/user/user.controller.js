import { userService } from "./user.service.js";

const userSignUp = async(req, res) => {
    try {
        const data = await userService.userSignUp(req.body);
        return res.status(200).json({data});
    }
    catch (error) {
        console.error(error);
    }
}

const userLogin = async(req, res) => {
    try {
        const data = await userService.userLogin(req.body);
        return res.status(200).json({data});
    }
    catch (error) {
        console.error(error);
    }
}

const userCancelBooking = async(req, res) => {
    try {
        const data = await userService.cancelBookings(req.body, req.params.id);
        return res.status(200).json({data});
    }
    catch (error) {
        console.error(error);
    }
}


export const userController = {userSignUp, userLogin, userCancelBooking};