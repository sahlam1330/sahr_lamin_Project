import React, {Component} from "react";



class Shop extends Component {
    render() {
        return(
            <div>
                <h2>Shop</h2>
                <h2>Welcome to our shopping area, please take a look at our inventory</h2>
            <fieldset id="inventory">
                <table>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th><h4>Type</h4></th>
                            <th><h4>Price</h4></th>
                            <th><h4>Deals</h4></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td> 
                            <input type="image" src="https://www.ridingboards.com/wp-content/uploads/2021/09/globe-blazer-1.jpg.webp" 
                             width="100" height="100"/></td>
                            <td><label className="cruiserInfo" for="cruiserInfo" >
                             <h4>1998 SkyBender Cruiser board. </h4></label>
                            </td>
                            <td>
                                <h4>$150</h4>
                            </td>
                            <td>
                                <h4>10% off</h4>
                            </td>
                        </tr>
                        <tr>
                            <td>
                            <input type="image" src="https://scene7.zumiez.com/is/image/zumiez/product_main_medium/Gold-Coast-Classic-Blond-37%22-Pintail-Longboard-Complete-_350609-front-US.jpg" 
                            alt="Submit" width="100" height="100"/></td>
                            <td> <label  className="longInfo" for="longInfo"> 
                           <h4>1995 Longback Long board.</h4>  </label>
                            </td>
                            <td>
                                <h4>$200</h4>
                            </td>
                            <td>
                                <h4>5% off</h4>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </fieldset>
                
           
        
            </div>
        );
    }
}
export default Shop; 