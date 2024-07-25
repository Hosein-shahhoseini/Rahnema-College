import express = require('express');
import {app as createUserRouter} from "./routes/createUser.route";
import {app as getExpensesRouter} from "./routes/getExpenses.route";
import {app as createGroupRouter}  from "./routes/createGroup.route";
import {app as createExpenseRouter} from "./routes/createExpense.route";

export const app = express();

app.use(express.json());

app.use((req, res, next) => {
    next();
})



app.use("/createUser" , createUserRouter);
app.use("/getExpenses" , getExpensesRouter);
app.use("/createGroup" , createGroupRouter);
app.use("/createExpense" , createExpenseRouter);


app.use((req, res) => {
    res.status(404).send({ message: "Bad Request" });
});