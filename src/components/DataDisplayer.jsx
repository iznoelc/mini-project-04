import { useState, useMemo } from "react";
import DataSorter from "./DataSorter";

function DataDisplayer({isLoading, data}){
    const [sortType, setSortType] = useState("Title"); // default sort type
    const [ascending, setAscending] = useState(true); // default sort direction 

    /* use useMemo to cache the result of DataSorter (jnside sortedData) that its only updated when its dependencies change. 
       if data, sortType, or ascending are updated, the result of DataSorter will also update to display the 
       new sortedData.
     */ 
    const sortedData = useMemo(() => {
        if (!data){
            console.log("Data is null");
            return [];
        }
        return DataSorter(sortType, ascending, data);
    }, [data, sortType, ascending]);

    // console.log("Incoming data:", data);
    // console.log("Sorted data:", sortedData);

    return (
        <>
        
        <div className="flex items-center justify-center gap-5 p-16">
            {/* drop down menu for search type */}
            <div className="dropdown dropdown-hover">
                <div tabindex="0" role="button" className="btn m-1">SORT...</div>
                    <ul tabindex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-lg">
                        <li><a onClick={() => setSortType("Title")}>By Title</a></li>
                        <li><a onClick={() => setSortType("Date")}>By Date</a></li>
                        <li><a onClick={() => setSortType("IMDb Rating")}>By IMDb Rating</a></li>
                    </ul>
            </div>
            {/* search bar */}
            <label class="input input-bordered input-m w-128">
                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" >
                    <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                    >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                    </g>
                </svg>
                <input type="search" required placeholder="Search for movies..." />
            </label>
        </div>

        {isLoading && <h1 className="text-7xl">Loading data ... please wait</h1>}
        {!isLoading && sortedData && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto p-8"> 

            {sortedData.map((d, index) => (
                <div key={index} className="card w-96 bg-base-100 card-xs shadow-sm">
                    <div className="card-body">
                        {/* put the title and description of the movie in the cards */}
                        <h2 className="card-title" key={index}>{d.title}</h2>
                        <p>{d.short_description}</p>
                        <div className="justify-end card-actions">
                        <button className="btn btn-primary">Favorite</button>
                        </div>
                    </div>
                </div>
            ))}
            </div>
        )}
        </>
    );
}

export default DataDisplayer;