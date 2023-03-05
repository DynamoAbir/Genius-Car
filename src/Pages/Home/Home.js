import React from 'react';
import Banner from '../Banner/Banner';
import About from './About/About';
import Products from './Protucts/Products';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Products></Products>
        </div>
    );
};

export default Home;