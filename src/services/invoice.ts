import PDFDocument from "pdfkit";
import fs from "fs";

import User from "../models/usermodels";

const exportpdf = async (dataInvoices: any) => {
  try {
    const data: any = [
      {
        invoiceName: "ห้างหุ้นส่วน จำกัด เบเกอรี่ ซิตี้",
        address:
          "สำนักงานใหญ่ เลขที่ 211/5 ถนนสีหราชเดโชชัย ตำบลในเมือง \nอำเภอเมืองพิษณุโลก จังหวัดพิษณุโลก 65000 \nเลขประจำตัวผู้เสียภาษีอากร 0653564002507",
        name: "มหาวิทยาลัยเทคโนโลยีราชมงคล ล้านนา พิษณุโลก",
        address1: "52 หมู่ 7 ตำบล บ้านกร่าง อำเภอเมืองพิษณุโลก 65000",
        tax: "0 9940 00100 43 4",
        no: "660404-01",
        date: "04/04/66",
        credit: "",
        branch: [
          {
            main: "x",
            sub: "",
            subno: "",
          },
        ],
        items: [
          {
            code: "1",
            description: "testssss",
            quantity: 20,
            price: 20000,
            amount: 10,
          },
          {
            code: "2",
            description: "testssss1",
            quantity: 20,
            price: 20000,
            amount: 10,
          },
          {
            code: "3",
            description: "testssss2",
            quantity: 20,
            price: 20000,
            amount: 10,
          },
          {
            code: "4",
            description: "testssss3",
            quantity: 20,
            price: 20000,
            amount: 10,
          },
          {
            code: "5",
            description: "testssss4",
            quantity: 20,
            price: 20000,
            amount: 10,
          },
          {
            code: "6",
            description: "testssss5",
            quantity: 20,
            price: 20000,
            amount: 10,
          },
          {
            code: "7",
            description: "testssss6",
            quantity: 20,
            price: 20000,
            amount: 10,
          },
          {
            code: "8",
            description: "testssss6",
            quantity: 20,
            price: 20000,
            amount: 10,
          },
          {
            code: "9",
            description: "testssss6",
            quantity: 20,
            price: 20000,
            amount: 10,
          },
          {
            code: "10",
            description: "testssss6",
            quantity: 20,
            price: 20000,
            amount: 10,
          },
          {
            code: "11",
            description: "testssss6",
            quantity: 20,
            price: 20000,
            amount: 10,
          },
          {
            code: "12",
            description: "testssss6",
            quantity: 20,
            price: 20000,
            amount: 10,
          },
          {
            code: "13",
            description: "testssss6",
            quantity: 20,
            price: 20000,
            amount: 10,
          },
          {
            code: "14",
            description: "testssss6",
            quantity: 20,
            price: 20000,
            amount: 10,
          },
          {
            code: "15",
            description: "testssss6",
            quantity: 20,
            price: 20000,
            amount: 10,
          },
          {
            code: "16",
            description: "testssss6",
            quantity: 20,
            price: 20000,
            amount: 10,
          },
          {
            code: "17",
            description: "testssss6",
            quantity: 20,
            price: 20000,
            amount: 10,
          },
          {
            code: "18",
            description: "testssss6",
            quantity: 20,
            price: 20000,
            amount: 10,
          },
          {
            code: "19",
            description: "testssss6",
            quantity: 20,
            price: 20000,
            amount: 10,
          },
          {
            code: "20",
            description: "testssss6",
            quantity: 20,
            price: 20000,
            amount: 10,
          },
          {
            code: "21",
            description: "testssss6",
            quantity: 20,
            price: 20000,
            amount: 10,
          },
          {
            code: "22",
            description: "testssss6",
            quantity: 20,
            price: 20000,
            amount: 10,
          },
        ],
        total: 20000,
        totalthai: "สองหมื่นถ้วน",
        subtotal: 2000,
        vat: 1000,
        nottotal: 200,
      },
    ];

    const doc = new PDFDocument({
      font: "./src/fonts/THSarabun.ttf",
      margin: 50,
      size: "A4",
    });
    // Add the invoice number and date
    doc.fontSize(18).text(`${data[0].invoiceName}`, 50, 30);
    doc
      .fontSize(14)
      .fill("#FF0000")
      .text(`สำหรับลูกค้า`, 30, 35, { width: 500, align: "right" });
    doc
      .fontSize(14)
      .fill("#000")
      .text(`เอกสารออกเป็นชุด`, 50, 50, { align: "right" });
    doc.fontSize(14).text(`${data[0].address}`, 50, 50);

    // Add the Title
    doc.roundedRect(245, 140, 170, 35, 3).fill("#616196");
    doc
      .font("./src/fonts/THSarabun Bold.ttf")
      .fontSize(15)
      .fill("#fff")
      .text("ต้นฉบับใบกำกับภาษี\nORIGINAL TAX INVOICE", 245, 140, {
        width: 170,
        align: "center",
      });
    doc.font("./src/fonts/THSarabun.ttf");

    doc.roundedRect(35, 185, 375, 85, 3).lineWidth(0.5).stroke();
    doc
      .fontSize(12)
      .fill("#000")
      .text("นามลูกค้า", 40, 190, { width: 125, align: "left" });
    doc
      .fontSize(8)
      .fill("#000")
      .text("Name", 40, 202, { width: 125, align: "left" });
    doc
      .fontSize(12)
      .fill("#000")
      .text(`${data[0].name}`, 100, 190, { width: 240, align: "left" });

    doc
      .fontSize(12)
      .fill("#000")
      .text("ที่อยู่", 40, 210, { width: 125, align: "left" });
    doc
      .fontSize(8)
      .fill("#000")
      .text("Address", 40, 222, { width: 125, align: "left" });
    doc
      .fontSize(12)
      .fill("#000")
      .text(`${data[0].address1}`, 100, 210, { width: 280, align: "left" });

    doc
      .fontSize(12)
      .fill("#000")
      .text("เลขประจำตัวปผู้เสียภาษี", 40, 245, { width: 125, align: "left" });
    doc
      .fontSize(8)
      .fill("#000")
      .text("Tax ID.", 40, 257, { width: 125, align: "left" });
    doc
      .fontSize(12)
      .fill("#000")
      .text(`${data[0].tax}`, 140, 245, { width: 90, align: "left" });

    doc.roundedRect(240, 245, 10, 10, 0).lineWidth(0.5).stroke();
    doc
      .fontSize(12)
      .fill("#000")
      .text("สำนักงานใหญ่", 260, 245, { width: 125, align: "left" });
    doc
      .fontSize(16)
      .fill("#FF0000")
      .text(`${data[0].branch[0].main}`, 242, 240, {
        width: 30,
        align: "left",
      });

    doc.roundedRect(320, 245, 10, 10, 0).lineWidth(0.5).stroke();
    doc
      .fontSize(12)
      .fill("#000")
      .text("สาขาที่___", 340, 245, { width: 125, align: "left" });
    doc
      .fontSize(16)
      .fill("#FF0000")
      .text(`${data[0].branch[0].sub}`, 322, 240, { width: 30, align: "left" });
    doc
      .fontSize(16)
      .fill("#FF0000")
      .text(`${data[0].branch[0].subno}`, 365, 242, {
        width: 30,
        align: "left",
      });

    doc.roundedRect(415, 185, 160, 85, 3).lineWidth(0.5).stroke();
    doc
      .fontSize(12)
      .fill("#000")
      .text("เลขที่", 420, 190, { width: 125, align: "left" });
    doc
      .fontSize(8)
      .fill("#000")
      .text("No.", 420, 202, { width: 125, align: "left" });
    doc
      .fontSize(12)
      .fill("#FF0000")
      .text(`${data[0].no}`, 480, 190, { width: 125, align: "left" });

    doc
      .fontSize(12)
      .fill("#000")
      .text("ที่อยู่", 420, 210, { width: 125, align: "left" });
    doc
      .fontSize(8)
      .fill("#000")
      .text("Address", 420, 222, { width: 125, align: "left" });
    doc
      .fontSize(12)
      .fill("#000")
      .text(`${data[0].date}`, 480, 210, { width: 125, align: "left" });

    doc
      .fontSize(12)
      .fill("#000")
      .text("เครดิต", 420, 245, { width: 125, align: "left" });
    doc
      .fontSize(8)
      .fill("#000")
      .text("Credit", 420, 257, { width: 125, align: "left" });
    doc
      .fontSize(12)
      .fill("#000")
      .text(`${data[0].credit}`, 480, 245, { width: 90, align: "left" });

    // Add a table of the invoice items
    const tableTop: number = 280;
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
    doc.rect(tableLeft, tableTop, tableWidth, headerHeight).fill("#DD6400");
    doc
      .font("./src/fonts/THSarabun Bold.ttf")
      .fontSize(11)
      .fill("#fff")
      .text("รหัสสินค้า\nCode", tableLeft, tableTop + 1, {
        width: col1Width,
        align: "center",
      });
    doc
      .font("./src/fonts/THSarabun Bold.ttf")
      .fontSize(11)
      .fill("#fff")
      .text("รายการ\nDescription", tableLeft + col1Width, tableTop + 1, {
        width: col2Width,
        align: "center",
      });
    doc
      .font("./src/fonts/THSarabun Bold.ttf")
      .fontSize(11)
      .fill("#fff")
      .text(
        "จำนวน\nQuantity",
        tableLeft + col1Width + col2Width,
        tableTop + 1,
        { width: col3Width, align: "center" }
      );
    doc
      .font("./src/fonts/THSarabun Bold.ttf")
      .fontSize(11)
      .fill("#fff")
      .text(
        "ราคา\nPrice",
        tableLeft + col1Width + col2Width + col3Width,
        tableTop + 1,
        { width: col4Width, align: "center" }
      );
    doc
      .font("./src/fonts/THSarabun Bold.ttf")
      .fontSize(11)
      .fill("#fff")
      .text(
        "จำนวนเงิน\nAmount",
        tableLeft + col1Width + col2Width + col3Width + col4Width,
        tableTop + 1,
        { width: col5Width, align: "center" }
      );
    doc.font("./src/fonts/THSarabun.ttf");

    const startX = 35;
    const startY = 305;
    const cellWidth = 100;
    const cellHeight = 15;
    const rowCount = 22;
    const columnCount = 5.4;

    const cellamout = 70;

    doc
      .moveTo(startX, tableTop + 0 * headerHeight)
      .lineTo(startX + columnCount * cellWidth, tableTop + 0 * headerHeight)
      .stroke();

    for (let i = 0; i <= rowCount; i++) {
      doc
        .moveTo(startX, startY + i * cellHeight)
        .lineTo(startX + columnCount * cellWidth, startY + i * cellHeight)
        .stroke();
    }

    doc
      .moveTo(
        startX + col1Width + col2Width + col3Width,
        startY + rowCount * cellHeight + cellamout
      )
      .lineTo(
        startX + columnCount * cellWidth,
        startY + rowCount * cellHeight + cellamout
      )
      .stroke();

    doc
      .moveTo(startX, tableTop)
      .lineTo(startX, startY + rowCount * cellHeight)
      .stroke();
    doc
      .moveTo(startX + col1Width, tableTop)
      .lineTo(startX + col1Width, startY + rowCount * cellHeight)
      .stroke();
    doc
      .moveTo(startX + col1Width + col2Width, tableTop)
      .lineTo(startX + col1Width + col2Width, startY + rowCount * cellHeight)
      .stroke();
    doc
      .moveTo(startX + col1Width + col2Width + col3Width, tableTop)
      .lineTo(
        startX + col1Width + col2Width + col3Width,
        startY + rowCount * cellHeight + cellamout
      )
      .stroke();
    doc
      .moveTo(startX + col1Width + col2Width + col3Width + col4Width, tableTop)
      .lineTo(
        startX + col1Width + col2Width + col3Width + col4Width,
        startY + rowCount * cellHeight + cellamout
      )
      .stroke();
    doc
      .moveTo(
        startX + col1Width + col2Width + col3Width + col4Width + col5Width,
        tableTop
      )
      .lineTo(
        startX + col1Width + col2Width + col3Width + col4Width + col5Width,
        startY + rowCount * cellHeight + cellamout
      )
      .stroke();

    // Draw the table rows
    let y = tableTop + headerHeight;
    data[0].items.forEach((item: any) => {
      doc
        .fontSize(14)
        .fill("#000")
        .text(item.code, tableLeft - 10, y, {
          width: col1Width,
          align: "right",
        });
      doc
        .fontSize(14)
        .fill("#000")
        .text(item.description.toString(), tableLeft + 10 + col1Width, y, {
          width: col2Width,
          align: "left",
        });
      doc
        .fontSize(14)
        .fill("#000")
        .text(
          item.quantity.toFixed(2),
          tableLeft - 10 + col1Width + col2Width,
          y,
          { width: col3Width, align: "right" }
        );
      doc
        .fontSize(14)
        .fill("#000")
        .text(
          item.price.toFixed(2),
          tableLeft - 10 + col1Width + col2Width + col3Width,
          y,
          { width: col4Width, align: "right" }
        );
      doc
        .fontSize(14)
        .fill("#000")
        .text(
          item.amount.toFixed(2),
          tableLeft - 10 + col1Width + col2Width + col3Width + col4Width,
          y,
          { width: col5Width, align: "right" }
        );
      y += rowHeight - 15;
    });

    const yamout = tableTop + headerHeight + 13;

    // Add note
    doc
      .fontSize(8)
      .text(`หมายเหตุ :`, tableLeft + 10, yamout + (15 * rowCount - 10), {
        width: col1Width + col2Width + col3Width,
        align: "left",
      });
    doc
      .fontSize(8)
      .text(
        `1.กรณีชำระเงินโดยเช็คกรุณาสั่งจ่ายเช็คขีดคร่อมในนาม "${data[0].invoiceName}" เท่านั้น`,
        tableLeft + 10,
        yamout + (16 * rowCount - 20),
        { width: col1Width + col2Width + col3Width, align: "left" }
      );
    doc
      .fontSize(8)
      .text(
        `2.บริษัทฯ ขอสงวนสิทธิ์ในการแก้ไขใบกำกับภาษีภายใน 7 วัน นับจากวันที่ระบุในใบกำกับภาษี (ผิด ตก ยกเว้น E. & OE.)`,
        tableLeft + 10,
        yamout + (17 * rowCount - 30),
        { width: col1Width + col2Width + col3Width, align: "left" }
      );

    doc
      .roundedRect(
        tableLeft,
        yamout + (18.5 * rowCount - 50),
        col1Width + col2Width + col3Width - 10,
        30,
        3
      )
      .lineWidth(0.5)
      .stroke();
    doc
      .fontSize(12)
      .text(`ตัวอักษร`, tableLeft, yamout + (19 * rowCount - 50), {
        width: 90,
        align: "center",
      });
    doc
      .fontSize(12)
      .text(
        `(${data[0].totalthai})`,
        tableLeft + 120,
        yamout + (19 * rowCount - 50),
        { width: 90, align: "center" }
      );

    // Add the total amount due
    doc
      .fontSize(10)
      .text(
        `รวมเงิน (Total)`,
        tableLeft + 10 + col1Width + col2Width + col3Width,
        yamout + (15 * rowCount - 10),
        { width: col4Width, align: "left" }
      );
    doc
      .fontSize(10)
      .text(
        `${data[0].total.toFixed(2)}`,
        tableLeft - 10 + col1Width + col2Width + col3Width + col4Width,
        yamout + (15 * rowCount - 10),
        { width: col5Width, align: "right" }
      );
    doc
      .fontSize(10)
      .text(
        `สินค้ายกเว้นภาษี         7%`,
        tableLeft + 10 + col1Width + col2Width + col3Width,
        yamout + (16 * rowCount - 20),
        { width: col4Width, align: "left" }
      );
    doc
      .fontSize(10)
      .text(
        `${data[0].total.toFixed(2)}`,
        tableLeft - 10 + col1Width + col2Width + col3Width + col4Width,
        yamout + (16 * rowCount - 20),
        { width: col5Width, align: "right" }
      );
    doc
      .fontSize(10)
      .text(
        `รวมเงินทั้งสิ้น (Subtotal)`,
        tableLeft + 10 + col1Width + col2Width + col3Width,
        yamout + (17 * rowCount - 30),
        { width: col4Width, align: "left" }
      );
    doc
      .fontSize(10)
      .text(
        `${data[0].total.toFixed(2)}`,
        tableLeft - 10 + col1Width + col2Width + col3Width + col4Width,
        yamout + (17 * rowCount - 30),
        { width: col5Width, align: "right" }
      );
    doc
      .fontSize(10)
      .text(
        `ภาษีมูลค่าเพิ่ม (Vat)     7%`,
        tableLeft + 10 + col1Width + col2Width + col3Width,
        yamout + (18 * rowCount - 40),
        { width: col4Width, align: "left" }
      );
    doc
      .fontSize(10)
      .text(
        `${data[0].total.toFixed(2)}`,
        tableLeft - 10 + col1Width + col2Width + col3Width + col4Width,
        yamout + (18 * rowCount - 40),
        { width: col5Width, align: "right" }
      );
    doc
      .fontSize(10)
      .text(
        `ยอดเงินสุทธิ (Not total)`,
        tableLeft + 10 + col1Width + col2Width + col3Width,
        yamout + (19 * rowCount - 50),
        { width: col4Width, align: "left" }
      );
    doc
      .fontSize(10)
      .text(
        `${data[0].total.toFixed(2)}`,
        tableLeft - 10 + col1Width + col2Width + col3Width + col4Width,
        yamout + (19 * rowCount - 50),
        { width: col5Width, align: "right" }
      );

    // Add the footer reciever
    doc
      .roundedRect(tableLeft, yamout + (20.2 * rowCount - 50), 240, 90, 3)
      .lineWidth(0.5)
      .stroke();
    doc
      .fontSize(10)
      .text(
        `ได้รับสินค้าตามรายการข้างบนไว้เรียบร้อยแล้ว`,
        tableLeft,
        yamout + (20.5 * rowCount - 50),
        { width: 240, align: "center" }
      );
    doc
      .fontSize(10)
      .text(`ผู้รับสินค้า`, tableLeft + 10, yamout + (21.5 * rowCount - 50), {
        width: 210,
        align: "left",
      });
    doc
      .fontSize(10)
      .text(
        `__________________________________________________`,
        tableLeft + 50,
        yamout + (21.5 * rowCount - 50),
        { width: 190, align: "left" }
      );
    doc
      .fontSize(10)
      .text(`วันที่`, tableLeft + 10, yamout + (22.5 * rowCount - 50), {
        width: 210,
        align: "left",
      });
    doc
      .fontSize(10)
      .text(
        `__________________________________________________`,
        tableLeft + 50,
        yamout + (22.5 * rowCount - 50),
        { width: 190, align: "left" }
      );

    // Add the footer sender
    doc
      .roundedRect(tableLeft + 245, yamout + (20.2 * rowCount - 50), 145, 90, 3)
      .lineWidth(0.5)
      .stroke();
    doc
      .fontSize(10)
      .text(
        `ผู้ส่งสินค้า`,
        tableLeft + 245 + 10,
        yamout + (21.5 * rowCount - 50),
        { width: 135, align: "left" }
      );
    doc
      .fontSize(10)
      .text(
        `________________________`,
        tableLeft + 245 + 50,
        yamout + (21.5 * rowCount - 50),
        { width: 95, align: "left" }
      );
    doc
      .fontSize(10)
      .text(`วันที่`, tableLeft + 245 + 10, yamout + (22.5 * rowCount - 50), {
        width: 135,
        align: "left",
      });
    doc
      .fontSize(10)
      .text(
        `________________________`,
        tableLeft + 245 + 50,
        yamout + (22.5 * rowCount - 50),
        { width: 95, align: "left" }
      );

    // Add the footer conmpany
    doc
      .roundedRect(tableLeft + 395, yamout + (20.2 * rowCount - 50), 145, 90, 3)
      .lineWidth(0.5)
      .stroke();
    doc
      .fontSize(10)
      .text(
        `ในนาม ${data[0].invoiceName}`,
        tableLeft + 395,
        yamout + (20.5 * rowCount - 50),
        { width: 145, align: "center" }
      );
    doc
      .fontSize(10)
      .text(
        `____________________________________`,
        tableLeft + 395 + 10,
        yamout + (21.5 * rowCount - 50),
        { width: 135, align: "left" }
      );
    doc
      .fontSize(10)
      .text(
        `____________________________________`,
        tableLeft + 395 + 10,
        yamout + (22.5 * rowCount - 50),
        { width: 135, align: "left" }
      );
    doc
      .fontSize(10)
      .text(
        `ผู้มีอำนาจลงนาม`,
        tableLeft + 395 + 10,
        yamout + (23.2 * rowCount - 50),
        { width: 135, align: "center" }
      );

    // create PDF to SERVER
    const nameoffile = await Create_filename(dataInvoices.company);
    const datetime = await Create_filename(Date.now().toString());

    const steam = fs.createWriteStream(
      `./src/pdf/${nameoffile}-${datetime}.pdf`
    );
    doc.pipe(steam);

    doc.end();

    return `Success export file ${
      dataInvoices.company
    }-${new Date().toString()}.pdf`;
  } catch (error) {
    throw error;
  }
};

const Create_filename = async (companyname: string) => {
  const result = companyname.replace(" ", "-");

  return result;
};

const Creacte_invoice = async (userID: string) => {
  try {
    const user: any = await User.findById(userID);

    return await exportpdf(user);
  } catch (error) {
    throw error;
  }
};

export { Creacte_invoice };
