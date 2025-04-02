import mongoose from "mongoose";

import { appConfig } from "../config/appConfig.js";

const connect = async() => {
    await mongoose.connect(appConfig.mongoUrl).then(() => {
        console.log("db connected.");
    })
    .catch((err) => {
        console.error(err);
    })
}

export default connect;