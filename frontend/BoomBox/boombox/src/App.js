
import './App.css';


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";


import Home from "./webpages/Home";
import Albums from "./webpages/Albums";
import Rap from "./webpages/albumGenre/Rap";
import Pop from "./webpages/albumGenre/Pop"
import Rock from "./webpages/albumGenre/Rock"
import Jazz from "./webpages/albumGenre/Jazz"
import Classical from "./webpages/albumGenre/Classical"
import Electronic from "./webpages/albumGenre/Electronic"
import Country from "./webpages/albumGenre/Country"
import RandB from "./webpages/albumGenre/RandB"
import Reggae from "./webpages/albumGenre/Reggae"
import Blues from "./webpages/albumGenre/Blues"

import AlbumDetails from './webpages/AlbumDetails';

function App() {
  return (
    <>
      <Router>
          <Routes>
              <Route
                  exact
                  path="/"
                  element={<Home/>}
              />
               <Route
                  exact
                  path="/Albums"
                  element={<Albums/>}
              />
               <Route
                  exact
                  path="/Rap"
                  element={<Rap/>}
              />
              <Route
                  exact
                  path="/Pop"
                  element={<Pop/>}
              />
              <Route
                  exact
                  path="/Rock"
                  element={<Rock/>}
              />
              <Route
                  exact
                  path="/Jazz"
                  element={<Jazz/>}
              />
              <Route
                  exact
                  path="/Classical"
                  element={<Classical/>}
              />
              <Route
                  exact
                  path="/Electronic"
                  element={<Electronic/>}
              />
              <Route
                  exact
                  path="/Country"
                  element={<Country/>}
              />
              <Route
                  exact
                  path="/RandB"
                  element={<RandB/>}
              />
               <Route
                  exact
                  path="/Reggae"
                  element={<Reggae/>}
              />
               <Route
                  exact
                  path="/Blues"
                  element={<Blues/>}
              />
               <Route
                  exact
                  path="/Albums/:albumName"
                  element={<AlbumDetails/>}
              />
          </Routes>
      </Router>
    </>
  );
}

export default App;
