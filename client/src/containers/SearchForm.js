import { useState } from "react";

const SearchForm = ( { onSearchClicked, onSearchChanged } ) => {

    const [searchString, setSearchString] = useState("");

    const handleClick = () => {
        onSearchClicked(searchString);
        setSearchString("");
    }


    // const handleOnChange = () => {
    //     onSearchChanged(searchString);
    //     console.log("in SearchForm: " + searchString);
    // }


    return (
        <div className="search-form">
            
            <br></br>

            {/* <input type="text" id="search" name="search" value={searchString} placeholder="Please enter search" onChange={(e) => {setSearchString(e.target.value); handleOnChange()}} /> */}

            <input type="text" id="search" name="search" value={searchString} placeholder="Please enter search" onChange={(e) => setSearchString(e.target.value)} />

            <button type="button" onClick={ handleClick } >Search</button>
            
        </div>
    );
}

export default SearchForm;