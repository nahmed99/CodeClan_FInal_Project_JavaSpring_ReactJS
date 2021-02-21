import './App.css';
import { useState, useEffect } from 'react';
import { getAllAdverts } from './services/AdvertService';
import AdvertList from './containers/AdvertList';
import FullAdvert from './containers/FullAdvert';
import { ScrollView } from "@cantonjs/react-scroll-view";

function App() {

  const [adverts, setAdverts] = useState([]);
  const [searchString, setSearchString] = useState("");
  const [category, setCategory] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedId, setSelectedId] = useState(0);


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
    // Each time the user clicks on an advert summary, we
    // want the full advert to be displayed to the user.

    // We only want React to react to one of the variables below,
    // that will achieve our aim..? But what will happen if two
    // adverts with same id are clicked in succession? Will we
    // need to re-instate the category useState too?
    setSelectedId(id); 
    setSelectedCategory(category);
    console.log(id + " " + category);

  }


  return (
    // <div className="App">
      <>
        <header className="header-section"> 
        </header>
        <section className="list-section">
          <ScrollView className="scrollview-data">
            <AdvertList className="advert-list" adverts={adverts} onAdvertSelected={onAdvertSelected}/>
          </ScrollView>
        </section>
        <section className="full-advert-section">
          <ScrollView className="scrollview-data">
            <FullAdvert className="full-advert" id={selectedId} category={selectedCategory}/>
          </ScrollView>
        </section>
        <footer  className="footer-section">
        </footer>
      </>
  );
}

export default App;
