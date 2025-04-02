import express from "express";
import dbConnection from "./util/dbConnection.js";
import { appConfig } from "./config/appConfig.js";
import indexRouter from "./router/index.js"

const app = express();
dbConnection();

// instead of body-parser we can use this, this will reduce the load 
app.use(
    express.json({
        type: ["application/json"]
    })
)

app.use("/api/v1", indexRouter);

const port = 5000;

app.listen(port, ()=> {
    console.log("Serving running on port " + port)
    return true;
})