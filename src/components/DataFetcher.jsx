/* DataFetcher.jsx
 * This component is used to fetch the movie data from movie.json. */

import { useState, useEffect } from "react";

function DataFetcher() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  async function fetchData() {
    try {
      const response = await fetch("/movie.json",);

      if (!response.ok) throw new Error("failed to fetch");
      const myData = await response.json();
      console.log(myData);
      setData(myData);
      setError(null);
      console.log(data);
    } catch (err) {
      setError(err);
      console.log(err);
      console.log(error);
      setData(null);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  // this can be changed later -- just to make sure the data is being read correctly
  /* use tailwind css to display the movies in a grid layout, 1 column on small screens and 2 columns on medium screens.
   * puts a gap of 10px between each movie and centers it */
  return (
    <>
      {isLoading && <h1 className="text-7xl">Loading data ... please wait</h1>}
      {!isLoading && data && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto p-16"> 
          {data.map((d, index) => (
            <div className="card w-96 bg-base-100 card-xs shadow-sm">
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

export default DataFetcher;