import React, { Component } from "react";
import { Route, Routes,
    NavLink, 
    HashRouter
} from "react-router-dom";
import Home from "./Home";
import Shop from "./Shop";
import Checkout from "./Checkout";
import About from "./About";
import './index';



class Main extends Component{
    render() {
        return (
            <HashRouter>
                <div>
                    <h1 className="title">Slamin Skate Shop</h1>
                    <h2>Find great deals on skate supplies too!</h2>
                    <ul className="header">
                        <li className= 'home'><NavLink to="/home">Home</NavLink></li>
                        <li className='shop'><NavLink to="/shop">Shop</NavLink></li>
                        <li className='checkout'><NavLink to="/checkout">Checkout</NavLink></li>
                        <li className='aboutus'><NavLink to="/aboutus">About Us</NavLink></li>
                    </ul>
                    <div className="content">
                    <Routes>
                        <Route path="/home" element={<Home/>} />
                        <Route path="/shop" element={<Shop/>} />
                        <Route path="/checkout" element={<Checkout/>} />
                        <Route path="/aboutus" element={<About/>} />
                    </Routes>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main;