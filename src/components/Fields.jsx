// function Fields({setSortType,data}){

//     return (
//         <>
//         <div className="flex items-center justify-center gap-5 p-16">
//             {/* drop down menu for search type */}
//             <div className="dropdown dropdown-hover">
//                 <div tabindex="0" role="button" className="btn m-1 secondary-font">SORT...</div>
//                     <ul tabindex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-lg">
//                         <li><a onClick={() => setSortType("Title")}>By Title</a></li>
//                         <li><a onClick={() => setSortType("Date")}>By Date</a></li>
//                         <li><a onClick={() => setSortType("Rating")}>By IMDb Rating</a></li>
//                     </ul>
//             </div>
//             {/* ascending/descending checkbox */}
//             <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-32 border p-4">
//                 <legend className="fieldset-legend secondary-font">Sorting Options</legend>
//                 <label className="label secondary-font">
//                     <input type="checkbox" defaultChecked className="checkbox" onChange={() => setAscending(!ascending)}/>
//                     Ascending Order
//                 </label>
//             </fieldset>
//         </div>
//         </>
//     );

// }