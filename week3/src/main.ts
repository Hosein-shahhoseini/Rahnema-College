import { app } from "./api";

import { user, users } from './routes/users.route';


declare global {
    namespace Express {
        interface Request {
            user : user;
        }
    }
};



const PORT = 3000;
app.listen(PORT , () => {
    // console.log("Listening on Prot " + PORT);
});