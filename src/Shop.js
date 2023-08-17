import React, {Component} from "react";

class Shop extends Component {
    render() {
        return(
            <div className="shop">
                <h2>Welcome to our product page</h2>
                <p1>Please make a selection from the options below. Once you have selected you items please go to the check out page to place your order</p1>
                <img alt="long board" src={"https://scene7.zumiez.com/is/image/zumiez/product_main_medium/Gold-Coast-Classic-Blond-37%22-Pintail-Longboard-Complete-_350609-front-US.jpg"}></img>
                <p>Longboards:</p>
                <p>Longboards are distinguished by the fact that they are at least 33 inches long. 
                    They are usually used as a mode of transport and for cruising around the urban areas. 
                    Also, beginners will enjoy using them to learn to maneuver and maintain stability on the board. 
                    As they feature larger wheels, they tend to go fast and are great for big turns. </p>
                <img alt="cruiser board" src={"https://www.ridingboards.com/wp-content/uploads/2021/09/globe-blazer-1.jpg.webp"}></img>
                <p>Cruiserboard</p>
                <p>Cruisers are similar to longboards in a way, as they are a great choice to get you from one point to another, but are also more portable than longboards, 
                    thanks to the smaller size. Because of their smaller size, it is even easier to make sharp turns. They offer a smooth ride but are not so beginner-friendly 
                    like longboards, as they are more unstable. </p>
            </div>
        );
    }
}
export default Shop;