import './App.css';
import { useState, useEffect } from 'react';
import { getAllAdverts } from './Services/AdvertService';
import { getAllCustomers } from './Services/CustomerService';

function App() {

  const [customers, setCustomers] = useState([]);
  const [adverts, setAdverts] = useState([]);
  const [searchString, setSearchString] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    getAllAdverts(searchString, category)
    .then((adverts) => {
      setAdverts(adverts);
      console.log(adverts);
    })
  }, []);


  useEffect(() => {
    getAllCustomers()
    .then((customers) => {
      setCustomers(customers);
      console.log(customers);
    })
  }, []);


  // const onHandleUpdate = () => {
  //   adverts[0].title = "Added this " + adverts[0].title;
  //   // setCustomers(customers); This is setting up the local data
  //   updateCustomer(adverts[0]); // This is updating the server-side data.
  // }


  // const onHandleDelete = () => {
  //   deleteCustomer(adverts[0].id); // This is updating the server-side data.
  // }




  return (
    <div className="App">
      {/* <p onClick={onHandleUpdate}> Click to update first customer </p>
      <p onClick={onHandleDelete}> Click to delete first customer </p> */}
      <p>This is the home page</p>
    </div>
  );
}

export default App;
