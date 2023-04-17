import User from '../models/usermodels'
import mongoose from 'mongoose'

const CreateUser = async () => {
    try {
        const user = new User({
            _id: new mongoose.Types.ObjectId(),
            username: "ariyavas",
            password: "1234",
            email: "ariyavas@gmail.com",
            company: "78Accting จำกัด",
            address: [{
                _id: new mongoose.Types.ObjectId(),
                number: "426/9",
                moo: "1",
                soi: "อมรศรี",
                road: "บึงพระ",
                T: "บึงพระ",
                A: "ในเมือง",
                province: "พิษณุโลก",
                post: "65000",
                tel: "0814750845"
            }],
            status: true,
        })

        await user.save();

        return user
    } catch (error) {
        throw error;
    }
}

export { CreateUser } ;