const baseURL = 'http://localhost:8080/cars/';

// Retrieve ALL records
export const getAllCarAdverts = () => {
    return fetch(baseURL)
    .then(res => res.json())
}

// Retrieve ONE record
export const getCarAdvert = (id) => {
    return fetch(baseURL + id)
    .then(res => res.json())
}

// Create record
export const addCarAdverts = (carAdvert) => {
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(carAdvert),
        headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json())
}

// Update record
export const updateCarAdvert = (carAdvert) => {
    return fetch(baseURL + carAdvert.id, {    // Do we need to send an id to Spring???
        method: "PATCH",
        body: JSON.stringify(carAdvert),
        headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json());
}

// Delete record
export const deleteCarAdvert = (id) => {
    return fetch(baseURL + id, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'}
    });
}