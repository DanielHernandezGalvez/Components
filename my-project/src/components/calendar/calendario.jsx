// import React, { useState  } from "react";
// import calendarioActividades from "./enero";

// export default function Calendario() {
//   const [day, setDay] = useState(1);

//   const handleClick = (value) => {
//     setDay(value);
//     console.log(value);
//   };

//   const renderCells = () => {
//     const cells = [];

//     for (let i = 0; i < 5; i++) {
//       const row = [];
//       for (let j = 0; j < 7; j++) {
//         const dayCounter = i * 7 + j + 1;

//         if (dayCounter <= 31) {
//           // Renderizar celdas con contenido hasta 31
//           row.push(
//             <td
//               key={dayCounter}
//               onClick={() => handleClick(dayCounter)}
//               className="border border-gray-500 p-1 cursor-pointer"
//             >
//               {dayCounter}
//             </td>
//           );
//         } else {
//           // Renderizar celda sin contenido después de 31
//           row.push(
//             <td
//               key={dayCounter}
//               className="border border-gray-500 p-1 cursor-pointer"
//             ></td>
//           );
//         }
//       }
//       cells.push(<tr key={i}>{row}</tr>);
//     }

//     return cells;
//   };

//   return (
//     <div>
//       <h1 className="text-4xl text-center text-gray-500">Calendario</h1>
//       <table className="border-collapse border border-gray-500">
//         <thead>
//           <tr>
//             <th className="border border-gray-500 p-1">Lun</th>
//             <th className="border border-gray-500 p-1">Mar</th>
//             <th className="border border-gray-500 p-1">Miér</th>
//             <th className="border border-gray-500 p-1">Jue</th>
//             <th className="border border-gray-500 p-1">Vier</th>
//             <th className="border border-gray-500 p-1">Sáb</th>
//             <th className="border border-gray-500 p-1">Dom</th>
//           </tr>
//         </thead>
//         <tbody>{renderCells()}</tbody>
//       </table>
//     </div>
//   );
// }

import React, { useState } from "react";
import calendarioActividades from "./enero";

