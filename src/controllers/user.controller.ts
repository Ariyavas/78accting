import { NextFunction, Request, Response } from "express";
import { CreateUser } from "../services/user";

const API_CreacteUser = (req: Request, res: Response, next: NextFunction) => {
  const { username } = req.body;
  CreateUser(username)
    .then((data: any) => {
      res.status(200).json({ data: data });
    })
    .catch((err: any) => {
      res.status(500).json({ err: err.message });
    });
};

export { API_CreacteUser };
