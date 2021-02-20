const baseURL = 'http://localhost:8080/jobs/';


// Retrieve ALL records, or just a selection of them based on search criteria
export const getAllJobAdverts = (searchString) => {

    let newBaseURL = baseURL;

    
    // if (searchString.length > 0 && category.length > 0) {
    if (searchString.length) {
        // Check if only searchString entered by user
        newBaseURL = newBaseURL + "?search=" + searchString;
    }

    // If above conditions are not true, then just the base URL will be used...
    return fetch(newBaseURL)
    .then(res => res.json())
}


// Retrieve ONE record
export const getJobAdvert = (id) => {
    return fetch(baseURL + id)
    .then(res => res.json())
}

// Create record
export const addJobAdverts = (jobAdvert) => {
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(jobAdvert),
        headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json())
}

// Update record
export const updateJobAdvert = (jobAdvert) => {
    return fetch(baseURL + jobAdvert.id, {   
        method: "PATCH",
        body: JSON.stringify(jobAdvert),
        headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json());
}

// Delete record
export const deleteJobAdvert = (id) => {
    return fetch(baseURL + id, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'}
    });
}