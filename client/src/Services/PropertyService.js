const baseURL = 'http://localhost:8080/properties/';


// Retrieve ALL records, or just a selection of them based on search criteria
export const getAllPropertyAdverts = (searchString) => {

    let newBaseURL = baseURL;

    if (searchString.length) {
        // Check if only searchString entered by user
        newBaseURL = newBaseURL + "?search=" + searchString;
    }

    // If above conditions are not true, then just the base URL will be used...
    return fetch(newBaseURL)
    .then(res => res.json())
}


// Retrieve ONE record
export const getPropertyAdvert = (id) => {
    return fetch(baseURL + id)
    .then(res => res.json())
}

// Create record
export const addPropertyAdverts = (propertyAdvert) => {
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(propertyAdvert),
        headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json())
}

// Update record
export const updatePropertyAdvert = (propertyAdvert) => {
    return fetch(baseURL + propertyAdvert.id, {   
        method: "PATCH",
        body: JSON.stringify(propertyAdvert),
        headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json());
}

// Delete record
export const deletePropertyAdvert = (id) => {
    return fetch(baseURL + id, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'}
    });
}