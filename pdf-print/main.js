// npm install jspdf html2canvas

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const handleExportToPDF = () => {
  // Función para exportar la tabla como un archivo PDF
  const input = document.getElementById("my-table"); // Se obtiene la referencia al elemento HTML que contiene la tabla que queremos exportar

  html2canvas(input).then((canvas) => {
    // Se utiliza la biblioteca html2canvas para crear un objeto canvas a partir de la tabla HTML
    const imgData = canvas.toDataURL("image/png"); // Se obtiene la URL de la imagen en formato PNG que representa el contenido de la tabla

    const imgWidth = 210; // Ancho de la imagen en milímetros
    const imgHeight = (canvas.height * imgWidth) / canvas.width; // Se calcula la altura de la imagen en base al ancho y proporciones de la tabla

    const pdf = new jsPDF("p", "mm", "a4"); // Se crea un nuevo objeto jsPDF para generar el archivo PDF
    pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight); // Se agrega la imagen en formato PNG al documento PDF
    pdf.save("table.pdf"); // Se descarga el documento PDF con el nombre "table.pdf"
  });
};