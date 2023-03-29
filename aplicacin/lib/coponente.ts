const fecha = new Date();
const dia: string | number = fecha.getDate();
const mes: string | number = fecha.getMonth() + 1;
const anio: number = fecha.getFullYear();

let diaStr: string | number = dia;
let mesStr: string | number = mes;
if (dia < 10) {
  diaStr = "0" + dia;
}
if (mes < 10) {
  mesStr = "0" + mes;
}

const fechaCorta: string = `${diaStr}-${mesStr}-${anio}`;

interface DataTableOptions {
  lengthMenu: number[] | Array<Array<number | string>>;
  pageLength: number;
  destroy: boolean;
  language: {
    lengthMenu: string;
    zeroRecords: string;
    info: string;
    infoEmpty: string;
    infoFiltered: string;
    search: string;
    loadingRecords: string;
    paginate: {
      first: string;
      last: string;
      next: string;
      previous: string;
    };
  };
  dom: string;
  buttons: {
    extend: string;
    text: string;
    title: string;
    className: string;
    visibility: boolean;
    filename: string;
  }[];
  scrollY: string;
  scrollCollapse: boolean;
  paging: boolean;
}

const dataTableOptions: DataTableOptions = {
  lengthMenu: [10, 20, 50],
  pageLength: 50,
  destroy: true,
  language: {
    lengthMenu: "Mostrar _MENU_ registros por página",
    zeroRecords: "Ningún usuario encontrado",
    info: "Mostrando de _START_ a _END_ de un total de _TOTAL_ registros",
    infoEmpty: "Ningún usuario encontrado",
    infoFiltered: "(filtrados desde _MAX_ registros totales)",
    search: "Buscar",
    loadingRecords: "Cargando...",
    paginate: {
      first: "Primero",
      last: "Último",
      next: "Siguiente",
      previous: "Anterior",
    },
  },
  dom: "Bfrtip",
  buttons: [
    {
      extend: "excel",
      text: "Ex",
      title: "excel",
      className: "rounded-circle",
      visibility: false,
      filename: `${fechaCorta}_ReporteChecador`,
    },
  ],
  scrollY: "50vh",
  scrollCollapse: true,
  paging: false,
};


$("#excelbtn").click(function () {
  table.buttons(".buttons-excel").trigger();
});

let GlobalData: any[] = [];

const initDataTable = async (): Promise<void> => {
  if (dataTableInicialized) {
    dataTable.destroy();
  }
  if ((document.getElementById("inputSucursal") as HTMLInputElement).value === "NA") {
    await getDataByPeriodo();
  } else {
    await getDataByPeriodoSucursal();
  }
  $("#container-floating").show();

  dataTable = $("#tableND").DataTable(dataTableOptions);
  (document.getElementById("tabla") as HTMLElement).hidden = false;

  dataTable.buttons().container().appendTo($("#excel-container"));

  dataTableInicialized = true;
};
  
   import React from "react";

 const PrintLabels = () => {
   const printLabels = () => {
    Este botón será un checkbox que indique con un boolean si se ejecuta la función o no
    if (botonDeImpresiones) {
                Obtener el contenido de la etiqueta
       const labelContent = document.getElementById("etiqueta").innerHTML;

       // Crear un objeto para la ventana de impresión
       const printWindow = window.open("", "Etiquetas");

       // Escribir el contenido de la etiqueta en la ventana de impresión
       printWindow.document.write(labelContent);

       // Imprimir la etiqueta
       printWindow.print();

       // Cerrar la ventana de impresión
       printWindow.close();

       // Si se detiene la ejecución se imprime por consola
     } else {
       console.log("impresión iterrumpida");
     }
   };
   return (
     <div>
       <div
         id='etiqueta'
         style={{ width: "100px", height: "50px", border: "1px solid black" }}
       >
         {/* Se crea un componente que importe los datos de la etiqueta que te dió Diego */}
         <TablaEtiquetas />
       </div>
       <button onClick={printLabels}>Imprimir etiquetas</button>
     </div>
   );
 };

 export default PrintLabels;












