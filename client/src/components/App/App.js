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
import { initProductsFetch } from "../../redux/reduxThunk/productsThunk";
import { useEffect } from "react";
import Order from "../Order/Order";
import Cart from "../Cart/Cart";
import { showOrdersFetch } from "../../redux/reduxThunk/orderThunk";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initProductsFetch());
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
          <Route path="/collection/:name" element={<CollectionPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Order />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
