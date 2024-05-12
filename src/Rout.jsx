import CarModel from './components/Cars/CarModel';
import GarageModel from './components/Garage/GarageModel';
import Login from './components/Login_form/Login';
import ReportModel from './components/Reports/ReportModel';
import UserModel from './components/Users/UserModel';
import { Route, Routes } from 'react-router-dom';

function Rout() {
  return (
    <>
      <header>
        {/* <Link to="/car"> Car</Link>
        <Link to="/user"> User</Link>
        <Link to="/report"> Report</Link>
        <Link to="/garage"> Garage</Link> */}
      </header>

      <Routes>
        <Route path="/car" element={<CarModel />}></Route>
        <Route path="/user" element={<UserModel />}></Route>
        <Route path="/report" element={<ReportModel />}></Route>
        <Route path="/garage" element={<GarageModel />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </>
  );
}

export default Rout;