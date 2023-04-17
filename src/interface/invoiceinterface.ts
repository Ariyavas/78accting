export interface Iinvoice {
    tax_id: string;
    name: string;
    date: Date;
    no: string;
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
    ],
    branch: [
        {
            main: string;
            submain: string;
            submain_no: string;
        }
    ],
    item: [
        {
            code: string;
            description: string;
            quantity: string;
            price: string;
            amount: string;
        }
    ],
    total: number;
    total_text: string;
    subtotal: number;
    vat: number;
    nettotal: number;
}