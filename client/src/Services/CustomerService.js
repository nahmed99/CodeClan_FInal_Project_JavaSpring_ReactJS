const baseURL = 'http://localhost:8080/customers/';

// Retrieve ALL records
export const getAllCustomers = () => {
    return fetch(baseURL)
    .then(res => res.json())
}

// Retrieve ONE record
export const getCustomer = (id) => {
    return fetch(baseURL + id)
    .then(res => res.json())
}

// Create record
export const addCustomer = (customer) => {
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(customer),
        headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json())
}

// Update record
export const updateCustomer = (customer) => {
    return fetch(baseURL + customer.id, {   
        method: "PATCH",
        body: JSON.stringify(customer),
        headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json());
}

// Delete record
export const deleteCustomer = (id) => {
    return fetch(baseURL + id, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'}
    });
}

