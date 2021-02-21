import './App.css';
import { useState, useEffect } from 'react';
import { getAllAdverts } from './services/AdvertService';
import FullList from './containers/FullList';
import { ScrollView } from "@cantonjs/react-scroll-view";

function App() {

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




  // const onHandleUpdate = () => {
  //   adverts[0].title = "Added this " + adverts[0].title;
  //   // setCustomers(customers); This is setting up the local data
  //   updateCustomer(adverts[0]); // This is updating the server-side data.
  // }


  // const onHandleDelete = () => {
  //   deleteCustomer(adverts[0].id); // This is updating the server-side data.
  // }


  const onAdvertSelected = (id, category) => {
    console.log(id + " " + category);
  }


  return (
    // <div className="App">
      <>
        <ScrollView className="scrollview-data">
          <FullList className="full-advert-list" adverts={adverts} onAdvertSelected={onAdvertSelected}/>
        </ScrollView>
      </>
  );
}

export default App;
