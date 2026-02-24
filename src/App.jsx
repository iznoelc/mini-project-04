import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import DataDisplayer from './components/DataDisplayer';
import './App.css'
import SearchBar from "./components/Search";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [filteredData,setFilteredData] = useState(null);

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

    return(
        <>
            <NavBar />
            <DataDisplayer isLoading={isLoading} data={filteredData ?? data} />
            <Search data={data} onSearch={setFilteredData}></Search>
        </>
    );
};


export default App;
