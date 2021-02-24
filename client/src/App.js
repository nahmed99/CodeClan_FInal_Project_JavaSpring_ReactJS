import './App.css';
import { useState, useEffect } from 'react';
import { getAllAdverts } from './services/AdvertService';
import AdvertList from './containers/AdvertList';
import FullAdvert from './containers/FullAdvert';
import { ScrollView } from "@cantonjs/react-scroll-view";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './containers/Navbar';
import LoginForm from './containers/LoginForm';
import UserArea from './containers/UserArea';
import AdvertUpdate from './components/AdvertUpdate';
import AdvertAdd from './components/AdvertAdd';
import SearchForm from './containers/SearchForm';


function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [userId, setUserId] = useState(0);
  const [trigger, setTrigger] = useState(false);
  const [adverts, setAdverts] = useState([]);
  const [searchString, setSearchString] = useState("");
  const [category, setCategory] = useState("");
  // const [selectedCategory, setSelectedCategory] = useState("");
  // const [selectedId, setSelectedId] = useState(0);
  const [oneAdvert, setOneAdvert] = useState([]);
  const [searchRequested, setSearchReuested] = useState("");


  useEffect(() => {
    getAllAdverts(searchRequested, category)
    .then((adverts) => {
      setAdverts(adverts);
      // console.log(adverts);
    })
  }, [searchRequested]);



  // const onHandleUpdate = () => {
  //   adverts[0].title = "Added this " + adverts[0].title;
  //   // setCustomers(customers); This is setting up the local data
  //   updateCustomer(adverts[0]); // This is updating the server-side data.
  // }


  // const onHandleDelete = () => {
  //   deleteCustomer(adverts[0].id); // This is updating the server-side data.
  // }


  const onAdvertSelected = (advert) => {
    // Each time the user clicks on an advert summary, we
    // want the full advert to be displayed to the user.

    // if (category === "CAR") {
    //   getCarAdvert(id)
    //   .then((advert) => {
    //     console.log(advert);
    //     setOneAdvert(advert);
    //   });
    // }

    // if (category === "JOB") {
    //   getJobAdvert(id)
    //   .then((advert) => {
    //     console.log(advert);
    //     setOneAdvert(advert);
    //   });
    // }

    // if (category === "PROPERTY") {
    //   getPropertyAdvert(id)
    //   .then((advert) => {
    //     console.log(advert);
    //     setOneAdvert(advert);
    //   });
    // }

    setOneAdvert(advert);
    setTrigger(true);
  }

  const onLoginClicked = (loginStatus, user) => {
    setLoggedIn(loginStatus);
    setUserId(user)
  }

  const onSearchClicked = (searchString) => {
    setSearchReuested(searchString);
    
  }


  return (
      <Router>
        <header className="header-section"> 
        {/* Only one navigation bar will be shown - one when user
         is NOT logged in, or the other when user IS logged in */}
          
            <Navbar loggedIn={ loggedIn }/>

        </header>

        <div className='content'>
          <Switch>

            <Route exact path="/">
              <section>
                <SearchForm onSearchClicked={onSearchClicked} />
              </section>

              <section className="list-section">
                <ScrollView className="scrollview-data">
                  <AdvertList className="advert-list" adverts={adverts} onAdvertSelected={onAdvertSelected}/>
                </ScrollView>
              </section>

              <section className="full-advert-section">
                  <FullAdvert className="full-advert" advert={oneAdvert} trigger={trigger} setTrigger={setTrigger}/>
              </section>
              
            </Route>

            <Route path="/login">
              <LoginForm loggedIn={loggedIn} onLoginClicked={onLoginClicked}/>
            </Route>
            
            <Route path="/user">
              <UserArea userId={userId} />
            </Route>

            <Route path="/update/:id">
              <AdvertUpdate /> 
            </Route>

            {/* <Route path="/job/update/:id">
              <UpdateJobAdvert /> 
            </Route>

            <Route path="/property/update/:id">
              <UpdatePropertyAdvert />
            </Route> */}

            <Route path="/add/:id">
              <AdvertAdd /> 
            </Route>

          </Switch>
        </div>

        <footer  className="footer-section">
        </footer>
      </Router>
  );
}

export default App;
