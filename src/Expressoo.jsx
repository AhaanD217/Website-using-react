// import React from "react";

// const Newspaper = () => {
//   const openDocument = (path) => {
//     window.open(path, "_blank");
//   };

//   const newspapers = [
//     {
//       title: "January Edition",
//       description: "Highlights of January's events and achievements.",
//       path: "path/to/your-january-document.pdf",
//       image: "https://via.placeholder.com/200",
//     },
//     {
//       title: "February Edition",
//       description: "Exciting updates from February's activities.",
//       path: "path/to/your-february-document.pdf",
//       image: "https://via.placeholder.com/200",
//     },
//     {
//       title: "March Edition",
//       description: "March's newsletter featuring our latest updates.",
//       path: "path/to/your-march-document.pdf",
//       image: "https://via.placeholder.com/200",
//     },
//   ];

//   return (
//     <div className="bg-purple-50 min-h-screen flex flex-col items-center p-10">
//       <h1 className="text-4xl font-bold text-purple-900 mb-8">Our Newspapers</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {newspapers.map((newspaper, index) => (
//           <div
//             key={index}
//             className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center"
//           >
//             <img
//               src={newspaper.image}
//               alt={newspaper.title}
//               className="w-full h-40 object-cover rounded mb-4"
//             />
//             <h2 className="text-xl font-semibold text-purple-800 mb-2">
//               {newspaper.title}
//             </h2>
//             <p className="text-gray-600 mb-4">{newspaper.description}</p>
//             <button
//               onClick={() => openDocument(newspaper.path)}
//               className="bg-purple-700 text-white py-2 px-4 rounded hover:bg-purple-800"
//             >
//               Open Document
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Expressoo;
