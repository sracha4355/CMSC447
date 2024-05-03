
import './App.css';


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";


import Home from "./webpages/Home";

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

import ArtistsRap from "./webpages/artistGenre/Rap"
import ArtistsRock from "./webpages/artistGenre/Rock"
import ArtistsRandB from "./webpages/artistGenre/RandB"
import ArtistsPop from "./webpages/artistGenre/Pop"
import ArtistsLatino from "./webpages/artistGenre/Latino"
import ArtistsJazz from "./webpages/artistGenre/Jazz"
import ArtistsElectronic from "./webpages/artistGenre/Electronic"
import ArtistsCountry from "./webpages/artistGenre/Country"
import ArtistsClassical from "./webpages/artistGenre/Classical"
import ArtistsBlues from "./webpages/artistGenre/Blues"


import Albums from "./webpages/Albums";
import Songs from './webpages/Songs'
import Artists from './webpages/Artists'
<<<<<<< Updated upstream
=======
import Playlists from './webpages/Playlists'


import ManagePlaylist from './webpages/ManagePlaylist'
import BrowsePlaylist from './webpages/BrowsePlaylist'
import CreatePlaylist from './webpages/CreatePlaylist'
import DeletePlaylist from './webpages/DeletePlaylist'
import ModifyPlaylist from './webpages/ModifyPlaylist'
import PlaylistDetails from './webpages/PlaylistDetails'


import Search from './webpages/Search'
>>>>>>> Stashed changes

import AlbumDetails from './webpages/AlbumDetails';
import SongDetails from './webpages/songDetails';
import ArtistDetails from './webpages/ArtistDetails'

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
                  path="/Artists"
                  element={<Artists/>}
              />
               <Route
                  exact
                  path="/Artists/Artists/Rap"
                  element={<ArtistsRap/>}
              />
              <Route
                  exact
                  path="/Artists/Artists/Rock"
                  element={<ArtistsRock/>}
              />
              <Route
                  exact
                  path="/Artists/Artists/RandB"
                  element={<ArtistsRandB/>}
              />
              <Route
                  exact
                  path="/Artists/Artists/Pop"
                  element={<ArtistsPop/>}
              />
              <Route
                  exact
                  path="/Artists/Artists/Latino"
                  element={<ArtistsLatino/>}
              />
              <Route
                  exact
                  path="/Artists/Artists/Jazz"
                  element={<ArtistsJazz/>}
              />
              <Route
                  exact
                  path="/Artists/Artists/Electronic"
                  element={<ArtistsElectronic/>}
              />
              <Route
                  exact
                  path="/Artists/Artists/Country"
                  element={<ArtistsCountry/>}
              />
              <Route
                  exact
                  path="/Artists/Artists/Classical"
                  element={<ArtistsClassical/>}
              />
              <Route
                  exact
                  path="/Artists/Artists/Blues"
                  element={<ArtistsBlues/>}
              />
              <Route
                  exact
                  path="/Songs/Songs/Rap"
                  element={<SongsRap/>}
              />
              <Route
                  exact
                  path="/Songs/Songs/Rock"
                  element={<SongsRock/>}
              />
              <Route
                  exact
                  path="/Songs/Songs/RandB"
                  element={<SongsRandB/>}
              />
              <Route
                  exact
                  path="/Songs/Songs/Pop"
                  element={<SongsPop/>}
              />
              <Route
                  exact
                  path="/Songs/Songs/Latino"
                  element={<SongsLatino/>}
              />
              <Route
                  exact
                  path="/Songs/Songs/Jazz"
                  element={<SongsJazz/>}
              />
              <Route
                  exact
                  path="/Songs/Songs/Electronic"
                  element={<SongsElectronic/>}
              />
              <Route
                  exact
                  path="/Songs/Songs/Country"
                  element={<SongsCountry/>}
              />
              <Route
                  exact
                  path="/Songs/Songs/Classical"
                  element={<SongsClassical/>}
              />
              <Route
                  exact
                  path="/Songs/Songs/Blues"
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
<<<<<<< Updated upstream
                  path="/Albums/:albumName"
=======
                  path="/Albums/:URI"
>>>>>>> Stashed changes
                  element={<AlbumDetails/>}
              />
              <Route
                  exact
<<<<<<< Updated upstream
                  path="/Songs/:songName"
=======
                  path="/Songs/:URI"
>>>>>>> Stashed changes
                  element={<SongDetails/>}
              />
              <Route
                  exact
<<<<<<< Updated upstream
                  path="/Artists/:artistName"
                  element={<ArtistDetails/>}
              />
=======
                  path="/Artists/:URI"
                  element={<ArtistDetails/>}
              />
              <Route
                  exact
                  path="/Playlists"
                  element={<Playlists/>}
              />
              <Route
                  exact
                  path="/Playlists/:playlistID"
                  element={<PlaylistDetails/>}
              />
              <Route
                  exact
                  path="/Playlists/Manage"
                  element={<ManagePlaylist/>}
              />
              <Route
                  exact
                  path="/Playlists/Browse"
                  element={<BrowsePlaylist/>}
              />
              <Route
                  exact
                  path="/Playlists/Manage/Create"
                  element={<CreatePlaylist/>}
              />
              <Route
                  exact
                  path="/Playlists/Manage/Modify"
                  element={<ModifyPlaylist/>}
              />
              <Route
                  exact
                  path="/Playlists/Manage/Delete"
                  element={<DeletePlaylist/>}
              />
              <Route
                  exact
                  path="/Search"
                  element={<Search/>}
              />
>>>>>>> Stashed changes
          </Routes>
      </Router>
    </>
  );
}

export default App;
