import { useState} from "react";

function Search({onSearch, data}){
    //declaring variables for future use
    const [searchType, setSearchType] = useState("genre")

    //on sensing a change to the search string
    const handleChangeInSearch = (event) => {
        //set what str we will search for
        const search4 = event.target.value;
        //use filter to find the str in the data and return the result
        //specific to each type of search we want to enable
        //Note: we change things to lowercase to avoid simple grammer mistakes resulting in no results
        const results = data.filter(item => {
        const value = search4.toLowerCase();

        switch (searchType) {
        case "genre":
            return item.genre.toLowerCase().includes(value);

        case "age_group":
            return String(item.age_group).includes(value);

        case "releasing_year":
            return item.releasing_year.includes(value);

        default:
            return true;
        }
        });
        //set the results to be returned and given to the data displayer
        onSearch(results)
    }

    return (
        <>
            <select onChange={(e) => setSearchType(e.target.value)}>
                <option value="genre">Genre</option>
                <option value="age_group">Age Rating</option>
                <option value="releasing_year">Release Year</option>
            </select>
            <input type="text" onChange={handleChangeInSearch}></input>
        </>
    );
}

export default Search;