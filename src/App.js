import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Logo from "./components/Logo/Logo";
import NavBar from "./components/NavBar.js/NavBar";
import Trainings from "./components/Trainings/Trainings";
import HomePage from "./components/HomePage.js/HomePage";
function App() {

  return (
    <div className="app-div">
      <Router>
      {/* <Logo /> */}
      <NavBar />
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/treningi' element={<Trainings />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
