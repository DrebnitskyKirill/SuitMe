import "./App.css";
import Registration from "../Registration/Registration";
import Navbar from "../Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Login/Login";
import Admin from "../Admin/Admin";
import { Provider } from "react-redux";
import CollectionPage from '../CollectionPage/CollectionPage';
import store from "../../redux/store";


function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/registration" element={<Registration />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<Admin />} />
            <Route path='/collection' element={ <CollectionPage/> }/>
          <Route path='/collection/:id' element={ <CollectionPage/> }/>
           
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
