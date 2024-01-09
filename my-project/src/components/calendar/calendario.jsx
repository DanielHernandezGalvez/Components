import React, { useState, useEffect } from "react";
import calendarioActividades from "./enero";

export default function Calendario() {
  const [day, setDay] = useState(1);
  const [selectedTaller, setSelectedTaller] = useState("");
  const [selectedHorario, setSelectedHorario] = useState("");

useEffect(() => {
  // console.log(calendarioActividades.cine[1])

}, [])


  const handleClick = (value) => {
    setDay(value);
    setSelectedTaller(""); // Limpiar el taller seleccionado al cambiar de día
    setSelectedHorario(""); // Limpiar el horario seleccionado al cambiar de día
    console.log(value);
  };

  const handleTallerChange = (event) => {
    const nuevoTaller = event.target.value;
    console.log('Categoría seleccionada:', nuevoTaller);
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
    // Verificar si la categoría seleccionada existe
    if (calendarioActividades.enero2024.hasOwnProperty(selectedTaller)) {
      const talleresCategoria = calendarioActividades.enero2024[selectedTaller];
      
      // Verificar si los talleres son un array
      if (Array.isArray(talleresCategoria)) {
        const talleresDelDia = talleresCategoria.filter(taller => {
          return taller.fecha.includes(`2024/01/${day}`);
        });
  
        console.log('Talleres del día:', talleresDelDia);
        
        // Obtener eventos de los talleres filtrados
        return talleresDelDia.map(taller => taller.evento);
      }
    }
  
    return [];
  };
  
  const obtenerHorariosDelTaller = () => {
    // Obtener los horarios del taller seleccionado
    const talleresCategoria = calendarioActividades.enero2024[selectedTaller];
  
    if (Array.isArray(talleresCategoria)) {
      return talleresCategoria
        .filter((taller) => taller.fecha.includes(`2024/01/${day}`))
        .map((taller) => taller.horario);
    }
  
    return [];
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
        <label
          className="bg-[--brown] pe-6 text-white p-2 w-[200px]"
          htmlFor="horarios"
        >
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
      {/* {selectedHorario === "- -" && selectedTaller == "- -" ? (
        <p>Nada</p>
      ) : (
        <p>
          {day}, {selectedTaller} y {selectedHorario}
        </p>
      )} */}
    </div>
  );
}
