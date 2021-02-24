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
  const [searchString, setSearchString] = useState("");  // Not required???
  const [category, setCategory] = useState("");
  const [oneAdvert, setOneAdvert] = useState([]);
  const [searchRequested, setSearchRequested] = useState("");


  useEffect(() => {
    getAllAdverts(searchRequested, category)
    .then((adverts) => {
      setAdverts(adverts);
      // console.log(adverts);
    })
  }, [searchRequested]);


  const onAdvertSelected = (advert) => {
    setOneAdvert(advert);
    setTrigger(true);
  }

  const onLoginClicked = (loginStatus, user) => {
    setLoggedIn(loginStatus);
    setUserId(user)
  }

  const onSearchClicked = (searchString) => {
    setSearchRequested(searchString);
    
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
