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