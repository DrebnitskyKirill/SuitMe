
import "./App.css";
import Home from "../Home/Home";
import Logout from "../Logout/Logout";
import CardParams from "../CardParams/CardParams";
import Registration from "../Registration/Registration";
import Navbar from "../Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Login/Login";
import Admin from "../Admin/Admin";
import { Provider } from "react-redux";
import CollectionPage from "../CollectionPage/CollectionPage";
import store from "../../redux/store";


function App() {
  return (
    <>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/registration" element={<Registration />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/collection" element={<CollectionPage />} />
            <Route path="/" element={<Home />} />
            <Route path="/cardproduct" element={<CardParams />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/collection/:id" element={<CollectionPage />} />
          </Routes>
        </BrowserRouter>

    </>
  );
}

export default App;
