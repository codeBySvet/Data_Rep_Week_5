import React, { Component } from "react";

// Class for the home page of the navbar containing the content of the component
export class Content extends Component {

    render() {
        return (
            <div>
                <h1>Hello World</h1>

                {/* Show the time of day */}
                <h2>It is {new Date().toLocaleTimeString()}.</h2>
            </div>
        );
    }
}
//Marking for export
export default Content;





