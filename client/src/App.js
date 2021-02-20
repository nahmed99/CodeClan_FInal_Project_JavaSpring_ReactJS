import { useState, useEffect } from 'react';
import './App.css';
import {getAllCustomers, updateCustomer, deleteCustomer} from './Services/CustomerService';

function App() {

  const [customers, setCustomers] = useState([]);


  useEffect(() => {
    getAllCustomers()
    .then((customers) => {
      setCustomers(customers);
      console.log(customers);
    })
  }, []);


  const onHandleUpdate = () => {
    customers[0].firstName = "Awite Yaara";
    // setCustomers(customers); This is setting up the local data
    updateCustomer(customers[0]); // This is updating the server-side data.
  }


  const onHandleDelete = () => {
    deleteCustomer(customers[0].id); // This is updating the server-side data.
  }




  return (
    <div className="App">
      <p onClick={onHandleUpdate}> Click to update first customer </p>
      <p onClick={onHandleDelete}> Click to delete first customer </p>
    </div>
  );
}

export default App;
