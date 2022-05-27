import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min";
import "./App.css";
import Registration from "../Registration/Registration";
import Navbar from "../Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Login/Login";
import Admin from "../Admin/Admin";
import { Provider } from "react-redux";
import store from "../../redux/store";
// import Logout from '../Logout/Logout';

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
            {/* <Route path='/registration' element={<Logout />} /> */}
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
