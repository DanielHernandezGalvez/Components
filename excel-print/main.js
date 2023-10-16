// npm i --save https://cdn.sheetjs.com/xlsx-0.19.3/xlsx-0.19.3.tgz

import XLSX from "xlsx";

const handleExportToExcel = () => {
  // Función para exportar la tabla como un archivo Excel
  const table = document.getElementById("my-table"); // Se obtiene la referencia al elemento HTML que contiene la tabla que queremos exportar

  let workbook = XLSX.utils.table_to_book(table); // Se utiliza la biblioteca XLSX para convertir la tabla HTML a un libro de Excel
  // Nota: La variable 'workbook' es un objeto de libro de Excel que contiene todas las hojas y celdas del libro.

  XLSX.writeFile(workbook, `archicvo.xlsx`); // Se utiliza la función 'writeFile' de XLSX para descargar el archivo Excel con el nombre "archivo.xlsx"
};