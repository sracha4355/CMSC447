
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
import Latino from "./webpages/albumGenre/Latino"
import Blues from "./webpages/albumGenre/Blues"


import SongsRap from "./webpages/songGenre/Rap"
import SongsRock from "./webpages/songGenre/Rock"
import SongsRandB from "./webpages/songGenre/RandB"
import SongsPop from "./webpages/songGenre/Pop"
import SongsLatino from "./webpages/songGenre/Latino"
import SongsJazz from "./webpages/songGenre/Jazz"
import SongsElectronic from "./webpages/songGenre/Electronic"
import SongsCountry from "./webpages/songGenre/Country"
import SongsClassical from "./webpages/songGenre/Classical"
import SongsBlues from "./webpages/songGenre/Blues"


import Songs from './webpages/Songs'

import AlbumDetails from './webpages/AlbumDetails';
import SongDetails from './webpages/songDetails';

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
                  path="/Songs"
                  element={<Songs/>}
              />
              <Route
                  exact
                  path="/Songs/Rap"
                  element={<SongsRap/>}
              />
              <Route
                  exact
                  path="/Songs/Rock"
                  element={<SongsRock/>}
              />
              <Route
                  exact
                  path="/Songs/RandB"
                  element={<SongsRandB/>}
              />
              <Route
                  exact
                  path="/Songs/Pop"
                  element={<SongsPop/>}
              />
              <Route
                  exact
                  path="/Songs/Latino"
                  element={<SongsLatino/>}
              />
              <Route
                  exact
                  path="/Songs/Jazz"
                  element={<SongsJazz/>}
              />
              <Route
                  exact
                  path="/Songs/Electronic"
                  element={<SongsElectronic/>}
              />
              <Route
                  exact
                  path="/Songs/Country"
                  element={<SongsCountry/>}
              />
              <Route
                  exact
                  path="/Songs/Classical"
                  element={<SongsClassical/>}
              />
              <Route
                  exact
                  path="/Songs/Blues"
                  element={<SongsBlues/>}
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
                  path="/Latino"
                  element={<Latino/>}
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
              <Route
                  exact
                  path="/Songs/:songName"
                  element={<SongDetails/>}
              />
          </Routes>
      </Router>
    </>
  );
}

export default App;
