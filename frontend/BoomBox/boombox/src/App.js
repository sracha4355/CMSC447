
import './App.css';


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";


import Home from "./webpages/Home";
import Albums from "./webpages/Albums";

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
          </Routes>
      </Router>
    </>
  );
}

export default App;
