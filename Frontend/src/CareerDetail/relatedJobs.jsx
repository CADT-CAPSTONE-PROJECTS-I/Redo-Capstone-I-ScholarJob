// import { React, axios, appStore, getRelatedJobs, Link , useEffect } from "../import/all_import.jsx";

// const relatedJobs = () => {
//     const { relatedJobs, setRelatedJobs } = useJobStore(); // Access Zustand store

//   useEffect(() => {
//     const fetchJobs = async () => {
//       const { jobs } = await getRelatedJobs(); // Fetch jobs from the API
//       setRelatedJobs(jobs); // Set the jobs in Zustand state
//     };

//     fetchJobs();
//   }, [setRelatedJobs]);

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   return (
//     <div>
//       <section className="mt-6">
//         {/* Scrollable container */}
//         <div className="shadow-2xl rounded-b-lg h-[370px] overflow-x-scroll no-scrollbar w-[1400px] m-auto bg-gray-200">
//           <ul className="list-none" onClick={scrollToTop}>
//             <div className="flex mt-3">
//               {relatedJobs.map((relatedJob) => (
//                 <li
//                   key={relatedJob.id}
//                   className="w-60 h-100 mx-3 bg-gray-300 shadow-xl rounded-lg overflow-y-auto flex-shrink-0"
//                 >
//                   <Link to={`/career/${relatedJob.id}`}>
//                     <div className="flex items-center justify-center h-[270px] p-2">
//                       <img
//                         src={relatedJob.image_url || ScholarJobLogoGreen} // Adjust according to your API data structure
//                         className="w-full h-full object-contain rounded-lg border border-gray-300"
//                       />
//                     </div>
//                     <div className="p-2 bg-gray-200">
//                       <h2 className="text-center h-[55px] text-lg font-semibold text-gray-600">
//                         {relatedJob.title}{" "}
//                         {/* Adjust according to your API data structure */}
//                       </h2>
//                     </div>
//                   </Link>
//                 </li>
//               ))}
//             </div>
//           </ul>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default relatedJobs;
