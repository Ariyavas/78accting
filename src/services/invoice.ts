import PDFDocument from 'pdfkit';
import fs from 'fs';

const exportpdf = async (filename: string) => {
    try {
        const data: any = {
            invoiceNumber: 200,
            date: "12/12/2023",
            items: [{
                description: "test",
                quantity: 20,
                price: 20000
            }],
            total: 20000,

        };
        const doc = new PDFDocument();
        doc.pipe(fs.createWriteStream(`./src/pdf/${filename}.pdf`));

        // Add the invoice number and date
        doc.fontSize(16).text(`Invoice #${data.invoiceNumber}`, 50, 50);
        doc.fontSize(12).text(`Date: ${data.date}`, 50, 80);

        // Add a table of the invoice items
        const tableTop = 120;
        const tableLeft = 50;
        const tableWidth = 500;
        const rowHeight = 30;
        const headerHeight = 40;
        const col1Width = tableWidth * 0.6;
        const col2Width = tableWidth * 0.2;
        const col3Width = tableWidth * 0.2;

        // Draw the table header
        doc.rect(tableLeft, tableTop, tableWidth, headerHeight).fill('#eee');
        doc.fontSize(12).fill('#000').text('Description', tableLeft + 10, tableTop + 10, { width: col1Width, align: 'left' });
        doc.fontSize(12).fill('#000').text('Qty', tableLeft + col1Width, tableTop + 10, { width: col2Width, align: 'right' });
        doc.fontSize(12).fill('#000').text('Price', tableLeft + col1Width + col2Width, tableTop + 10, { width: col3Width, align: 'right' });

        // Draw the table rows
        let y = tableTop + headerHeight + 10;
        data.items.forEach((item: any) => {
            doc.fontSize(12).fill('#000').text(item.description, tableLeft + 10, y, { width: col1Width, align: 'left' });
            doc.fontSize(12).fill('#000').text(item.quantity.toString(), tableLeft + col1Width, y, { width: col2Width, align: 'right' });
            doc.fontSize(12).fill('#000').text(item.price.toFixed(2), tableLeft + col1Width + col2Width, y, { width: col3Width, align: 'right' });
            y += rowHeight;
        });

        // Add the total amount due
        doc.fontSize(16).text(`Total: $${data.total.toFixed(2)}`, tableLeft + col1Width + col2Width, y + 20, { width: col3Width, align: 'right' });

        doc.end();
        return `Success export file ${filename}.pdf`
    } catch (error) {
        throw error
    }
}

interface InvoiceItem {
    description: string;
    quantity: number;
    price: number;
}

interface InvoiceData {
    invoiceNumber: string;
    date: string;
    items: InvoiceItem[];
    total: number;
}

export { exportpdf }