import { Response } from "express";
import { HttpError } from "./my-errors";

export const handelExpress = <T>(res : Response , fn : () => T) => {
    try{
        const data = fn();
        res.status(200).send(data);
    }catch(e){
        if (e instanceof HttpError) {
            res.status(e.status).send( {message : e.message} );
            return;
        }
        res.status(500).send();
    }
}