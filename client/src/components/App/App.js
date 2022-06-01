import "./App.css";
import Home from "../Home/Home";
import Logout from "../Logout/Logout";
import CardParams from "../CardParams/CardParams";
import Registration from "../Registration/Registration";
import Navbar from "../Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Login/Login";
import Admin from "../Admin/Admin";
import { useDispatch } from "react-redux";
import CollectionPage from "../CollectionPage/CollectionPage";
import {
  showOrdersFetch,
  showProductsFetch,
} from "../../redux/reduxThunk/productsThunk";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showProductsFetch());
    dispatch(showOrdersFetch());
  }, [dispatch]);
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/collection" element={<CollectionPage />} />
          <Route path="/cardproduct/:id" element={<CardParams />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/collection/:id" element={<CollectionPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
