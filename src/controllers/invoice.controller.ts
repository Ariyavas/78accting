import { NextFunction, Request, Response } from "express";
import { Creacte_invoice } from "../services/invoice";

const API_invoice = (req: Request, res: Response, next: NextFunction) => {
  const { userid } = req.body;
  Creacte_invoice(userid)
    .then((data: any) => {
      res.status(200).json({ data: data });
    })
    .catch((err: any) => {
      res.status(500).json({ err: err.message });
    });
};

export { API_invoice };
