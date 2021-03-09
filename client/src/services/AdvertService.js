const baseURL = 'http://localhost:8080/all/';

// This link was not working, but the others were. Eventually found
// that ABP (AdBlock Plus) was blocking it...due to the word 
// "adverts" in the URL? Kept getting "net::ERR_BLOCKED_BY_CLIENT",
// until I disabled ABP...


// Retrieve ALL records, or a selection based on search criteria
export const getAllAdverts = (searchString, category) => {

    let newBaseURL = baseURL;

    
    // if (searchString.length > 0 && category.length > 0) {
    if (searchString.length && category.length) {
        // Check if searchString and category are true (i.e., length greater than 0)
        newBaseURL = newBaseURL + "?search=" + searchString + "&category=" + category;
    } else if (searchString.length) {
        // Check if only searchString entered by user
        newBaseURL = newBaseURL + "?search=" + searchString;
    } else if (category.length) {
        // Check if only category entered by user
        newBaseURL = newBaseURL + "?category=" + category;
    }

    // If none of the above conditions are true, then just the base URL will be used...

    return fetch(newBaseURL)
    .then(res => res.json())
    // .then(data => data)  Do I need this???
}