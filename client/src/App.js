import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar.jsx';

import AddUser from './components/AddUser.jsx';
import AllUser from './components/AllUser.jsx';
import CRUD from './components/CRUD.jsx';
import EditUser from './components/EditUser.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<CRUD />} />
          <Route path="/adduser" element={<AddUser />} />
          <Route path="/alluser" element={<AllUser />} />
          <Route path="/edituser/:id" element={<EditUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
