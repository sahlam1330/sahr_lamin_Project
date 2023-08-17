import React, { Component } from "react";
import { Route, Routes,
    NavLink, 
    HashRouter
} from "react-router-dom";
import Home from "./Home";
import Shop from "./Shop";
import Checkout from "./Checkout";



class Main extends Component{
    render() {
        return (
            <HashRouter>
                <div className="title">
                    <h1> Slamin Skate Shop</h1>
                    <ul className="header">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/shop">Shop</NavLink></li>
                        <li><NavLink to="/checkout">Checkout</NavLink></li>
                    </ul>
                    <div className="content">
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/shop" element={<Shop/>} />
                        <Route path="/checkout" element={<Checkout/>} />
                    </Routes>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main;