import express = require('express');
import {app as planRoute} from "./routes/plan.route";
import {app as userRoute} from "./routes/users.route";
import {app as programRoute} from "./routes/program.route";

export const app = express();
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
})


app.use("/plan" , planRoute);
app.use(userRoute);
app.use("/program" , programRoute);

app.use((req, res) => {
    res.status(404).send({ message: "Bad Request" });
});
