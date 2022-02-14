import './css/App.css';
import GetAllUsers from './pages/GetAllUsers';
import Login from './Login';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import { useState } from 'react';
import UserHome from './components/UserHome';
import GetFatura from './pagesUser/GetFatura';
import GetMesaj from './pagesUser/GetMesaj';
import SendMesaj from './pagesUser/SendMesaj';
import AdminHome from './components/AdminHome';
import GetAllDaire from './pages/GetAllDaire';
import GetAllMesaj from './pages/GetAllMesaj';
import GetAllFatura from './pages/GetAllFatura';
import AddDaire from './pages/AddDaire';
import AddFatura from './pages/AddFatura';
import AddUser from './pages/AddUser';
import EditUser from './pages/EditUser';
import EditDaire from './pages/EditDaire';
import SendResponse from './pages/SendResponse';
import TopluFatura from './pages/TopluFatura';
import MakeOdeme from './pagesUser/MakeOdeme';
import NotFound from './NotFound';

function App() {

  return ( 
    <>
    <Router>

 <Routes>
  <Route path='/' element={<Login />}>
    </Route>

    <Route path='/getAllUsers' exact element={<GetAllUsers />}>
    </Route>
    <Route path='/getAllUsers/addUser' element={<AddUser />}>
    </Route>

    <Route path='/getAllUsers/editUser/:id' element={<EditUser />}>
    </Route>

    <Route path='/getAllUsers/addFatura/:id/:did' element={<AddFatura />}>
    </Route>

    <Route path='/userHome' element={<GetFatura />}>
    </Route>

    <Route path='/userGetFatura' exact element={<GetFatura />}>
    </Route>

    <Route path='/userGetFatura/makeOdeme/:id/:amount' element={<MakeOdeme />}>
    </Route>

    <Route path='/userGetMesaj' element={<GetMesaj />}>
    </Route>

    <Route path='/userCreateMesaj' element={<SendMesaj />}>
    </Route>

    <Route path='/adminHome' element={<GetAllUsers />}>
    </Route>

    <Route path='/getAllDaire' exact element={<GetAllDaire />}>
    </Route>

    <Route path='/getAllDaire/editDaire/:id' element={<EditDaire />}>
    </Route>

    <Route path='/getAllMesaj' exact element={<GetAllMesaj />}>
    </Route>

    <Route path='/getAllMesaj/mesajDetay/:id' element={<SendResponse />}>
    </Route>

    <Route path='/getAllFatura' exact element={<GetAllFatura />}>
    </Route>

    <Route path='/getAllFatura/topluFatura' element={<TopluFatura />}>
    </Route>


    <Route path='/getAllDaire/addDaire' element={<AddDaire />}>
    </Route>

    <Route path='/*' element={<NotFound />}>
    </Route>
    </Routes>

    </Router>
    
    </>
    
  );
  
}

export default App;
