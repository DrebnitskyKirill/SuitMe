import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import './App.css';
import Registration from '../Registration/Registration';
import Navbar from '../Navbar/Navbar';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Login from '../Login/Login';
import CollectionPage from '../CollectionPage/CollectionPage';
// import Logout from '../Logout/Logout';


function App() {
  return (
   <>
   <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/registration' element={<Registration />} />
          <Route path='/login' element={<Login />} />
          {/* <Route path='/registration' element={<Logout />} /> */}
          <Route path='/collection' element={ <CollectionPage/> }/>
          <Route path='/collection/:id' element={ <CollectionPage/> }/>
        </Routes>
      </BrowserRouter>
   </>
  );
}

export default App;
