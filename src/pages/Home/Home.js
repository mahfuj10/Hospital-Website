import React from 'react';
import Auth from '../../Context/Auth';
import Appointmnet from './Appointmnet/Appointmnet';
import Departments from './Departments/Departments';
import Header from './Header/Header';
import Services from './Services/Services';

const Home = () => {
  
    return (

        <Auth>
        
            {/* <Navbar /> */}
            <Header />
            <Services />
            <Departments />
            <Appointmnet />
            {/* <SignUpLogin /> */}
        </Auth>
    );
};

export default Home;