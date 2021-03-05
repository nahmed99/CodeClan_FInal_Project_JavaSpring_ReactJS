import { useState } from "react";

const SearchForm = ( { onSearchClicked, onSearchChanged } ) => {

    const [searchString, setSearchString] = useState("");

    const handleClick = () => {
        onSearchClicked(searchString);
        setSearchString("");
    }


    const handleOnChange = (searchValue) => {
        // onSearchChanged(searchString); - This doesn't work - 'delayed' by one char, due to the way React and JS works...
        onSearchChanged(searchValue);
        // console.log("in SearchForm: " + searchValue);
    }


    return (
        <div className="search-form">
            
            <br></br>

            {/* <input type="text" id="search" name="search" value={searchString} placeholder="Please enter search" onChange={(e) => setSearchString(e.target.value)} /> */}

            <input type="text" id="search" name="search" value={searchString} placeholder="Please enter search" onChange={(e) => {setSearchString(e.target.value); handleOnChange(e.target.value)}} />

            

            <button type="button" onClick={ handleClick } >Search</button>
            
        </div>
    );
}

export default SearchForm;