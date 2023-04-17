export interface IUser {
    username: string;
    password: string;
    email: string;
    company: string;
    address: [
        {
            number: string;
            moo: string;
            soi: string;
            road: string;
            T: string;
            A: string;
            province: string;
            post: string;
            tel: string;
        }
    ]
    invoice: [
        {
            id_invoice: string;
        }
    ]
    role: string;
    status: boolean;
}