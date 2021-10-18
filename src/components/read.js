import axios, { Axios } from "axios";
import React, { Component } from "react";
import Movies from "./movies";

// Class for the home page of the navbar containing the content of the component
export class Read extends Component {


    //                 


    componentDidMount() {
        //Calling axios to perform a http get request from the desired URL and return a promise
        axios.get('https://jsonblob.com/api/jsonblob/894944504570986496')

        //This is the promise. Once the data is obtained, then update the state
        .then((response)=>{
            this.setState({mymovies:response.data.movies})
        })

        //This is going to be an error function if .then does not work
        .catch((error)=>{
            console.log(error);
        });
    }




    state = {

        mymovies: []

    };



    //films = movies
    render() {
        return (
            <div>
                <h1>Hello from read.</h1>
                <Movies movies={this.state.mymovies}></Movies>

            </div>
        );
    }

}


export default Read;
