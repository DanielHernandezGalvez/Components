import React, { useState } from "react";
import json from "./enero.json";

export default function Calendario() {
  const [day, setDay] = useState(0);
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
    const dayNumber = parseInt(day, 10); // Convertir day a número
  
    const talleresDelDia = json.actividades.filter((taller) => {
      // Usar dayNumber en la comparación
      return taller.fecha.includes(`2024/01/${dayNumber}`);
    });
    
    // Verificar si hay talleres para el día seleccionado
    if (talleresDelDia.length > 0 ) {
      // Obtener eventos de los talleres filtrados
      const eventosTalleres = talleresDelDia.map((taller) => taller.tipo);
  
      // Eliminar duplicados
      const talleresUnicos = [...new Set(eventosTalleres)];
  
      return talleresUnicos;
    } else {
      // Si no hay talleres, mostrar solo la opción '- -'
      return ["- -"];
    }
  };
  
  const obtenerHorariosDelTaller = () => {
    // Modifica esta función para usar el nuevo JSON
    return json.actividades
      .filter((taller) => taller.fecha.includes(`2024/01/${day}`))
      .map((taller) => taller.horario);
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
      {selectedHorario === "- -" && selectedTaller == "- -" ? (
        <p>Nada</p>
      ) : (
        <p>
          {day}, {selectedTaller} y {selectedHorario}
        </p>
      )}
    </div>
  );
}
