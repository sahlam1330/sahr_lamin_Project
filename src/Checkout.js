import React, {Component} from "react";

class Checkout extends Component {
    render() {
        return(
            <div>
            <h1>Welcome to our checkout page</h1>
    
            <article>
            <h2>Enter your order information</h2>
            <fieldset id="orderinfo">
            <legend>Order</legend>
            <label for="nameinput">Name</label>
            <input type="text" id="namepinput" name="name" required="required"/>
            <label for="addrinput">Address</label>
            <input type="text" id="addrinput" name="address" required="required"/>
            <label for="cityinput">city</label>
            <input type="text" id="cityinput" name="city" required="required"/>
            <label for="emailinput">email</label>
            <input type="text" id="emailinput" name="email" required="required"/>
            <label for="phoneinput">phone</label>
            <input type="text" id="phoneinput" name="phone" required="required"/>
            </fieldset>
            <fieldset id="typeofskateboard">
                <legend>Type of board</legend>
                <select id="type" name="type" required="required">
                    <option value="Longboard">Longboard</option>
                    <option value="Cruiserboard">Cruiserboard</option>
                    <option value="Customize">Customize</option>
                </select>
            </fieldset>
            <fieldset id="instructions">
            <label for="instructions" id="instrlabel">Customize Board</label>
            <textarea id="instructions" name="instructions" rows="3" cols="50"
                placeholder="customize your skateboard"></textarea>
            </fieldset>
            <fieldset id="previewbutton">
                <input type="button" id="previewBtn" value="Preview Order" />
            </fieldset>
</article>              
            </div>
        );
    }
    

}





export default Checkout;