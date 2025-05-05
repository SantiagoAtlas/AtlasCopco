const xlsx = require("xlsx");
const fs = require("fs");
const path = require("path");

// Cargar el archivo Excel
const workbook = xlsx.readFile("C:/Users/a00592683/my-website/Standard.xlsx");
const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];

// Convertir a JSON
const jsonData = xlsx.utils.sheet_to_json(sheet, { header: 1 }); // `header: 1` devuelve un array de arrays

// Convertir a tabla Markdown
let markdown = "";

if (jsonData.length > 0) {
    const headers = jsonData[0];
    markdown += "| " + headers.join(" | ") + " |\n";
    markdown += "| " + headers.map(() => "---").join(" | ") + " |\n";

    for (let i = 1; i < jsonData.length; i++) {
        const row = jsonData[i].map(cell => (cell !== undefined ? String(cell).replace(/\|/g, "\\|") : ""));
        markdown += "| " + row.join(" | ") + " |\n";
    }
}

// Guardar el resultado en un archivo .md
const outputPath = path.join(__dirname, "../docs/asc/fields.md");
fs.writeFileSync(outputPath, markdown, "utf8");

console.log("✅ Markdown generado correctamente en: " + outputPath);
