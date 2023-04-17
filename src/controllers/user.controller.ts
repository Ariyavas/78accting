import { NextFunction, Request, Response } from "express";
import { CreateUser } from "../services/user";

const API_CreacteUser = (req: Request, res: Response, next: NextFunction) => {

    CreateUser().then((data: any) => {
        res.status(200).json({ data: data });
    })
        .catch((err: any) => {
            res.status(500).json({ err: err.message });
        });
}

export { API_CreacteUser }