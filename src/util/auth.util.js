import jwt  from "jsonwebtoken";
import { appConfig } from "../config/appConfig.js";


export const generateToken = async(data, expireTime) => {
    return jwt.sign(data, appConfig.jwtSecret, {expiresIn: expireTime?? "5d"});
}