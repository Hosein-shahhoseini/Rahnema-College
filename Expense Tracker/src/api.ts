import express = require('express');
import {app as userRoute} from "./routes/user.routes";
import {app as groupRoute} from "./routes/group.routes";
import {app as expensesRoute} from "./routes/user-expense.route";
import {app as CERoute} from "./routes/expense.route";



export const app = express();

app.use(express.json());

app.use((req, res, next) => {
   // console.log(req.method, req.url);
    next();
});



app.use("/createUser" , userRoute);
app.use("/createGroup" , groupRoute);
app.use("/userExpenses" , expensesRoute);
app.use("/createExpense" , CERoute);





app.use((req, res) => {
    res.status(404).send({ message: "Bad Request" });
});


