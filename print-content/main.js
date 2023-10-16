const handlePrintTable = () => {
    // Función para imprimir la tabla
    const table = document.getElementById("my-table"); // Se obtiene la referencia al elemento HTML que contiene la tabla que queremos imprimir
  
    const printContent = table.outerHTML; // Se obtiene el HTML de la tabla que queremos imprimir
    const originalContent = document.body.innerHTML; // Se guarda el HTML original del cuerpo del documento en una variable
  
    document.body.innerHTML = printContent; // Se reemplaza el HTML del cuerpo del documento con el HTML de la tabla que queremos imprimir
    window.print(); // Se abre la ventana de impresión del navegador
  
    document.body.innerHTML = originalContent; // Se restaura el HTML original del cuerpo del documento
  };