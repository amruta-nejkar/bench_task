
import './App.css';
import Count from './Components/Count';
import FormDialog from './Components/Dialog';
import Form from './Components/Form';
import Profile from './Components/Profile';
import Student from './Components/Student';
import Button from './Components/button';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Home from './Components/pages/Home';
import About from './Components/pages/About';
import Contact from './Components/pages/Contact';
import Navbar from './Components/layout/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from './Components/pages/NotFound';
import AddUser from './Users/Adduser';
import EditUser from './Users/EditUser';
import ViewUser from './Users/VeiwUser';



function App() {
  return (
    <>
      {/* <h1>Welcome To Dashboard</h1>
      <Button /> */}
      {/* <Profile data="Hello props" text={{ name: 'Amruta' }} /> */}
      {/* <Student name="student name data" rollno="400" />
      <FormDialog/>
      <Count/> */}
     
      <BrowserRouter>
        <Routes>
            <Route path='/' element={ <Home />} />
            <Route path="about" element={ <About />} />
            <Route path="contact" element={ <Contact />} />   
            <Route path='users/add' element={<AddUser />} />
            <Route path='users/edit/:id' element={<EditUser />} />
            <Route path='users/view/:id' element={<ViewUser />} />
            <Route element={ <NotFound />} />   
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App;
