import mongoose, { Document, Schema } from "mongoose";
import { IUser } from '../interface/uersinterface';

interface IUserModels extends IUser, Document {}

const UserSchema: Schema = new Schema(
    {
        username: { type: String, unique: true, required: true },
        password: { type: String, required: true },
        email: { type: String, required: true },
        company: { type: String, required: true },
        address: [
            {
                number: { type: String, required: true },
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
        invoice: [
            {
                id_invoice: { type: String, required: true }
            }
        ],
        role: { type: String, default: 'USER' },
        status: { type: Boolean, required: true }
    },
    {
        versionKey: false,
    }
);

export default mongoose.model<IUserModels>("User", UserSchema);