import React from 'react';
import $ from 'jquery';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Service from './Service';
import Navbar from './Navbar';
import Footer from './Footer';
import { Switch, Route, Redirect } from 'react-router';


const App = () => {
    return(
        <>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/service" component={Service} />
                <Redirect to ="/"></Redirect>
            </Switch>
            <Footer/>
        </>    
    );
};

export default App;