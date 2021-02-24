import { useState } from "react";

const SearchForm = ( { onSearchClicked } ) => {

    const [searchString, setSearchString] = useState("");

    const handleClick = () => {
        onSearchClicked(searchString);
        setSearchString("");
    }


    return (
        <div className="search-form">
            
            <br></br>

            <input type="text" id="search" name="search" value={searchString} placeholder="Please enter search" onChange={(e) => setSearchString(e.target.value)}/>

            <button type="button" onClick={ handleClick } >Search</button>


            <br></br>
            
        </div>
    );
}

export default SearchForm;