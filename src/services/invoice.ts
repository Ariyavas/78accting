import PDFDocument from 'pdfkit';
import fs from 'fs';

const exportpdf = async (filename: string) => {
    try {
        const data: any = [{
            invoiceName: "ห้างหุ้นส่วน จำกัด เบเกอรี่ ซิตี้",
            address: "สำนักงานใหญ่ เลขที่ 211/5 ถนนสีหราชเดโชชัย ตำบลในเมือง \nอำเภอเมืองพิษณุโลก จังหวัดพิษณุโลก 65000 \nเลขประจำตัวผู้เสียภาษีอากร 0653564002507",
            name: "มหาวิทยาลัยเทคโนโลยีราชมงคล ล้านนา พิษณุโลก",
            address1: "52 หมู่ 7 ตำบล บ้านกร่าง อำเภอเมืองพิษณุโลก 65000",
            tax: "0 9940 00100 43 4",
            no: "660404-01",
            date: "04/04/66",
            credit: "",
            branch: [{
                main: "",
                sub: "x",
                subno: "1",
            }],
            items: [{
                code: "1",
                description: "testssss",
                quantity: 20,
                price: 20000,
                amount: 10,
            }, {
                code: "2",
                description: "testssss1",
                quantity: 20,
                price: 20000,
                amount: 10,
            }, {
                code: "3",
                description: "testssss2",
                quantity: 20,
                price: 20000,
                amount: 10,
            }, {
                code: "4",
                description: "testssss3",
                quantity: 20,
                price: 20000,
                amount: 10,
            }, {
                code: "5",
                description: "testssss4",
                quantity: 20,
                price: 20000,
                amount: 10,
            }, {
                code: "6",
                description: "testssss5",
                quantity: 20,
                price: 20000,
                amount: 10,
            }, {
                code: "7",
                description: "testssss6",
                quantity: 20,
                price: 20000,
                amount: 10,
            }],
            total: 20000,
            totalthai: "สองหมื่นถ้วน",
            subtotal: 2000,
            vat: 1000,
            nottotal: 200,
        }];

        const doc = new PDFDocument({ font: "./src/fonts/THSarabun.ttf" });
        doc.pipe(fs.createWriteStream(`./src/pdf/${filename}.pdf`));

        // Add the invoice number and date
        doc.fontSize(16).text(`${data[0].invoiceName}`, 50, 30);
        doc.fontSize(12).fill('#FF0000').text(`สำหรับลูกค้า`, 30, 35, { width: 500, align: 'right' });
        doc.fontSize(12).fill('#000').text(`เอกสารออกเป็นชุด`, 50, 50, { align: 'right' });
        doc.fontSize(12).text(`${data[0].address}`, 50, 50);

        // Add the Title
        doc.roundedRect(245, 120, 170, 35, 3).fill('#616196')
        doc.font('./src/fonts/THSarabun Bold.ttf').fontSize(15).fill('#fff').text("ต้นฉบับใบกำกับภาษี\nORIGINAL TAX INVOICE", 245, 120, { width: 170, align: 'center' })
        doc.font('./src/fonts/THSarabun.ttf')

        doc.roundedRect(35, 165, 375, 85, 3).lineWidth(0.5).stroke();
        doc.fontSize(12).fill('#000').text('นามลูกค้า', 40, 170, { width: 125, align: 'left' })
        doc.fontSize(8).fill('#000').text('Name', 40, 182, { width: 125, align: 'left' })
        doc.fontSize(12).fill('#000').text(`${data[0].name}`, 100, 170, { width: 240, align: 'left' })

        doc.fontSize(12).fill('#000').text('ที่อยู่', 40, 190, { width: 125, align: 'left' })
        doc.fontSize(8).fill('#000').text('Address', 40, 202, { width: 125, align: 'left' })
        doc.fontSize(12).fill('#000').text(`${data[0].address1}`, 100, 190, { width: 280, align: 'left' })

        doc.fontSize(12).fill('#000').text('เลขประจำตัวปผู้เสียภาษี', 40, 225, { width: 125, align: 'left' })
        doc.fontSize(8).fill('#000').text('Tax ID.', 40, 237, { width: 125, align: 'left' })
        doc.fontSize(12).fill('#000').text(`${data[0].tax}`, 140, 225, { width: 90, align: 'left' })

        doc.roundedRect(240, 225, 10, 10, 0).lineWidth(0.5).stroke();
        doc.fontSize(12).fill('#000').text('สำนักงานใหญ่', 260, 225, { width: 125, align: 'left' })
        doc.fontSize(16).fill('#FF0000').text(`${data[0].branch[0].main}`, 242, 220, { width: 30, align: 'left' })

        doc.roundedRect(320, 225, 10, 10, 0).lineWidth(0.5).stroke();
        doc.fontSize(12).fill('#000').text('สาขาที่___', 340, 225, { width: 125, align: 'left' })
        doc.fontSize(16).fill('#FF0000').text(`${data[0].branch[0].sub}`, 322, 220, { width: 30, align: 'left' })
        doc.fontSize(16).fill('#FF0000').text(`${data[0].branch[0].subno}`, 365, 222, { width: 30, align: 'left' })

        doc.roundedRect(415, 165, 160, 85, 3).lineWidth(0.5).stroke();
        doc.fontSize(12).fill('#000').text('เลขที่', 420, 170, { width: 125, align: 'left' })
        doc.fontSize(8).fill('#000').text('No.', 420, 182, { width: 125, align: 'left' })
        doc.fontSize(12).fill('#FF0000').text(`${data[0].no}`, 480, 170, { width: 125, align: 'left' })

        doc.fontSize(12).fill('#000').text('ที่อยู่', 420, 190, { width: 125, align: 'left' })
        doc.fontSize(8).fill('#000').text('Address', 420, 202, { width: 125, align: 'left' })
        doc.fontSize(12).fill('#000').text(`${data[0].date}`, 480, 190, { width: 125, align: 'left' })

        doc.fontSize(12).fill('#000').text('เครดิต', 420, 225, { width: 125, align: 'left' })
        doc.fontSize(8).fill('#000').text('Credit', 420, 237, { width: 125, align: 'left' })
        doc.fontSize(12).fill('#000').text(`${data[0].credit}`, 480, 225, { width: 90, align: 'left' })

        // Add a table of the invoice items
        const tableTop: number = 260;
        const tableLeft: number = 35;
        const tableWidth: number = 540;
        const rowHeight: number = 30;
        const headerHeight: number = 25;
        const col1Width = tableWidth * 0.1;
        const col2Width = tableWidth * 0.4;
        const col3Width = tableWidth * 0.1;
        const col4Width = tableWidth * 0.2;
        const col5Width = tableWidth * 0.2;

        // Draw the table header
        doc.rect(tableLeft, tableTop, tableWidth, headerHeight).fill('#DD6400');
        doc.fontSize(10).fill('#fff').text('รหัสสินค้า\nCode', tableLeft, tableTop + 1, { width: col1Width, align: 'center' });
        doc.fontSize(10).fill('#fff').text('รายการ\nDescription', tableLeft + col1Width, tableTop + 1, { width: col2Width, align: 'center' });
        doc.fontSize(10).fill('#fff').text('จำนวน\nQuantity', tableLeft + col1Width + col2Width, tableTop + 1, { width: col3Width, align: 'center' });
        doc.fontSize(10).fill('#fff').text('ราคา\nPrice', tableLeft + col1Width + col2Width + col3Width, tableTop + 1, { width: col4Width, align: 'center' });
        doc.fontSize(10).fill('#fff').text('จำนวนเงิน\nAmount', tableLeft + col1Width + col2Width + col3Width + col4Width, tableTop + 1, { width: col5Width, align: 'center' });

        const startX = 35;
        const startY = 285;
        const cellWidth = 100;
        const cellHeight = 15;
        const rowCount = 22;
        const columnCount = 5.4;

        const cellamout = 70;

        doc.moveTo(startX, tableTop + 0 * headerHeight).lineTo(startX + columnCount * cellWidth, tableTop + 0 * headerHeight).stroke();

        for (let i = 0; i <= rowCount; i++) {
            doc.moveTo(startX, startY + i * cellHeight).lineTo(startX + columnCount * cellWidth, startY + i * cellHeight).stroke();
        }

        doc.moveTo(startX + col1Width + col2Width + col3Width, startY + rowCount * cellHeight + cellamout).lineTo(startX + columnCount * cellWidth, startY + rowCount * cellHeight + cellamout).stroke();

        doc.moveTo(startX, tableTop).lineTo(startX, startY + rowCount * cellHeight).stroke();
        doc.moveTo(startX + col1Width, tableTop).lineTo(startX + col1Width, startY + rowCount * cellHeight).stroke();
        doc.moveTo(startX + col1Width + col2Width, tableTop).lineTo(startX + col1Width + col2Width, startY + rowCount * cellHeight).stroke();
        doc.moveTo(startX + col1Width + col2Width + col3Width, tableTop).lineTo(startX + col1Width + col2Width + col3Width, startY + rowCount * cellHeight + cellamout).stroke();
        doc.moveTo(startX + col1Width + col2Width + col3Width + col4Width, tableTop).lineTo(startX + col1Width + col2Width + col3Width + col4Width, startY + rowCount * cellHeight + cellamout).stroke();
        doc.moveTo(startX + col1Width + col2Width + col3Width + col4Width + col5Width, tableTop).lineTo(startX + col1Width + col2Width + col3Width + col4Width + col5Width, startY + rowCount * cellHeight + cellamout).stroke();

        // Draw the table rows
        let y = tableTop + headerHeight + 2;
        data[0].items.forEach((item: any) => {
            doc.fontSize(10).fill('#000').text(item.code, tableLeft - 10, y, { width: col1Width, align: 'right' });
            doc.fontSize(10).fill('#000').text(item.description.toString(), tableLeft + 10 + col1Width, y, { width: col2Width, align: 'left' });
            doc.fontSize(10).fill('#000').text(item.quantity.toFixed(2), tableLeft - 10 + col1Width + col2Width, y, { width: col3Width, align: 'right' });
            doc.fontSize(10).fill('#000').text(item.price.toFixed(2), tableLeft - 10 + col1Width + col2Width + col3Width, y, { width: col4Width, align: 'right' });
            doc.fontSize(10).fill('#000').text(item.amount.toFixed(2), tableLeft - 10 + col1Width + col2Width + col3Width + col4Width, y, { width: col5Width, align: 'right' });
            y += rowHeight - 15;
        });

        const yamout = tableTop + headerHeight + 13;

        // Add note
        doc.fontSize(8).text(`หมายเหตุ :`, tableLeft + 10, yamout + (15 * rowCount - 10), { width: col1Width + col2Width + col3Width, align: 'left' });
        doc.fontSize(8).text(`1.กรณีชำระเงินโดยเช็คกรุณาสั่งจ่ายเช็คขีดคร่อมในนาม "${data[0].invoiceName}" เท่านั้น`, tableLeft + 10, yamout + (16 * rowCount - 20), { width: col1Width + col2Width + col3Width, align: 'left' });
        doc.fontSize(8).text(`2.บริษัทฯ ขอสงวนสิทธิ์ในการแก้ไขใบกำกับภาษีภายใน 7 วัน นับจากวันที่ระบุในใบกำกับภาษี (ผิด ตก ยกเว้น E. & OE.)`, tableLeft + 10, yamout + (17 * rowCount - 30), { width: col1Width + col2Width + col3Width, align: 'left' });

        doc.roundedRect(tableLeft, yamout + (18.5 * rowCount - 50), col1Width + col2Width + col3Width - 10, 30, 3).lineWidth(0.5).stroke();
        doc.fontSize(12).text(`ตัวอักษร`, tableLeft, yamout + (19 * rowCount - 50), { width: 90, align: 'center' })
        doc.fontSize(12).text(`(${data[0].totalthai})`, tableLeft + 120, yamout + (19 * rowCount - 50), { width: 90, align: 'center' })

        // Add the total amount due
        doc.fontSize(10).text(`รวมเงิน (Total)`, tableLeft + 10 + col1Width + col2Width + col3Width, yamout + (15 * rowCount - 10), { width: col4Width, align: 'left' });
        doc.fontSize(10).text(`${data[0].total.toFixed(2)}`, tableLeft - 10 + col1Width + col2Width + col3Width + col4Width, yamout + (15 * rowCount - 10), { width: col5Width, align: 'right' });
        doc.fontSize(10).text(`สินค้ายกเว้นภาษี         7%`, tableLeft + 10 + col1Width + col2Width + col3Width, yamout + (16 * rowCount - 20), { width: col4Width, align: 'left' });
        doc.fontSize(10).text(`${data[0].total.toFixed(2)}`, tableLeft - 10 + col1Width + col2Width + col3Width + col4Width, yamout + (16 * rowCount - 20), { width: col5Width, align: 'right' });
        doc.fontSize(10).text(`รวมเงินทั้งสิ้น (Subtotal)`, tableLeft + 10 + col1Width + col2Width + col3Width, yamout + (17 * rowCount - 30), { width: col4Width, align: 'left' });
        doc.fontSize(10).text(`${data[0].total.toFixed(2)}`, tableLeft - 10 + col1Width + col2Width + col3Width + col4Width, yamout + (17 * rowCount - 30), { width: col5Width, align: 'right' });
        doc.fontSize(10).text(`ภาษีมูลค่าเพิ่ม (Vat)     7%`, tableLeft + 10 + col1Width + col2Width + col3Width, yamout + (18 * rowCount - 40), { width: col4Width, align: 'left' });
        doc.fontSize(10).text(`${data[0].total.toFixed(2)}`, tableLeft - 10 + col1Width + col2Width + col3Width + col4Width, yamout + (18 * rowCount - 40), { width: col5Width, align: 'right' });
        doc.fontSize(10).text(`ยอดเงินสุทธิ (Not total)`, tableLeft + 10 + col1Width + col2Width + col3Width, yamout + (19 * rowCount - 50), { width: col4Width, align: 'left' });
        doc.fontSize(10).text(`${data[0].total.toFixed(2)}`, tableLeft - 10 + col1Width + col2Width + col3Width + col4Width, yamout + (19 * rowCount - 50), { width: col5Width, align: 'right' });

        doc.end();
        return `Success export file ${filename}.pdf`
    } catch (error) {
        throw error
    }
}

export { exportpdf }