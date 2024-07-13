import express = require('express');
const app = express();
type userType = "admin" | "representative" | "normal" ;
const users: user[] = [];
const plans: plan[] = [];

app.use(express.json());

type user = {
    type : userType,
    name: string,
    age: number ,
    password: string;
}

type plan = {
    planName : string ,
    description : string ,  
    dueDateTarh : Date ,
    dueDateVote :  Date
}

app.get("/plans" , (req , res) => {
    // res.send(plans);
    res.json(plans);
})

app.post("/add" ,(req , res) => {
    const user = req.body.user;
    if(user.type !== 'admin'){
        return res.send({ status : "need to be an admin for adding a plan"});
    }
    plans.push({
            planName : req.body.planName,
            description : req.body.description,
            dueDateTarh : req.body.dueDateTarh,
            dueDateVote :  req.body.dueDateVote

    })
    res.send({status : "plan added succesfully!"});
});


app.listen(3000, () => {
    console.log("Server listening on port 3000");
});