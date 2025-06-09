import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route , Navigate} from 'react-router-dom';
import ApplyVisa from './components/ApplyVisa';
import ListBooking from './components/ListBooking';
import LandingPage from './components/Landing_page';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/login';
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';

// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// function App(){
//   const [user, setUser] = useState([])
//   useEffect(()=> {
//     axios.get('http://localhost:3001/book')
//     .then(user => setUser(user.data))
//     .catch(err= console.log(err))
//   }, [])

const VisaApplication = () => {
      const [isLoggedIn, setIsLoggedIn] = useState(false);

    const [data, setData] = useState([]);
    return (
        <>
       <div className='App'>
        <Router> 

            
                <Navbar/>
                 {/* <LandingPage/>  */}
                <Routes classname='main'>
                    <Route path="/" element={<Login onLogin={() => setIsLoggedIn(true)} />} />
                        <Route
          path="/landing"
          element={
            isLoggedIn ? <LandingPage /> : <Navigate to="/" />
          }
        />
                    {/* <Route path="/login" element={<Login data={data} setData={setData} />} />    */}
                    <Route path="/land" element={<LandingPage data={data} setData={setData} />} />   
                    <Route path="/book" element={<ApplyVisa data={data} setData={setData} />} />   
                    <Route path="/bookings" element={<ListBooking data={data} />} />   
                </Routes>
                
                <Footer/>  
        </Router>
       </div>
            
            {/* <BookTicket date={date} id={id} setId={setId} setDate={setDate} mobileNumber={mobileNumber} setMobileNumber={setMobileNumber} selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats}/> */}
            {/* <ListBooking date={date} id={id} setId={setId} setDate={setDate} mobileNumber={mobileNumber} setMobileNumber={setMobileNumber} selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats} /> */}
       
         {/* Footer Content */}
         
       
        </>
    );
    
};

export default VisaApplication;