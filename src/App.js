import './App.css';
import Home from './pages/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import SignUpLogin from './pages/LogInSignUp/SignUpLogin';
import Navbar from './pages/Home/Header/Navbar';
import Auth from './Context/Auth';
import ServiceDetails from './pages/Details/ServiceDetails';
import getReview from '../src/pages/Home/Feddback/getReview';
import Footer from './pages/Footer/Footer';
import React, { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./App.css";
import Feedback from 'react-bootstrap/esm/Feedback';
import img1 from '../src/images/image1.jpg';
import Review from './pages/Home/Feddback/Review';
import { spacing } from '@mui/system';
import customerReview from './pages/Home/Feddback/customerReview';
import Contact from './pages/Contact/Contact';
import About from '../src/pages/About/About';
import Doctors from './pages/Doctors/Doctors';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Blog from './pages/Blog/Blog';
import NoFound from './pages/Nofound/Nofound';

function App() {

     const [sliderRef] = useKeenSlider({
          spacing: 10,
          slidesPerView: 1,
          centered: true,
          loop: true,
          mode: "snap",
          breakpoints: {
            "(min-width: 768px)": {
              slidesPerView: 2,
              mode: "free-snap",
            },
            "(min-width: 1200px)": {
              slidesPerView: 3,
              mode: "free-snap",
            },
          },
        });

      
  return (
       
  <Auth>
    
     <BrowserRouter>

<Navbar/>
    
     <Switch>
     


       <Route exact path="/">
         
           <Home />
           <article style={{marginTop:"200px",marginBottom:"200px"}} >
          <h3 className="text-center mb-5">WHAT OUR PATIENTS SAYS</h3>
          <div ref={sliderRef} className="keen-slider">
            <div className=" keen-slider__slide number-slide1">
            <img style={{width:"100px",height:"100px",borderRadius:"50%",marginBottom:'10px',marginLeft:"43%",marginTop:"25px"}} src={img1} alt="" />
            <h5 className="text-center">Rahim Mehedi</h5>
            <p className="w-75 text-center ps-5 ms-5">hank you so much for your kind words, Jane. We really appreciate you taking the time out to share your experience with us</p>
                   
            </div>
             <div className="keen-slider__slide number-slide2">
             <img style={{width:"100px",height:"100px",borderRadius:"50%",marginBottom:'10px',marginLeft:"43%",marginTop:"25px"}} src="https://image.freepik.com/free-photo/mand-holding-cup_1258-340.jpg" alt="" />
                    <h5 className="text-center">Fahim Salehi</h5>
                    <p className="w-75 text-center ps-5 ms-5">hank you so much for your kind words, Jane. We really appreciate you taking the time out to share your experience with us</p>
             </div>
           <div className="keen-slider__slide number-slide3">
           <img style={{width:"100px",height:"100px",borderRadius:"50%",marginBottom:'10px',marginLeft:"43%",marginTop:"25px"}} src="https://image.freepik.com/free-photo/mand-holding-cup_1258-340.jpg" alt="" />
                    <h5 className="text-center">Fahim Salehi</h5>
                    <p className="w-75 text-center ps-5 ms-5">hank you so much for your kind words, Jane. We really appreciate you taking the time out to share your experience with us</p>
           </div>
           <div className="keen-slider__slide number-slide4">
           <img style={{width:"100px",height:"100px",borderRadius:"50%",marginBottom:'10px',marginLeft:"43%",marginTop:"25px"}} src="https://image.freepik.com/free-photo/mand-holding-cup_1258-340.jpg" alt="" />
                    <h5 className="text-center">Fahim Salehi</h5>
                    <p className="w-75 text-center ps-5 ms-5">hank you so much for your kind words, Jane. We really appreciate you taking the time out to share your experience with us</p>
           </div>
          <div className="keen-slider__slide number-slide5">
          <img style={{width:"100px",height:"100px",borderRadius:"50%",marginBottom:'10px',marginLeft:"43%",marginTop:"25px"}} src="https://image.freepik.com/free-photo/mand-holding-cup_1258-340.jpg" alt="" />
                    <h5 className="text-center">Fahim Salehi</h5>
                    <p className="w-75 text-center ps-5 ms-5">hank you so much for your kind words, Jane. We really appreciate you taking the time out to share your experience with us</p>
          </div>
           <div className="keen-slider__slide number-slide6">
           <img style={{width:"100px",height:"100px",borderRadius:"50%",marginBottom:'10px',marginLeft:"43%",marginTop:"25px"}} src="https://image.freepik.com/free-photo/mand-holding-cup_1258-340.jpg" alt="" />
                    <h5 className="text-center">Fahim Salehi</h5>
                    <p className="w-75 text-center ps-5 ms-5">hank you so much for your kind words, Jane. We really appreciate you taking the time out to share your experience with us</p>
           </div>
          </div>
          </article>
        
          
       
       </Route>

       <Route path="/home">
            <Home />

            <article style={{marginTop:"200px",marginBottom:"200px"}} >
          <h3 className="text-center mb-5">WHAT OUR PATIENTS SAYS</h3>
          <div ref={sliderRef} className="keen-slider">
            <div className=" keen-slider__slide number-slide1">
            <img style={{width:"100px",height:"100px",borderRadius:"50%",marginBottom:'10px',marginLeft:"43%",marginTop:"25px"}} src="https://image.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg" alt="" />
            <h5 className="text-center">Rahim Mehedi</h5>
            <p className="w-75 text-center ps-5 ms-5">hank you so much for your kind words, Jane. We really appreciate you taking the time out to share your experience with us</p>
                   
            </div>
             <div className="keen-slider__slide number-slide2">
             <img style={{width:"100px",height:"100px",borderRadius:"50%",marginBottom:'10px',marginLeft:"43%",marginTop:"25px"}} src="https://image.freepik.com/free-photo/mand-holding-cup_1258-340.jpg" alt="" />
                    <h5 className="text-center">Fahim Salehi</h5>
                    <p className="w-75 text-center ps-5 ms-5">hank you so much for your kind words, Jane. We really appreciate you taking the time out to share your experience with us</p>
             </div>
           <div className="keen-slider__slide number-slide3">
           <img style={{width:"100px",height:"100px",borderRadius:"50%",marginBottom:'10px',marginLeft:"43%",marginTop:"25px"}} src="https://image.freepik.com/free-photo/mand-holding-cup_1258-340.jpg" alt="" />
                    <h5 className="text-center">Fahim Salehi</h5>
                    <p className="w-75 text-center ps-5 ms-5">hank you so much for your kind words, Jane. We really appreciate you taking the time out to share your experience with us</p>
           </div>
           <div className="keen-slider__slide number-slide4">
           <img style={{width:"100px",height:"100px",borderRadius:"50%",marginBottom:'10px',marginLeft:"43%",marginTop:"25px"}} src="https://image.freepik.com/free-photo/mand-holding-cup_1258-340.jpg" alt="" />
                    <h5 className="text-center">Fahim Salehi</h5>
                    <p className="w-75 text-center ps-5 ms-5">hank you so much for your kind words, Jane. We really appreciate you taking the time out to share your experience with us</p>
           </div>
          <div className="keen-slider__slide number-slide5">
          <img style={{width:"100px",height:"100px",borderRadius:"50%",marginBottom:'10px',marginLeft:"43%",marginTop:"25px"}} src="https://image.freepik.com/free-photo/mand-holding-cup_1258-340.jpg" alt="" />
                    <h5 className="text-center">Fahim Salehi</h5>
                    <p className="w-75 text-center ps-5 ms-5">hank you so much for your kind words, Jane. We really appreciate you taking the time out to share your experience with us</p>
          </div>
           <div className="keen-slider__slide number-slide6">
           <img style={{width:"100px",height:"100px",borderRadius:"50%",marginBottom:'10px',marginLeft:"43%",marginTop:"25px"}} src="https://image.freepik.com/free-photo/mand-holding-cup_1258-340.jpg" alt="" />
                    <h5 className="text-center">Fahim Salehi</h5>
                    <p className="w-75 text-center ps-5 ms-5">hank you so much for your kind words, Jane. We really appreciate you taking the time out to share your experience with us</p>
           </div>
          </div>
          </article>
          
       </Route>

       <Route path="/login">
           <SignUpLogin />
       </Route>

       <Route path="/signup">
            <SignUpLogin />

       </Route>

       <PrivateRoute path="/details/:departmentId">
            <ServiceDetails />
       </PrivateRoute>

       <Route path="/contact">
            <Contact />
       </Route>

       <Route path="/about">
            <About />
       </Route>

       <Route path="/doctors">
            <Doctors />
       </Route>

       <Route path="/blog">
            <Blog />
       </Route>

       <Route exact path="*">
            <NoFound />
       </Route>
     
     </Switch>
       <Footer />

     </BrowserRouter>

     </Auth>
  );
}

export default App;