export default function Calendario() {
  const [day, setDay] = useState(1);
  const [selectedTaller, setSelectedTaller] = useState("");
  const [selectedHorario, setSelectedHorario] = useState("");

  const handleClick = (value) => {
    setDay(value);
    setSelectedTaller(""); // Limpiar el taller seleccionado al cambiar de día
    setSelectedHorario(""); // Limpiar el horario seleccionado al cambiar de día
    console.log(value);
  };

  const handleTallerChange = (event) => {
    const nuevoTaller = event.target.value;
    setSelectedTaller(nuevoTaller);
    setSelectedHorario(""); // Limpiar el horario seleccionado al cambiar de taller
  };

  const handleHorarioChange = (event) => {
    const nuevoHorario = event.target.value;
    setSelectedHorario(nuevoHorario);
  };

  const renderCells = () => {
    const cells = [];

    for (let i = 0; i < 5; i++) {
      const row = [];
      for (let j = 0; j < 7; j++) {
        const dayCounter = i * 7 + j + 1;

        if (dayCounter <= 31) {
          // Renderizar celdas con contenido hasta 31
          row.push(
            <td
              key={dayCounter}
              onClick={() => handleClick(dayCounter)}
              className={`border border-[--brown] p-1 cursor-pointer ${
                dayCounter === day ? "bg-gray-300" : ""
              }`}
            >
              {dayCounter}
            </td>
          );
        } else {
          // Renderizar celda sin contenido después de 31
          row.push(
            <td
              key={dayCounter}
              className="border border-[--brown] p-1 cursor-pointer"
            ></td>
          );
        }
      }
      cells.push(<tr key={i}>{row}</tr>);
    }

    return cells;
  };

  const obtenerTalleresDelDia = () => {
    // Obtener los talleres del día seleccionado
    const talleresDelDia = calendarioActividades.enero2024.cine
      .concat(calendarioActividades.enero2024.power)
      .concat(calendarioActividades.enero2024.ejerciciosFuncionales)
      .concat(calendarioActividades.enero2024.defensaPersonal)
      .concat(calendarioActividades.enero2024.yoga)
      .concat(calendarioActividades.enero2024.desarrolloBienEstarPersonal)
      .concat(calendarioActividades.enero2024.tertuliasFilosofia)
      .concat(calendarioActividades.enero2024.pintura)
      .concat(calendarioActividades.enero2024.catasVino)
      .concat(calendarioActividades.enero2024.estiloPersonalDamas)
      .concat(calendarioActividades.enero2024.estiloPersonalCaballeros)
      .concat(calendarioActividades.enero2024.fengShui)
      .concat(calendarioActividades.enero2024.finanzasPersonales)
      .concat(calendarioActividades.enero2024.historia)
      .concat(calendarioActividades.enero2024.historiaArte)
      .concat(calendarioActividades.enero2024.pilatesBarreBajaIntensidad);

    return talleresDelDia.map((taller) => taller.evento);
  };

  const obtenerHorariosDelTaller = () => {
    // Obtener los horarios del taller seleccionado
    const talleresDelDia = calendarioActividades.enero2024.cine
      .concat(calendarioActividades.enero2024.power)
      .concat(calendarioActividades.enero2024.ejerciciosFuncionales)
      .concat(calendarioActividades.enero2024.defensaPersonal)
      .concat(calendarioActividades.enero2024.yoga)
      .concat(calendarioActividades.enero2024.desarrolloBienEstarPersonal)
      .concat(calendarioActividades.enero2024.tertuliasFilosofia)
      .concat(calendarioActividades.enero2024.pintura)
      .concat(calendarioActividades.enero2024.catasVino)
      .concat(calendarioActividades.enero2024.estiloPersonalDamas)
      .concat(calendarioActividades.enero2024.estiloPersonalCaballeros)
      .concat(calendarioActividades.enero2024.fengShui)
      .concat(calendarioActividades.enero2024.finanzasPersonales)
      .concat(calendarioActividades.enero2024.historia)
      .concat(calendarioActividades.enero2024.historiaArte)
      .concat(calendarioActividades.enero2024.pilatesBarreBajaIntensidad);

    const horariosDelTaller = talleresDelDia
      .filter((taller) => taller.evento === selectedTaller)
      .map((taller) => taller.horario);

    return horariosDelTaller;
  };

  return (
    <div>
      <h1 className="text-4xl text-center text-gray-500">Calendario</h1>
      <div className="my-5 text-xl max-w-[500px] px-5">
        <label className="bg-[--brown] text-white p-2 pe-4" htmlFor="talleres">
          Selecciona un taller:
        </label>
        <select
          className="w-[200px] bg-[--beige] p-2 text-[--brown] px-5"
          id="talleres"
          value={selectedTaller}
          onChange={handleTallerChange}
        >
          <option value="" disabled>
            - -
          </option>
          {obtenerTalleresDelDia().map((taller, index) => (
            <option key={index} value={taller}>
              {taller}
            </option>
          ))}
        </select>
      </div>

      <div className="my-5 text-xl max-w-[500px] px-5">
        <label className="bg-[--brown] pe-6 text-white p-2 w-[200px]" htmlFor="horarios">
          Seleccione la Hora:
        </label>
        <select
          className="w-[200px] bg-[--beige] p-2 text-[--brown] px-5"
          id="horarios"
          value={selectedHorario}
          onChange={handleHorarioChange}
        >
          <option value="" disabled>
            - -
          </option>
          {obtenerHorariosDelTaller().map((horario, index) => (
            <option key={index} value={horario}>
              {horario}
            </option>
          ))}
        </select>
      </div>
      <table
        className="border-collapse font-bold text-[--brown] 
        table-auto border border-[--brown] bg-[--yellow]
        border-gray-500 m-5"
      >
        <thead className="bg-[--brown] text-white">
          <tr>
            <th className="border border-[--brown] p-1">Lun</th>
            <th className="border border-[--brown] p-1">Mar</th>
            <th className="border border-[--brown] p-1">Miér</th>
            <th className="border border-[--brown] p-1">Jue</th>
            <th className="border border-[--brown] p-1">Vier</th>
            <th className="border border-[--brown] p-1">Sáb</th>
            <th className="border border-[--brown] p-1">Dom</th>
          </tr>
        </thead>
        <tbody>{renderCells()}</tbody>
      </table>
    </div>
  );
}
