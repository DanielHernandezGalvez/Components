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
    console.log("Categoría seleccionada:", nuevoTaller);
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
              className={`border border-[--brown] p-3 cursor-pointer ${
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
    const dayNumber = parseInt(day, 10);

    const talleresDelDia = json.actividades.filter((taller) => {
      const fechaTaller = new Date(taller.fecha);
      const fechaComparacion = new Date(`2024/01/${dayNumber}`);

      // Compara las fechas eliminando las horas, minutos, segundos y milisegundos
      fechaTaller.setHours(0, 0, 0, 0);
      fechaComparacion.setHours(0, 0, 0, 0);

      return fechaTaller.getTime() === fechaComparacion.getTime();
    });

    console.log("Talleres del día:", talleresDelDia);

    if (talleresDelDia.length > 0) {
      const eventosTalleres = talleresDelDia.map((taller) => taller.tipo);
      const talleresUnicos = [...new Set(eventosTalleres)];
      return talleresUnicos;
    } else {
      return ["- -"];
    }
  };

  const obtenerHorariosDelTaller = () => {
    const talleresDelDia = json.actividades.filter((taller) => {
      const fechaTaller = new Date(taller.fecha);
      const fechaComparacion = new Date(`2024/01/${day}`);

      fechaTaller.setHours(0, 0, 0, 0);
      fechaComparacion.setHours(0, 0, 0, 0);

      return (
        fechaTaller.getTime() === fechaComparacion.getTime() &&
        taller.tipo === selectedTaller
      );
    });

    if (talleresDelDia.length > 0) {
      const horariosTaller = talleresDelDia.reduce((horarios, taller) => {
        const horarioCompleto = taller.horario.trim();

        // Verificar si el horario completo ya existe en la lista antes de agregarlo
        if (!horarios.includes(horarioCompleto)) {
          horarios.push(horarioCompleto);
        }

        return horarios;
      }, []);

      return horariosTaller.length > 0 ? horariosTaller : ["- -"];
    } else {
      return ["- -"];
    }
  };

  return (
    <div>
    
      <section className="flex flex-wrap items-center justify-around mt-6">

      <table
        className="border-collapse font-bold text-[--brown] 
        table-auto border border-[--brown] bg-[--yellow]
        border-gray-500 m-5 "
      >
        <thead className="bg-[--brown] text-white">

          <tr>
            <th className="border border-[--brown] lg:p-2">Lun</th>
            <th className="border border-[--brown] lg:p-2">Mar</th>
            <th className="border border-[--brown] lg:p-2">Miér</th>
            <th className="border border-[--brown] lg:p-2">Jue</th>
            <th className="border border-[--brown] lg:p-2">Vier</th>
            <th className="border border-[--brown] lg:p-2">Sáb</th>
            <th className="border border-[--brown] lg:p-1">Dom</th>
          </tr>
        </thead>
        <tbody>{renderCells()}</tbody>
      </table>
      
      <div className="flex justify-center items-center flex-col">
      <div className="my-5 text-xl max-w-[500px] "> {/* aqiu habia px-5 */ }
        <label className="bg-[--brown] text-white p-2 " htmlFor="talleres">
          Seleccione un taller:
        </label>
        <select
          className="w-[200px] bg-[--yellow] p-2 text-[--brown] " 
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

      <div className="my-5 text-xl max-w-[500px] ">  {/* aqiu habia px-5 */ }
        <label
          className="bg-[--brown] pe-6 text-white p-2 w-[200px]"
          htmlFor="horarios"
        >
          Seleccione la Hora:
        </label>
        <select
          className="w-[200px] bg-[--yellow] p-2 text-[--brown] "
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

      <a
        href={`https://wa.me/523313022587?text=Hola, me gustaría inscribirme al
         taller ${selectedTaller} del ${day} de enero en el horario 
         de ${selectedHorario} hrs.`}
        target="_blank"
        className="bg-[--yellow] px-4 py-1 text-[--brown] m-5 mt-5 text-xl 
          font-bold transition hover:bg-[--brown] hover:text-white flex 
          justify-evenly items-center max-w-[300px]"
      >
        <img width={35} className="mx-5" src="https://cdn-icons-png.flaticon.com/128/733/733585.png" alt="whatsapp" />
        Agendar Taller
      </a>

      </div>

      </section>

    </div>
  );
}
