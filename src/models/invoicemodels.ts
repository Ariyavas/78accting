import mongoose, { Document, Schema } from "mongoose";
import { Iinvoice } from "../interface/invoiceinterface";

interface IUserModels extends Iinvoice, Document { }

const InvoiceSchema: Schema = new Schema(
    {
        tax_id: { type: String, required: true },
        name: { type: String, required: true },
        date: Date,
        no: { type: String, required: true },
        address: [
            {
                number: { type: Number, required: true },
                moo: { type: String, required: true },
                soi: { type: String, required: true },
                road: { type: String, required: true },
                T: { type: String, required: true },
                A: { type: String, required: true },
                province: { type: String, required: true },
                post: { type: String, required: true },
                tel: { type: String, required: true },
            }
        ],
        branch: [
            {
                main: { type: String, required: true },
                submain: { type: String, required: true },
                submain_no: { type: String, required: true },
            }
        ],
        item: [
            {
                code: { type: String, required: true },
                description: { type: String, required: true },
                quantity: { type: String, required: true },
                price: { type: String, required: true },
                amount: { type: String, required: true },
            }
        ],
        total: { type: Number, required: true },
        total_text: { type: String, required: true },
        subtotal: { type: Number, required: true },
        vat: { type: Number, required: true },
        nettotal: { type: Number, required: true },
    },
    {
        versionKey: false,
    }
)